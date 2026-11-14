// Utilidades compartidas: acceso a Google Sheets con la cuenta de servicio (secreto GOOGLE_SA)
import crypto from 'node:crypto';
export const SHEET_ID = process.env.SHEET_ID;
export const SA = (() => { try { return JSON.parse(process.env.GOOGLE_SA || '{}'); } catch (e) { return {}; } })();
export const configured = () => !!(SA.client_email && SA.private_key && SHEET_ID);
const b64u = b => Buffer.from(b).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
let TOKEN = null;
export async function googleToken() {
  if (TOKEN) return TOKEN;
  const now = Math.floor(Date.now() / 1000);
  const head = b64u(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const body = b64u(JSON.stringify({ iss: SA.client_email, scope: 'https://www.googleapis.com/auth/spreadsheets', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }));
  const sig = b64u(crypto.createSign('RSA-SHA256').update(`${head}.${body}`).sign(SA.private_key));
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${head}.${body}.${sig}` }) });
  const j = await r.json(); if (!j.access_token) throw new Error('Google: ' + JSON.stringify(j)); return (TOKEN = j.access_token);
}
export async function api(path, opt = {}) {
  const t = await googleToken();
  const r = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}${path}`, { ...opt, headers: { Authorization: `Bearer ${t}`, 'content-type': 'application/json' } });
  const j = await r.json(); if (!r.ok) throw new Error(`Sheets ${r.status}: ${JSON.stringify(j).slice(0, 300)}`); return j;
}
export const q = t => `'${t.replace(/'/g, "''")}'`;
export const enc = encodeURIComponent;
export async function sheetsMeta() { return (await api('?fields=sheets.properties(sheetId,title,gridProperties)')).sheets.map(s => s.properties); }
export async function readRange(range) { return (await api(`/values/${enc(range)}`)).values || []; }
export async function writeRange(range, values) { return api(`/values/${enc(range)}?valueInputOption=RAW`, { method: 'PUT', body: JSON.stringify({ values }) }); }
export async function clearRange(range) { return api(`/values/${enc(range)}:clear`, { method: 'POST', body: '{}' }); }
export async function batchUpdate(requests) { return api(':batchUpdate', { method: 'POST', body: JSON.stringify({ requests }) }); }
// Fila clave-valor en la pestaña AVISOS
export async function setAvisosKey(key, value) {
  const rows = await readRange("'AVISOS'!A1:B600");
  const i = rows.findIndex(r => r[0] === key);
  if (i >= 0) await writeRange(`'AVISOS'!B${i + 1}`, [[value]]);
  else await api(`/values/${enc("'AVISOS'!A1:B1")}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, { method: 'POST', body: JSON.stringify({ values: [[key, value]] }) });
}
