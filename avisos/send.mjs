// Avisos de la app Apolo: se ejecuta cada 10 minutos en GitHub Actions.
// Lee el Excel (pestaña oculta AVISOS + hojas de jornada) y manda notificaciones push al móvil.
//  · Martes a la hora elegida: recordatorio para actualizar los horarios de la próxima jornada.
//  · Día de partido: X horas antes de la citación (hora del partido − 1 h 15).
import crypto from 'node:crypto';
import webpush from 'web-push';

import { configured, api, q } from './lib.mjs';
const TZ = 'Europe/Madrid';
const APP_URL = process.env.APP_URL || 'https://locust033.github.io/apolo_stats/';
const DRY = process.env.DRY === '1';

// Hora de Madrid
function madridParts(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: false }).formatToParts(d).map(x => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, mins: (+p.hour % 24) * 60 + +p.minute, wd: p.weekday };
}
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
function parseFecha(s) {
  s = String(s || '').toLowerCase().trim();
  let m = s.match(/(\d{1,2})\s+de\s+([a-záéíóú]+)\s+(?:de\s+)?(\d{4})/); if (m && MESES.indexOf(m[2]) >= 0) return `${m[3]}-${String(MESES.indexOf(m[2]) + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  m = s.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/); if (m) return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  m = s.match(/(\d{4})-(\d{2})-(\d{2})/); if (m) return m[0];
  return '';
}
const parseHora = s => { const m = String(s || '').match(/(\d{1,2}):(\d{2})/); return m ? +m[1] * 60 + +m[2] : null; };
const hhmm = t => `${String(Math.floor(((t % 1440) + 1440) % 1440 / 60)).padStart(2, '0')}:${String(((t % 60) + 60) % 60).padStart(2, '0')}`;
const titleCase = s => String(s).toLowerCase().replace(/(^|[\s.'-])(\p{L})/gu, (a, b, c) => b + c.toUpperCase()).replace(/(?<=\s)(De|Del|La|El|Los|Las|Y)(?=\s)/g, w => w.toLowerCase());

async function main() {
  if (!configured()) { console.log('Falta el secreto GOOGLE_SA: los avisos aún no están configurados.'); return; }
  const meta = await api('?fields=sheets.properties(sheetId,title)');
  const sheets = meta.sheets.map(s => s.properties);
  if (!sheets.some(s => s.title === 'AVISOS')) { console.log('Sin pestaña AVISOS: activa los avisos desde la app.'); return; }
  const av = (await api(`/values/${encodeURIComponent("'AVISOS'!A1:D500")}`)).values || [];
  const cfg = {}; const subs = []; const sent = new Set();
  av.forEach((r, i) => { if (r[0] === 'sub' && r[1]) subs.push({ row: i + 1, sub: JSON.parse(r[1]) }); else if (r[0] === 'sent') sent.add(r[1]); else if (r[0]) cfg[r[0]] = r[1] ?? ''; });
  if (!subs.length || !cfg.vapid_public || !cfg.vapid_private) { console.log('Sin móviles suscritos.'); return; }
  webpush.setVapidDetails('mailto:avisos@apolo.app', cfg.vapid_public, cfg.vapid_private);

  const jornadas = sheets.filter(s => /^\s*\d+\s*-/.test(s.title)).sort((a, b) => parseInt(a.title) - parseInt(b.title));
  const ranges = jornadas.flatMap(s => [`${q(s.title)}!D8:D10`, `${q(s.title)}!K11`]);
  const bg = await api(`/values:batchGet?${ranges.map(r => 'ranges=' + encodeURIComponent(r)).join('&')}`);
  const J = jornadas.map((s, i) => {
    const d = (bg.valueRanges[2 * i].values || []).map(r => r[0] || '');
    const fin = ((bg.valueRanges[2 * i + 1].values || [])[0] || [])[0] || '';
    return { id: s.sheetId, title: s.title, n: parseInt(s.title), rival: titleCase(s.title.replace(/^\s*\d+\s*-\s*/, '')), lugar: d[0] || '', fecha: parseFecha(d[1]), hora: parseHora(d[2]), fin };
  });
  const now = madridParts();
  const next = J.find(j => !j.fin);
  const out = [];

  // Recordatorio de los martes
  const tue = parseHora(cfg.martes);
  if (tue != null && now.wd === 'Tue' && now.mins >= tue && now.mins < tue + 180 && next) {
    const key = `tue:${now.date}`;
    if (!sent.has(key)) out.push({ key, title: 'Martes de horarios', body: `Actualiza fecha, hora y lugar de la jornada ${next.n} contra ${next.rival}${next.hora != null ? ` (ahora: ${next.fecha ? next.fecha.split('-').reverse().slice(0, 2).join('/') : '¿fecha?'} a las ${hhmm(next.hora)})` : ''}.`, url: `${APP_URL}?j=${next.id}` });
  }
  // Día de partido
  const antes = Math.round((parseFloat(String(cfg.antes || '2').replace(',', '.')) || 0) * 60);
  if (cfg.partido !== '0') for (const j of J) {
    if (j.fin || j.fecha !== now.date || j.hora == null) continue;
    const cit = j.hora - 75, at = cit - antes;
    const key = `match:${j.id}:${j.fecha}:${hhmm(j.hora)}`;
    if (now.mins >= at && now.mins < j.hora && !sent.has(key))
      out.push({ key, title: `Día de partido · ${j.rival}`, body: `Citación a las ${hhmm(cit)}, partido a las ${hhmm(j.hora)}${j.lugar ? ` · ${titleCase(j.lugar)}` : ''}.`, url: `${APP_URL}?j=${j.id}` });
  }
  // Primer aviso tras activar en un móvil
  for (const s of subs) { const key = `hello:${crypto.createHash('sha1').update(s.sub.endpoint).digest('hex').slice(0, 12)}`; if (!sent.has(key)) out.push({ key, only: s, title: 'Avisos activados', body: 'Te avisaré los martes para los horarios y el día de partido antes de la citación.', url: APP_URL }); }

  if (!out.length) { console.log(`Nada que avisar (${now.date} ${hhmm(now.mins)} ${now.wd}).`); return; }
  const dead = new Set(); const done = [];
  for (const n of out) {
    let ok = false;
    for (const s of (n.only ? [n.only] : subs)) {
      if (DRY) { console.log('DRY', n.title, '|', n.body); ok = true; continue; }
      try { await webpush.sendNotification(s.sub, JSON.stringify({ title: n.title, body: n.body, url: n.url, tag: n.key }), { TTL: 3 * 3600, urgency: 'high' }); ok = true; }
      catch (e) { console.log('push error', e.statusCode, e.body); if (e.statusCode === 404 || e.statusCode === 410) dead.add(s.row); }
    }
    if (ok) { done.push(['sent', n.key, new Date().toISOString()]); console.log('Enviado:', n.title, '·', n.body); }
  }
  if (done.length && !DRY) await api(`/values/${encodeURIComponent("'AVISOS'!A1:C1")}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, { method: 'POST', body: JSON.stringify({ values: done }) });
  for (const row of [...dead].sort((a, b) => b - a)) await api(`/values/${encodeURIComponent(`'AVISOS'!A${row}:D${row}`)}:clear`, { method: 'POST', body: '{}' });
}
main().catch(e => { console.error(e); process.exit(1); });
