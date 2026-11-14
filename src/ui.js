// ===== ESTADO =====
// Calendario FFCV del C.D. Apolo 'A' (Lliga Juvenil Caixa Popular Valenta, Grup 3, 26-27), en el orden de las hojas (sin jornadas de descanso)
// [jornada FFCV, fecha, hora, local, visitante, campo, codacta]
const FFCV = [[1, "17/10/2026", "19:30", "C.D. Apolo 'A'", "C.F. Aielo", "Campo de Fútbol Mpal. de Pinedo F-11", "26528241"], [2, "24/10/2026", "15:00", "U.D. Alzira 'A'", "C.D. Apolo 'A'", "Campo Mpal. Venecia F-11 Alzira ", "26528249"], [3, "31/10/2026", "12:30", "C.D. Apolo 'A'", "S.D. Sueca", "Campo de Fútbol Mpal. de Pinedo F-11", "26528256"], [4, "07/11/2026", "12:45", "Torrent C.F. 'A'", "C.D. Apolo 'A'", "Campo de Futbol Mpal. San Gregorio F-11 Campo B", "26528264"], [5, "14/11/2026", "17:15", "C.D. Apolo 'A'", "U.E. L'Alcúdia 'A'", "Campo de Fútbol Mpal. de Pinedo F-11", "26528271"], [6, "22/11/2026", "19:30", "U.D. Balompié Alfafar", "C.D. Apolo 'A'", "Campo Mpal. de Alfafar F-11", "26528279"], [8, "13/12/2026", "17:00", "C.F. Promeses Sueca", "C.D. Apolo 'A'", "Estadio Mpal. Antonio Puchades F-11", "26528294"], [9, "20/12/2026", "18:00", "C.D. Apolo 'A'", "P.D. Ayorense", "Campo de Fútbol Mpal. de Pinedo F-11", "26528301"], [10, "09/01/2027", "16:00", "Silla C.F. 'A'", "C.D. Apolo 'A'", "Polideportivo Mpal. Vicente Morera F-11 Silla", "26528309"], [11, "17/01/2027", "18:00", "C.D. Apolo 'A'", "U.D. Juventud - Bº Cristo 'A'", "Campo de Fútbol Mpal. de Pinedo F-11", "26528316"], [12, "23/01/2027", "12:00", "Ciutat de Xàtiva C.F.B. 'A'", "C.D. Apolo 'A'", "Campo Mpal. Paquito Coloma F-11 Xátiva ", "26528324"], [13, "31/01/2027", "18:00", "C.D. Apolo 'A'", "C.D. Malilla 'A'", "Campo de Fútbol Mpal. de Pinedo F-11", "26528331"], [14, "06/02/2027", "10:00", "C.F. Aielo", "C.D. Apolo 'A'", "Polideportivo Mpal. Juan Bataller Aielo F-11", "26528332"], [15, "14/02/2027", "18:00", "C.D. Apolo 'A'", "U.D. Alzira 'A'", "Campo de Fútbol Mpal. de Pinedo F-11", "26528340"], [16, "21/02/2027", "19:00", "S.D. Sueca", "C.D. Apolo 'A'", "Camp de L`Infantil Sueca F-11", "26528347"], [17, "28/02/2027", "18:00", "C.D. Apolo 'A'", "Torrent C.F. 'A'", "Campo de Fútbol Mpal. de Pinedo F-11", "26528355"], [18, "07/03/2027", "12:00", "U.E. L'Alcúdia 'A'", "C.D. Apolo 'A'", "Camp Els Arcs L`Alcudia F-11 Campo A", "26528362"], [19, "14/03/2027", "18:00", "C.D. Apolo 'A'", "U.D. Balompié Alfafar", "Campo de Fútbol Mpal. de Pinedo F-11", "26528370"], [21, "11/04/2027", "18:00", "C.D. Apolo 'A'", "C.F. Promeses Sueca", "Campo de Fútbol Mpal. de Pinedo F-11", "26528385"], [22, "17/04/2027", "17:30", "P.D. Ayorense", "C.D. Apolo 'A'", "Campo Mpal. San Anton F-11 Ayora ", "26528392"], [23, "25/04/2027", "18:00", "C.D. Apolo 'A'", "Silla C.F. 'A'", "Campo de Fútbol Mpal. de Pinedo F-11", "26528400"], [24, "09/05/2027", "11:30", "U.D. Juventud - Bº Cristo 'A'", "C.D. Apolo 'A'", "Campo Mpal. El Perdiguer F-11 Aldaia ", "26528407"], [25, "16/05/2027", "18:00", "C.D. Apolo 'A'", "Ciutat de Xàtiva C.F.B. 'A'", "Campo de Fútbol Mpal. de Pinedo F-11", "26528415"], [26, "23/05/2027", "12:00", "C.D. Malilla 'A'", "C.D. Apolo 'A'", "Campo de Futbol Mpal. Malilla F-11", "26528422"]];
const APOLO_COD = '905446426';
const FFCV_COMP = '905431657', FFCV_GRUPO = '905431660', FFCV_TEMP = '22';
const LS_KEY = 'apolo-partidos-v1';
const SEED_SHEETS = [[1598450505,'1 - AIELO'],[1512215096,'2 - ALZIRA'],[1760258037,'3 - S.D. SUECA'],[143274566,'4 - TORRENT'],[471312833,'5 - ALCÚDIA'],[1947815952,'6 - ALFAFAR'],[1860936496,'7 - PROMESES'],[1736839393,'8 - AYORENSE'],[1082152474,'9 - SILLA'],[1197693661,'10 - Bº CRISTO'],[1492774495,'11 - XÀTIVA'],[1680599170,'12 - MALILLA'],[1471336960,'13 - AIELO'],[1891846995,'14 - ALZIRA'],[1252392307,'15 - SUECA'],[1224766389,'16 - TORRENT'],[1522889650,'17 - ALCÚDIA'],[2097235616,'18 - ALFAFAR'],[1251927104,'19 - PROMESES'],[2114525778,'20 - AYORENSE'],[1393940978,'21 - SILLA'],[1305304429,'22 - Bº CRISTO'],[104445972,'23 - XÀTIVA'],[1901217019,'24 - MALILLA']].map(([id,title])=>({id,title}));

function defaultState() {
  return { settings: { sid: DEFAULT_SID, half: 45, clientId: '' }, sheets: SEED_SHEETS, current: null, matches: {}, extrasPool: [], stats: { v: 2, at: 0, sums: {} },
    ui: { tab: 'match', step: 'previa', stab: 'equipo', sort: 'min', dir: -1 } };
}
let S = defaultState();
const UI = { sheet: null, sync: null, syncMsg: '', loading: {}, statsProgress: null, err: {}, pickIn: null, toast: null };
let saveTimer = null;
function persist() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {} }, 250);
}
const H = () => +S.settings.half || 45;
const cur = () => (S.current != null ? S.matches[S.current] : null);
const sheetById = id => S.sheets.find(s => String(s.id) === String(id));
function touch(m, rerender = true) { if (m) m.dirty = true; persist(); if (rerender) render(); }
const uid = () => Math.random().toString(36).slice(2, 9);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = s => document.querySelector(s);
const rmap = m => Object.fromEntries(m.roster.map(p => [p.id, p]));
const short = n => { const p = String(n).split(/\s+/); return p.length > 1 ? p[0][0] + '. ' + p.slice(1).join(' ') : n; };
const title = s => { const t = String(s).toLowerCase(); return t.replace(/(^|[\s.'-])(\p{L})/gu, (a, b, c) => b + c.toUpperCase()); };

// ===== GOOGLE: inicio de sesión en el navegador + API de Google Sheets =====
const CLIENT_ID_DEFAULT = '634935377819-d73m1hp8oqbo1c6mc2mhr7qr17b7aptl.apps.googleusercontent.com';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const AUTH_KEY = 'apolo-auth', FFCV_KEY = 'apolo-ffcv', FFCV_IMPORT_KEY = 'apolo-ffcv-import';
const AUTH = { token: null, exp: 0 };
let FFCV_SNAP = null;
let mcpState = 'waiting';
let resumeAfterLogin = '';
const ready = () => !!AUTH.token && AUTH.exp > Date.now() + 20000;
const clientId = () => str(S.settings.clientId) || CLIENT_ID_DEFAULT;
const redirectUri = () => location.origin + location.pathname;
function loadAuth() { try { const a = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null'); if (a && a.exp > Date.now()) { AUTH.token = a.token; AUTH.exp = a.exp; } } catch (e) {} }
function saveAuth() { try { localStorage.setItem(AUTH_KEY, JSON.stringify(AUTH)); } catch (e) {} }
function captureRedirect() {
  const h = location.hash.slice(1); if (!h) return;
  if (h.startsWith('ffcv=')) { try { localStorage.setItem(FFCV_IMPORT_KEY, decodeURIComponent(h.slice(5))); } catch (e) {} }
  else {
    const p = new URLSearchParams(h);
    if (p.get('access_token')) { AUTH.token = p.get('access_token'); AUTH.exp = Date.now() + (+p.get('expires_in') || 3600) * 1000; saveAuth(); resumeAfterLogin = p.get('state') || ''; }
    else if (p.get('error')) UI.err.auth = 'Google no ha dado acceso (' + p.get('error') + ').';
  }
  history.replaceState(null, '', location.pathname + location.search);
}
function signIn(state = '') {
  if (!clientId()) { S.ui.tab = 'settings'; UI.err.auth = 'Falta el ID de cliente de Google: pégalo en Ajustes.'; render(); return; }
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
  const q = new URLSearchParams({ client_id: clientId(), redirect_uri: redirectUri(), response_type: 'token', scope: SCOPE, include_granted_scopes: 'true', state, prompt: 'select_account' });
  location.href = 'https://accounts.google.com/o/oauth2/v2/auth?' + q.toString();
}
function signOut() { AUTH.token = null; AUTH.exp = 0; saveAuth(); mcpState = 'none'; render(); }
function errText(e) {
  const c = e && e.code;
  if (c === 'needs_reauth') return 'Tu sesión de Google ha caducado. Vuelve a entrar con Google para guardar.';
  if (c === 'forbidden') return 'Tu cuenta de Google no tiene permiso para editar esta hoja.';
  if (c === 'not_found') return 'No encuentro la hoja de cálculo. Revisa el enlace en Ajustes.';
  if (c === 'offline') return 'No hay conexión a internet. Lo apuntado queda guardado en el móvil; guarda cuando vuelvas a tener cobertura.';
  if (c === 'tool_error') return 'Google Sheets respondió con un error: ' + String(e.message || '').slice(0, 160);
  if (c === 'server_unavailable') return 'Google Sheets no responde ahora mismo. Prueba otra vez en unos segundos.';
  return (e && e.message) ? String(e.message).slice(0, 180) : 'Error desconocido';
}
async function gfetch(path, opts = {}) {
  if (!ready()) { mcpState = 'none'; throw { code: 'needs_reauth' }; }
  let r;
  try { r = await fetch('https://sheets.googleapis.com/v4/spreadsheets/' + path, { ...opts, headers: { Authorization: 'Bearer ' + AUTH.token, 'Content-Type': 'application/json' } }); }
  catch (e) { throw { code: navigator.onLine === false ? 'offline' : 'server_unavailable', retryable: navigator.onLine !== false }; }
  if (r.status === 401) { AUTH.token = null; saveAuth(); mcpState = 'none'; throw { code: 'needs_reauth' }; }
  if (!r.ok) {
    let msg = ''; try { msg = (await r.json()).error.message; } catch (e) {}
    throw { code: r.status === 403 ? 'forbidden' : r.status === 404 ? 'not_found' : (r.status >= 500 || r.status === 429) ? 'server_unavailable' : 'tool_error', message: msg || ('HTTP ' + r.status), retryable: r.status >= 500 || r.status === 429 };
  }
  return r.json();
}
const enc = encodeURIComponent;
const TOOLS = {
  get_spreadsheet: () => gfetch(`${sid()}?fields=${enc('properties.title,sheets.properties(sheetId,title,hidden,gridProperties)')}`),
  get_values: i => gfetch(`${sid()}/values/${enc(i.range)}`),
  batch_get: i => gfetch(`${sid()}/values:batchGet?${i.ranges.map(r => 'ranges=' + enc(r)).join('&')}`),
  update_values: i => gfetch(`${sid()}/values/${enc(i.range)}?valueInputOption=RAW`, { method: 'PUT', body: JSON.stringify({ values: i.values }) }),
  update_formulas: i => gfetch(`${sid()}/values/${enc(i.range)}?valueInputOption=USER_ENTERED`, { method: 'PUT', body: JSON.stringify({ values: i.formulas }) }),
  clear_values: i => gfetch(`${sid()}/values/${enc(i.range)}:clear`, { method: 'POST', body: '{}' }),
  update_spreadsheet: i => gfetch(`${sid()}:batchUpdate`, { method: 'POST', body: JSON.stringify({ requests: i.requests }) }),
};
async function call(tool, input = {}, { read = false } = {}) {
  try { return await TOOLS[tool](input); }
  catch (e) {
    if (read && e && e.retryable) { await new Promise(r => setTimeout(r, 900 + Math.random() * 900)); return TOOLS[tool](input); }
    throw e;
  }
}
const sid = () => { const v = str(S.settings.sid); const m = v.match(/\/d\/([a-zA-Z0-9_-]+)/); return m ? m[1] : v; };
async function readRows(t) { const p = await call('get_values', { range: `${qs(t)}!A1:M140` }, { read: true }); return (p && p.values) || []; }
async function writeVals(range, values) { return call('update_values', { range, values }); }

// ---- Datos de la federación, guardados en la pestaña oculta "FFCV" del Excel ----
function parseFfcvRows(rows) {
  const s = { at: '', clas: [], matches: [], sanc: [], teams: [] };
  for (const r of rows || []) {
    const k = r[0], v = r.slice(1);
    if (k === 'at') s.at = v[0];
    else if (k === 'C') s.clas.push([+v[0], str(v[1]), str(v[2]), +v[3], +v[4], +v[5], +v[6], +v[7], +v[8], +v[9], str(v[10])]);
    else if (k === 'M') s.matches.push([+v[0], str(v[1]), str(v[2]), str(v[3]), str(v[4]), str(v[5]), str(v[6])]);
    else if (k === 'S') s.sanc.push([str(v[0]), str(v[1]), str(v[2]), str(v[3]), str(v[4]), str(v[5]), +v[6] || 0]);
    else if (k === 'T') s.teams.push({ cod: str(v[0]), name: str(v[1]), es: str(v[2]).split(',').filter(Boolean), pl: [] });
    else if (k === 'P') { const t = s.teams.find(x => x.cod === str(v[0])); if (t) t.pl.push([str(v[1]), str(v[2]), str(v[3]), ...v.slice(4, 12).map(x => +x || 0)]); }
  }
  return s.clas.length ? s : null;
}
function loadFfcvCache() { try { FFCV_SNAP = JSON.parse(localStorage.getItem(FFCV_KEY) || 'null'); } catch (e) {} }
async function loadFfcv() {
  try {
    const p = await call('get_values', { range: `'FFCV'!A1:M2000` }, { read: true });
    const snap = parseFfcvRows(p.values);
    if (snap) { FFCV_SNAP = snap; try { localStorage.setItem(FFCV_KEY, JSON.stringify(snap)); } catch (e) {} }
  } catch (e) { /* sin pestaña FFCV: la sección Rival lo indica */ }
}
async function importFfcvIfPending() {
  let raw = null; try { raw = localStorage.getItem(FFCV_IMPORT_KEY); } catch (e) {}
  if (!raw) return;
  try {
    const rows = JSON.parse(raw);
    const meta = await call('get_spreadsheet');
    let sh = (meta.sheets || []).find(s => s.properties.title === 'FFCV');
    if (!sh) { const r = await call('update_spreadsheet', { requests: [{ addSheet: { properties: { title: 'FFCV', hidden: true, gridProperties: { rowCount: rows.length + 100, columnCount: 14 } } } }] }); sh = { properties: r.replies[0].addSheet.properties }; }
    else if ((sh.properties.gridProperties || {}).rowCount < rows.length + 1) await call('update_spreadsheet', { requests: [{ updateSheetProperties: { properties: { sheetId: sh.properties.sheetId, gridProperties: { rowCount: rows.length + 100, columnCount: 14 } }, fields: 'gridProperties.rowCount,gridProperties.columnCount' } }] });
    await call('clear_values', { range: `'FFCV'!A1:N5000` });
    await writeVals(`'FFCV'!A1:M${rows.length}`, rows);
    localStorage.removeItem(FFCV_IMPORT_KEY);
    UI.toast = { text: 'Datos de la federación actualizados', t: Date.now() };
  } catch (e) { UI.err.ffcv = 'No se pudieron guardar los datos de la federación: ' + errText(e); }
  await loadFfcv();
}

async function initAuth() {
  captureRedirect(); loadAuth(); loadFfcvCache();
  mcpState = ready() ? 'ready' : 'none';
  render();
  if (!ready()) return;
  if (!sid()) { S.ui.tab = 'settings'; UI.err.auth = 'Pega el enlace de tu Google Sheet en Ajustes.'; render(); return; }
  await refreshSheets();
  await loadStats(true);
  await loadFfcv();
  await importFfcvIfPending();
  pickStartJornada();
  const m = cur();
  // sin cambios pendientes en el móvil, se vuelve a leer del Excel para tener lo último
  await openMatch(S.current ?? S.sheets[0].id, { reload: !(m && (m.dirty || ['h1', 'ht', 'h2'].includes(m.clock.phase))) });
  if (resumeAfterLogin === 'save' && cur()) saveToSheet(cur());
}
async function refreshSheets() {
  try {
    const p = await call('get_spreadsheet', {}, { read: true });
    const list = (p && p.sheets || []).map(s => ({ id: s.properties.sheetId, title: s.properties.title })).filter(s => /^\s*\d+\s*-/.test(s.title));
    if (list.length) { S.sheets = list; }
    if (p && p.properties) S.settings.sheetTitle = p.properties.title;
    persist();
    UI.err.sheets = null;
  } catch (e) { UI.err.sheets = errText(e); }
  render();
}

// Citación: siempre 1 h 15 min antes de la hora del partido
const citOf = hora => { const m = str(hora).match(/^(\d{1,2}):(\d{2})/); if (!m) return ''; let t = (+m[1]) * 60 + (+m[2]) - 75; if (t < 0) t += 1440; return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`; };
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
// El lugar se rellena siempre que esté vacío. Fecha y hora solo el mismo día del partido (o al pulsar el botón),
// porque los horarios suelen cambiar durante la semana.
function applyFfcv(m, force = false) {
  const f = ffcvFor(m); if (!f || (m.finalized && !force)) return false;
  const fecha = parseFecha(f.fecha);
  const sameDay = fecha === todayISO();
  const vals = { lugar: lugarFmt(f.campo) };
  if (force || sameDay) { vals.fecha = fecha; vals.hora = f.hora; }
  let ch = false;
  for (const k of Object.keys(vals)) if (vals[k] && (force || !str(m.info[k])) && m.info[k] !== vals[k]) { m.info[k] = vals[k]; ch = true; }
  if (ch) m.dirty = true;
  return ch;
}
// Copias guardadas en el móvil por versiones anteriores de la app
function migrateMatch(m) {
  if (m.finalized === undefined && m.imp && m.imp.score && m.imp.score.final && !m.events.length) m.finalized = true;
}
function seedMatch(sheet) {
  const L = { players: [], rivalPlayers: [], goals: { ours: [], theirs: [] }, rival: sheetShort(sheet.title).name, team: 'C.D. APOLO' };
  const m = matchFromLayout(sheet, L); m.seed = true; applyFfcv(m); m.dirty = false; return m;
}
async function openMatch(id, { reload = false } = {}) {
  S.current = id; persist();
  const sh = sheetById(id); if (!sh) return render();
  const ex = S.matches[id];
  if (ex) migrateMatch(ex);
  // Sin cambios pendientes en el móvil, se lee siempre del Excel: así una jornada ya jugada aparece como finalizada
  if (ex && !reload && ready() && !(ex.dirty || ['h1', 'ht', 'h2'].includes(ex.clock.phase))) reload = true;
  if (S.matches[id] && !reload) applyFfcv(S.matches[id]);
  if (!S.matches[id] || reload) {
    if (!S.matches[id]) S.matches[id] = seedMatch(sh);
    if (ready()) {
      UI.loading[id] = true; render();
      try {
        const rows = await readRows(sh.title); const L = parseLayout(rows);
        const prev = S.matches[id];
        const m = matchFromLayout(sh, L);
        // conserva extras añadidos en la app que aún no están en el Excel
        if (prev && !reload) for (const p of prev.roster) if (p.extra && !m.roster.some(q => q.id === p.id)) m.roster.push(p);
        applyFfcv(m);
        S.matches[id] = m; S.stats.sums[id] = summarize(sh, L, awayOf(sh.title)); UI.err.match = null;
      } catch (e) { UI.err.match = errText(e); }
      UI.loading[id] = false; persist();
    }
  }
  render();
}

// ===== GUARDAR EN EL EXCEL =====
async function saveToSheet(m) {
  if (UI.sync === 'saving') return;
  if (!ready()) { signIn('save'); return; }
  UI.sync = 'saving'; UI.syncMsg = 'Leyendo la hoja…'; render();
  const step = t => { UI.syncMsg = t; render(); };
  try {
    const t = m.title, shId = m.sheetId, Hh = H();
    let rows = await readRows(t); let L = parseLayout(rows);
    const rowKey = p => pkey(p.name, p.dorsal);
    const findRow = (L, p) => L.players.find(r => !r.blank && rowKey(r) === p.id) || L.players.find(r => !r.blank && up(r.name) === up(p.name));
    const extrasNeeded = m.roster.filter(p => m.called[p.id] && !findRow(L, p));
    const blanks = L.players.filter(r => r.blank);
    const need = extrasNeeded.length - blanks.length;
    if (need > 0) {
      step(`Creando ${need} fila${need > 1 ? 's' : ''} nueva${need > 1 ? 's' : ''}…`);
      const at = L.total; // índice 0 de la fila de totales: las nuevas quedan justo debajo de la última jugadora
      await call('update_spreadsheet', { spreadsheetId: sid(), requests: [
        { insertDimension: { range: { sheetId: shId, dimension: 'ROWS', startIndex: at, endIndex: at + need }, inheritFromBefore: true } },
        { copyPaste: { source: { sheetId: shId, startRowIndex: at - 1, endRowIndex: at, startColumnIndex: 0, endColumnIndex: 13 },
          destination: { sheetId: shId, startRowIndex: at, endRowIndex: at + need, startColumnIndex: 0, endColumnIndex: 13 }, pasteType: 'PASTE_FORMAT' } },
      ] });
      const fill = extrasNeeded.slice(blanks.length);
      await writeVals(`${qs(t)}!A${at + 1}:B${at + need}`, fill.map(p => [p.name, toCell(p.dorsal)]));
      rows = await readRows(t); L = parseLayout(rows);
    }
    // casillas para jugadoras extra en filas vacías existentes
    const freeRows = L.players.filter(r => r.blank);
    const assign = {};
    for (const p of m.roster.filter(p => m.called[p.id] && !findRow(L, p))) { const r = freeRows.shift(); if (r) assign[r.idx] = p; }
    step('Preparando columnas…');
    const fmtReq = [];
    if (!L.hasCap) {
      fmtReq.push({ copyPaste: { source: { sheetId: shId, startRowIndex: L.hdr, endRowIndex: L.total + 1, startColumnIndex: 8, endColumnIndex: 9 },
        destination: { sheetId: shId, startRowIndex: L.hdr, endRowIndex: L.total + 1, startColumnIndex: 12, endColumnIndex: 13 }, pasteType: 'PASTE_FORMAT' } });
      fmtReq.push({ updateDimensionProperties: { range: { sheetId: shId, dimension: 'COLUMNS', startIndex: 12, endIndex: 13 }, properties: { pixelSize: 50 }, fields: 'pixelSize' } });
    }
    // CAP con casilla de verificación, igual que MVP
    fmtReq.push({ setDataValidation: { range: { sheetId: shId, startRowIndex: L.hdr + 1, endRowIndex: L.total, startColumnIndex: 12, endColumnIndex: 13 }, rule: { condition: { type: 'BOOLEAN' }, showCustomUi: true } } });
    if (fmtReq.length) await call('update_spreadsheet', { spreadsheetId: sid(), requests: fmtReq });
    await call('update_formulas', { spreadsheetId: sid(), range: `${qs(t)}!E${L.total + 1}`, formulas: [[`=SUM(E${L.hdr + 2}:E${L.total})`]] });

    step('Escribiendo jugadoras…');
    const comp = compute(m, Hh);
    const block = [[null, null, null, null, null, null, null, null, null, null, null, null, 'CAP']];
    for (const r of L.players) {
      const p = r.blank ? assign[r.idx] : (m.roster.find(q => q.id === rowKey(r)) || m.roster.find(q => up(q.name) === up(r.name)));
      if (!p) { block.push(Array(13).fill(null)); continue; } // fila que la app no conoce: no se toca
      const st = finalStats(m, comp, p.id);
      const v = playerRowValues(p, st);
      if (!r.blank) { v[0] = null; v[1] = null; } // no tocamos nombre ni dorsal de la plantilla
      block.push(v);
    }
    const sc = scoreStrings(m, comp, awayOf(m.title));
    const gr = goalRows(m, Hh);
    const pad = (arr, n, w) => { const o = arr.slice(0, n).map(r => r.slice()); while (o.length < n) o.push(Array(w).fill('')); return o; };
    const writes = [
      [`${qs(t)}!A${L.hdr + 1}:M${L.total}`, block],
      [`${qs(t)}!D8:D11`, [[m.info.lugar || ''], [fmtFecha(m.info.fecha)], [addH(m.info.hora)], [addH(citOf(m.info.hora) || m.info.cit)]]],
      [`${qs(t)}!K8:K11`, [[sc.h1], [sc.h2], [null], [sc.final]]],
    ];
    if (L.rh >= 0) {
      const rp = pad(m.rival.players.map(p => [p.name || '', toCell(p.dorsal), p.pos || '', p.goals ? p.goals : '', fmtCards(p.y, p.r), p.note || '']), 11, 6);
      writes.push([`${qs(t)}!A${L.rh + 2}:F${L.rh + 12}`, rp]);
      writes.push([`${qs(t)}!H${L.rh + 13}:H${L.rh + 14}`, [[m.rival.name || m.info.rival || ''], [m.rival.formation || '']]]);
    }
    if (L.sist >= 0) writes.push([`${qs(t)}!H${L.sist + 3}`, [[m.formationText || m.formation]]]);
    if (L.plan >= 0) writes.push([`${qs(t)}!A${L.plan + 2}`, [[m.texts.plan || '']]]);
    if (L.cron >= 0) writes.push([`${qs(t)}!A${L.cron + 2}:E${L.cron + 2}`, [[m.texts.cron1 || '', null, null, null, m.texts.cron2 || '']]]);
    if (L.obs >= 0) writes.push([`${qs(t)}!A${L.obs + 2}`, [[m.texts.obs || '']]]);
    if (L.gh >= 0) {
      writes.push([`${qs(t)}!A${L.gh + 2}:C${L.gh + 12}`, pad(gr.ours.map(r => [toCell(r[0]), toCell(r[1]), r[2]]), 11, 3)]);
      writes.push([`${qs(t)}!E${L.gh + 2}:H${L.gh + 12}`, pad(gr.theirs.map(r => [toCell(r[0]), null, toCell(r[1]), r[2]]), 11, 4).map(r => [r[0], null, r[2], r[3]])]);
    }
    let done = 0;
    step(`Guardando (0/${writes.length})…`);
    for (let i = 0; i < writes.length; i += 4) {
      await Promise.all(writes.slice(i, i + 4).map(([r, v]) => writeVals(r, v).then(() => { done++; step(`Guardando (${done}/${writes.length})…`); })));
    }
    // refrescar resumen de estadísticas de esta hoja
    try { const rows2 = await readRows(t); S.stats.sums[m.sheetId] = summarize(sheetById(m.sheetId) || { id: m.sheetId, title: t }, parseLayout(rows2), awayOf(t)); } catch (e) {}
    for (const p of m.roster) if (p.extra && !S.extrasPool.some(x => up(x.name) === up(p.name))) S.extrasPool.push({ name: p.name, dorsal: p.dorsal });
    m.dirty = false; m.savedAt = Date.now(); m.seed = false;
    UI.sync = 'ok'; UI.syncMsg = 'Guardado en el Excel';
    persist();
  } catch (e) {
    UI.sync = 'error';
    UI.syncMsg = (e && (e.code === 'server_unavailable' || e.code === 'upstream_error'))
      ? 'No sé si se llegó a guardar (Google no contestó). Vuelve a pulsar Guardar: la app relee el Excel antes de escribir.'
      : errText(e);
  }
  render();
}

// ===== BORRAR UNA JORNADA DEL EXCEL =====
// Deja la hoja como la plantilla: conserva textos fijos, nombres, dorsales y formato; vacía todo lo apuntado.
async function wipeJornada(m) {
  if (!ready()) { UI.sync = 'error'; UI.syncMsg = 'Entra con Google para poder borrar la jornada del Excel.'; return render(); }
  UI.sync = 'saving'; UI.syncMsg = 'Borrando la jornada…'; render();
  try {
    const t = m.title; const L = parseLayout(await readRows(t));
    const blank = (n, w) => Array.from({ length: n }, () => Array(w).fill(''));
    const writes = [
      [`${qs(t)}!D8:D11`, blank(4, 1)],
      [`${qs(t)}!K8:K11`, [[''], [''], [null], ['']]],
      [`${qs(t)}!A${L.hdr + 2}:M${L.total}`, L.players.map(r => r.blank ? Array(13).fill(null) : [null, null, false, false, '', '', '', '', false, '', '', '', L.hasCap ? false : null])],
    ];
    if (L.rh >= 0) { writes.push([`${qs(t)}!A${L.rh + 2}:F${L.rh + 12}`, blank(11, 6)]); writes.push([`${qs(t)}!H${L.rh + 14}`, [['']]]); }
    if (L.sist >= 0) writes.push([`${qs(t)}!H${L.sist + 3}`, [['']]]);
    if (L.plan >= 0) writes.push([`${qs(t)}!A${L.plan + 2}`, [['']]]);
    if (L.cron >= 0) writes.push([`${qs(t)}!A${L.cron + 2}:E${L.cron + 2}`, [['', null, null, null, '']]]);
    if (L.obs >= 0) writes.push([`${qs(t)}!A${L.obs + 2}`, [['']]]);
    if (L.gh >= 0) { writes.push([`${qs(t)}!A${L.gh + 2}:C${L.gh + 12}`, blank(11, 3)]); writes.push([`${qs(t)}!E${L.gh + 2}:H${L.gh + 12}`, blank(11, 4).map(r => [r[0], null, r[2], r[3]])]); }
    await Promise.all(writes.map(([r, v]) => writeVals(r, v)));
    delete S.stats.sums[m.sheetId]; delete S.matches[m.sheetId];
    if (UI.editStats) delete UI.editStats[m.sheetId];
    UI.sync = 'ok'; UI.syncMsg = 'Jornada borrada';
    S.ui.step = 'previa'; persist();
    await openMatch(m.sheetId, { reload: true });
    showToast(`Jornada ${sheetShort(t).n} borrada del Excel`);
  } catch (e) { UI.sync = 'error'; UI.syncMsg = 'No se pudo borrar del todo: ' + errText(e) + ' Vuelve a intentarlo.'; render(); }
}

// ===== ESTADÍSTICAS =====
async function loadStats(force = false) {
  if (!ready() || UI.statsProgress) return;
  const list = S.sheets.filter(s => force || !S.stats.sums[s.id]);
  if (!list.length) return;
  UI.statsProgress = { done: 0, total: list.length }; UI.err.stats = null; render();
  let fails = 0;
  try {
    const p = await call('batch_get', { ranges: list.map(s => `${qs(s.title)}!A1:M140`) }, { read: true });
    (p.valueRanges || []).forEach((vr, i) => {
      const sh = list[i];
      try { S.stats.sums[sh.id] = summarize(sh, parseLayout(vr.values || []), awayOf(sh.title)); } catch (e) { fails++; }
    });
  } catch (e) { UI.err.stats = errText(e); }
  if (FFCV_SNAP == null) await loadFfcv();
  S.stats.at = Date.now(); UI.statsProgress = null;
  if (fails) UI.err.stats = `${fails} hoja${fails > 1 ? 's' : ''} con un formato que no reconozco.`;
  persist(); render();
}

// ===== EVENTOS DEL PARTIDO =====
function rivalPlayer(m, dorsal, create = true) {
  let p = m.rival.players.find(x => str(x.dorsal) === str(dorsal) && str(dorsal) !== '');
  if (!p && create && str(dorsal) && m.rival.players.length < 11) { p = { name: '', dorsal: str(dorsal), pos: '', goals: 0, y: 0, r: 0, note: '' }; m.rival.players.push(p); }
  return p;
}
function addEvent(m, e) {
  if (e.t === 'move') { const other = compute(m, H()).field[e.slot]; if (other) delete m.ov[other]; }
  e.id = uid(); e.seq = m.seq = (m.seq || 1) + 1;
  m.events.push(e);
  for (const k of ['scorer', 'assist', 'og', 'pid', 'out', 'in']) if (e[k]) delete m.ov[e[k]];
  if (e.t === 'rgoal' && !e.og && e.dorsal) { const p = rivalPlayer(m, e.dorsal); if (p) p.goals = (+p.goals || 0) + 1; }
  if (e.t === 'rcard') { const p = rivalPlayer(m, e.dorsal); if (p) { if (e.color === 'Y') p.y = (+p.y || 0) + 1; else p.r = (+p.r || 0) + 1; } }
  touch(m);
}
function removeEvent(m, id) {
  const e = m.events.find(x => x.id === id); if (!e) return;
  if (e.t === 'rgoal' && !e.og && e.dorsal) { const p = rivalPlayer(m, e.dorsal, false); if (p) p.goals = Math.max(0, (+p.goals || 0) - 1); }
  if (e.t === 'rcard') { const p = rivalPlayer(m, e.dorsal, false); if (p) { if (e.color === 'Y') p.y = Math.max(0, (+p.y || 0) - 1); else p.r = Math.max(0, (+p.r || 0) - 1); } }
  m.events = m.events.filter(x => x.id !== id);
  touch(m);
}
const nowMinute = m => ({ min: Math.max(1, clockMinute(m.clock, H())), half: clockHalf(m.clock) });

// ===== AVISOS Y PANTALLA ENCENDIDA =====
let toastTimer = null;
function showToast(text, undo = null) { UI.toast = { text, undo, t: Date.now() }; clearTimeout(toastTimer); toastTimer = setTimeout(() => { UI.toast = null; renderToast(); }, 6000); render(); }
function renderToast() {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); }
  const t = UI.toast;
  el.className = t ? 'show' : '';
  el.innerHTML = t ? `<span>${esc(t.text)}</span>${t.undo ? '<button data-act="undoToast">Deshacer</button>' : ''}` : '';
}
let wakeLock = null;
async function keepAwake(on) {
  try {
    if (on && 'wakeLock' in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); }
    if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; }
  } catch (e) {}
}
document.addEventListener('visibilitychange', () => { const m = cur(); if (document.visibilityState === 'visible' && m && (m.clock.phase === 'h1' || m.clock.phase === 'h2')) { keepAwake(true); render(); } });

// ===== ICONOS =====
const IC = {
  ball: '<svg viewBox="0 0 24 24" class="ic"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.2l4 2.9-1.5 4.7h-5L8 10.1z" fill="currentColor"/><path d="M12 7.2V2.8M16 10.1l4.2-1.4M14.5 14.8l2.6 3.6M9.5 14.8l-2.6 3.6M8 10.1L3.8 8.7" stroke="currentColor" stroke-width="1.5"/></svg>',
  sub: '<svg viewBox="0 0 24 24" class="ic"><path d="M7 4v13M7 17l-3-3M7 17l3-3" stroke="var(--good)" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M17 20V7M17 7l-3 3M17 7l3 3" stroke="var(--red)" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>',
  move: '<svg viewBox="0 0 24 24" class="ic"><path d="M4 12h16M16 8l4 4-4 4M8 8l-4 4 4 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  card: c => `<span class="cardic ${c === 'Y' ? 'y' : 'r'}"></span>`,
  match: '<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 4v16M3 9h3v6H3M21 9h-3v6h3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  stats: '<svg viewBox="0 0 24 24" class="ic"><path d="M5 20V11M12 20V5M19 20v-7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  gear: '<svg viewBox="0 0 24 24" class="ic"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  star: '<svg viewBox="0 0 24 24" class="ic"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/></svg>',
};

// ===== VISTAS =====
const STEPS = [['previa', 'Previa'], ['convocatoria', 'Convocatoria'], ['once', 'Once'], ['rival', 'Rival'], ['directo', 'Directo'], ['cierre', 'Cierre']];

function render() {
  const app = $('#app'); if (!app) return;
  const y = window.scrollY;
  const m = cur();
  app.innerHTML = topbar(m) + `<main id="main">${S.ui.tab === 'match' ? matchView(m) : S.ui.tab === 'stats' ? statsView() : settingsView()}</main>` + navbar();
  window.scrollTo(0, y);
  renderSheet(); renderToast();
}
function topbar(m) {
  const opp = m ? title(sheetShort(m.title).name) : '—';
  let chip;
  if (mcpState === 'none') chip = `<button class="sync dirty" data-act="signin">Entrar con Google</button>`;
  else if (UI.sync === 'saving') chip = `<span class="sync busy"><i class="spin"></i>${esc(UI.syncMsg)}</span>`;
  else if (m && m.dirty) chip = `<button class="sync dirty" data-act="save">Guardar en Excel</button>`;
  else if (m && m.savedAt) chip = `<span class="sync ok">Guardado ${timeAgo(m.savedAt)}</span>`;
  else chip = `<span class="sync ok">Al día con el Excel</span>`;
  return `<header class="top"><div class="matchup"><span class="us">${esc(title(m ? m.team : 'C.D. Apolo').replace(/^[A-Z]\.[A-Z]\.\s*/i, ''))}</span><span class="vs">vs</span><span class="them">${esc(opp)}</span></div>${chip}</header>`
    + (UI.sync === 'error' ? `<div class="banner err" role="alert">${esc(UI.syncMsg)} <button class="link" data-act="save">Reintentar</button></div>` : '')
    + (UI.err.auth ? `<div class="banner err">${esc(UI.err.auth)}</div>` : '')
    + (UI.err.ffcv ? `<div class="banner err">${esc(UI.err.ffcv)}</div>` : '')
    + (mcpState === 'none' && !(m && m.roster.length) ? `<div class="banner">Entra con tu cuenta de Google para cargar las jornadas de tu Excel. Durante el partido no hace falta conexión: lo apuntado se queda en el móvil hasta que guardes.</div>` : '');
}
function timeAgo(t) { const s = Math.round((Date.now() - t) / 1000); if (s < 60) return 'ahora'; if (s < 3600) return `hace ${Math.round(s / 60)} min`; const d = new Date(t); return `el ${d.getDate()}/${d.getMonth() + 1} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; }
function navbar() {
  const b = (t, ic, l) => `<button class="${S.ui.tab === t ? 'on' : ''}" data-act="tab" data-v="${t}" aria-label="${l}">${ic}<span>${l}</span></button>`;
  return `<nav class="bottom">${b('match', IC.match, 'Partido')}${b('stats', IC.stats, 'Estadísticas')}${b('settings', IC.gear, 'Ajustes')}</nav>`;
}

const resClass = sum => { if (!sum || !sum.final) return 'pending'; const [a, b] = sum.final; return a > b ? 'w' : a === b ? 'd' : 'l'; };
function jornadaRail() {
  const curSh = sheetById(S.current); const cs = curSh ? sheetShort(curSh.title) : { n: '', name: '' };
  const cSum = curSh && S.stats.sums[curSh.id];
  const open = !!S.ui.railOpen;
  const chev = `<svg viewBox="0 0 24 24" class="ic chev ${open ? 'up' : ''}"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const head = `<button class="railhead ${resClass(cSum)}" data-act="railToggle" aria-expanded="${open}"><b>J${cs.n}</b><span class="rn">${esc(title(cs.name))}</span>${cSum && cSum.final ? `<em>${cSum.final.join('-')}</em>` : ''}<span class="sp"></span><span class="rl">${open ? 'Ocultar' : 'Jornadas'}</span>${chev}</button>`;
  if (!open) return `<div class="railwrap">${head}</div>`;
  return `<div class="railwrap">${head}<div class="rail" id="rail">${S.sheets.map(s => {
    const sh = sheetShort(s.title), sum = S.stats.sums[s.id], lm = S.matches[s.id];
    const res = sum && sum.final ? `${sum.final[0]}-${sum.final[1]}` : '';
    return `<button class="jchip ${resClass(sum)} ${String(S.current) === String(s.id) ? 'on' : ''} ${lm && lm.dirty ? 'dirty' : ''}" data-act="openJ" data-id="${s.id}" id="j${s.id}"><b>J${sh.n}</b><span>${esc(title(sh.name))}</span>${res ? `<em>${res}</em>` : ''}</button>`;
  }).join('')}</div></div>`;
}
// Al abrir la app: primera jornada sin resultado, salvo que haya un partido a medias en el móvil
function pickStartJornada() {
  const m = cur();
  if (m && (m.dirty || ['h1', 'ht', 'h2'].includes(m.clock.phase))) return false;
  const f = S.sheets.find(s => { const x = S.stats.sums[s.id]; return !x || !x.final; });
  if (f && String(f.id) !== String(S.current)) { S.current = f.id; return true; }
  return false;
}
function matchView(m) {
  if (!m) return jornadaRail() + `<section class="pad"><p class="muted">Elige una jornada.</p></section>`;
  if (m.finalized) {
    const loading0 = UI.loading[m.sheetId] ? `<div class="banner">Leyendo ${esc(m.title)} del Excel…</div>` : '';
    return jornadaRail() + loading0 + `<section class="pad">${summaryView(m)}</section>`;
  }
  const step = S.ui.step;
  const tabs = `<div class="steps">${STEPS.map(([k, l], i) => `<button class="${step === k ? 'on' : ''}" data-act="step" data-v="${k}"><i>${i + 1}</i>${l}</button>`).join('')}</div>`;
  const loading = UI.loading[m.sheetId] ? `<div class="banner">Leyendo ${esc(m.title)} del Excel…</div>` : '';
  const err = UI.err.match ? `<div class="banner err">${esc(UI.err.match)} <button class="link" data-act="reloadJ">Reintentar</button></div>` : '';
  const views = { previa: previaView, convocatoria: convView, once: onceView, rival: rivalView, directo: liveView, cierre: cierreView };
  return (step === 'directo' ? '' : jornadaRail()) + tabs + loading + err + `<section class="pad">${views[step](m)}</section>`;
}
const field = (label, inner, cls = '') => `<label class="fld ${cls}"><span>${label}</span>${inner}</label>`;
const inp = (path, v, attrs = '') => `<input data-bind="${path}" value="${esc(v)}" ${attrs}>`;
const nextBtn = (to, label) => `<button class="btn primary wide" data-act="step" data-v="${to}">${label}</button>`;

const ffcvFor = m => { const f = FFCV[sheetShort(m.title).n - 1]; return f ? { j: f[0], fecha: f[1], hora: f[2], local: f[3], visit: f[4], campo: f[5], acta: f[6] } : null; };
const awayOf = t => { const f = FFCV[sheetShort(t).n - 1]; return !!f && !/apolo/i.test(f[3]); };
// convierte un marcador del Excel (local - visitante) a "nosotras - rival"
const ourView = (s, away) => { const m = str(s).match(/(\d+)\s*-\s*(\d+)/); if (!m) return str(s); return away ? `${m[2]} - ${m[1]}` : `${m[1]} - ${m[2]}`; };
const ffcvAppUrl = f => `https://resultadosffcv.isquad.es/partido.php?id_competition=${FFCV_COMP}&id_partido=${f.acta}&id_torneo=${FFCV_GRUPO}`;
const ffcvWebUrl = f => `https://ffcv.es/competiciones/?view=partidos&cod_temporada=${FFCV_TEMP}&cod_competicion=${FFCV_COMP}&cod_grupo=${FFCV_GRUPO}&cod_jornada=${f.j}#partidos`;
const lugarFmt = s => up(str(s).replace(/Mpal\./gi, 'Municipal').replace(/\s*F-11\b/gi, '').replace(/`/g, "'").replace(/\s+/g, ' '));
function ffcvBlock(m) {
  const f = ffcvFor(m); if (!f) return '';
  const snapAt = FFCV_SNAP && FFCV_SNAP.at ? new Date(FFCV_SNAP.at).toLocaleDateString('es-ES') : 'del calendario';
  const home = /apolo/i.test(f.local);
  return `<div class="ffcv"><div class="ffcvinfo"><span class="eyebrow">Federación · jornada ${f.j}</span>
      <span>${home ? 'En casa' : 'Fuera'} · ${esc(title(home ? f.visit : f.local))} · ${esc(f.fecha)} ${esc(f.hora)}</span>
      <small class="muted">Horario según la federación (${esc(snapAt)}): puede haber cambiado. La fecha y la hora se rellenan solas el día del partido.</small></div>
    <div class="acts"><a class="btn" href="${ffcvWebUrl(f)}" target="_blank" rel="noopener">Ver el partido en la FFCV</a><a class="btn ghost" href="https://maps.apple.com/?q=${enc(f.campo.trim())}" target="_blank" rel="noopener">Cómo llegar</a></div>
    <small class="muted">Se abre la jornada ${f.j} en ffcv.es: toca «Ver detalles» en vuestro partido. La federación no permite enlazar directamente a la ficha del partido ni a su app.</small>
    <button class="link small" data-act="ffcvFill">Poner fecha, hora y campo de la federación</button></div>`;
}
function previaView(m) {
  const scout = scoutCard(m);
  return `<div class="card">
    <h2 class="h">${esc(m.title.replace(/^(\d+)\s*-\s*/, 'Jornada $1 · '))}</h2>
    ${field('Rival', inp('info.rival', m.info.rival))}
    ${field('Lugar', inp('info.lugar', m.info.lugar, 'placeholder="Campo"'))}
    ${field('Fecha', inp('info.fecha', m.info.fecha, 'type="date"'))}
    <div class="row2">
      ${field('Hora partido', inp('info.hora', m.info.hora, 'type="time"'))}
      ${field('Citación (1 h 15 antes)', `<output id="citOut" class="ro">${esc(citOf(m.info.hora) || m.info.cit || '—')}</output>`)}
    </div>
    ${ffcvBlock(m)}
  </div>
  <div class="card">${field('Planteamiento del partido', `<textarea data-bind="texts.plan" rows="5" placeholder="Idea defensiva, ofensiva, ABP…">${esc(m.texts.plan)}</textarea>`)}</div>
  ${scout}
  ${nextBtn('convocatoria', 'Hacer la convocatoria')}`;
}
function scoutCard(m) {
  const key = rivalKey(sheetShort(m.title).name);
  const other = Object.values(S.stats.sums).filter(s => s && s.rkey === key && String(s.id) !== String(m.sheetId) && s.played);
  if (!other.length) return '';
  return other.map(s => `<div class="card scout"><div class="eyebrow">Ya jugamos contra ellas · J${s.n}</div>
    <div class="scoutres"><b>${s.final ? s.final.join(' – ') : '—'}</b><span>${esc(s.rivalForm || 'Sistema sin apuntar')}</span></div>
    ${s.rivalPlayers.length ? `<ul class="scoutlist">${s.rivalPlayers.map(p => `<li><span class="disc sm">${esc(p.dorsal)}</span><b>${esc(title(p.name))}</b> <small>${esc(p.pos)}</small> <em>${esc(p.note)}</em></li>`).join('')}</ul>` : ''}
    ${s.obs ? `<p class="muted small">${esc(s.obs.slice(0, 220))}${s.obs.length > 220 ? '…' : ''}</p>` : ''}</div>`).join('');
}

// ---- Protección de partidos terminados ----
const isFinished = m => !!m && m.clock.phase === 'end';
const isLocked = m => false; // sustituido por la vista de jornada finalizada
function lockBar(m) {
  return '';
  if (!isFinished(m)) return '';
  return isLocked(m)
    ? `<div class="lockbar"><svg viewBox="0 0 24 24" class="ic"><rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg><span>Partido terminado: estadísticas protegidas. Los textos se pueden editar.</span><button class="link" data-act="unlock">Desbloquear</button></div>`
    : `<div class="lockbar open"><span>Edición desbloqueada: los cambios afectan a las estadísticas.</span><button class="link" data-act="relock">Bloquear</button></div>`;
}
function convView(m) {
  const n = Object.keys(m.called).filter(k => m.called[k] && m.roster.some(p => p.id === k)).length;
  const pool = S.extrasPool.filter(x => !m.roster.some(p => up(p.name) === up(x.name)));
  return `${lockBar(m)}<div class="sumline"><b class="big">${n}</b> convocadas <span class="muted">de ${m.roster.length}</span>
      <span class="sp"></span><button class="btn ghost sm" data-act="callAll">Todas</button><button class="btn ghost sm" data-act="callNone">Ninguna</button></div>
    <div class="list">${m.roster.map(p => `<button class="prow ${m.called[p.id] ? 'on' : ''}" data-act="toggleCall" data-id="${esc(p.id)}">
        <span class="disc">${esc(p.dorsal)}</span><span class="pn">${esc(title(p.name))}${p.extra ? '<i class="tag">Extra</i>' : ''}</span>
        ${p.extra ? `<span class="x" data-act="rmExtra" data-id="${esc(p.id)}" aria-label="Quitar">×</span>` : ''}<span class="chk"></span></button>`).join('')}</div>
    <div class="card">
      <h3 class="h3">Jugadora de otro equipo</h3>
      <p class="muted small">Si sube alguna de un equipo inferior. Al guardar se crea su fila debajo de la última jugadora, con el mismo formato.</p>
      <div class="row2b">${field('Nombre', '<input id="xName" placeholder="Nombre" autocapitalize="characters">')}${field('Dorsal', '<input id="xDorsal" inputmode="numeric" placeholder="Nº">', 'narrow')}</div>
      <button class="btn wide" data-act="addExtra">Añadir a la convocatoria</button>
      ${pool.length ? `<div class="chips">${pool.map((x, i) => `<button class="chip" data-act="addPool" data-i="${S.extrasPool.indexOf(x)}">+ ${esc(title(x.name))} · ${esc(x.dorsal)}</button>`).join('')}</div>` : ''}
    </div>
    ${nextBtn('once', 'Elegir el once')}`;
}

function pitchSVG() {
  return `<svg class="lines" viewBox="0 0 68 90" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="var(--chalk)" stroke-width=".45">
    <rect x="1.5" y="1.5" width="65" height="87"/><line x1="1.5" y1="45" x2="66.5" y2="45"/><circle cx="34" cy="45" r="8.2"/><circle cx="34" cy="45" r=".6" fill="var(--chalk)"/>
    <rect x="14" y="1.5" width="40" height="14.5"/><rect x="24.8" y="1.5" width="18.4" height="5"/><path d="M27 16a8 8 0 0 0 14 0"/>
    <rect x="14" y="74" width="40" height="14.5"/><rect x="24.8" y="83.5" width="18.4" height="5"/><path d="M27 74a8 8 0 0 1 14 0"/></g></svg>`;
}
function pitch(m, mode, comp) {
  const F = FORMATIONS[m.formation] || FORMATIONS[DEFAULT_FORMATION];
  const byId = rmap(m);
  const fieldMap = mode === 'live' ? comp.field : m.lineup;
  let html = '';
  for (const [slot, [x, y]] of Object.entries(F)) {
    const id = fieldMap[slot]; const p = id && byId[id] && m.called[id] ? byId[id] : null;
    const pos = `style="left:${x}%;top:${100 - y}%"`;
    if (!p) { html += `<button class="tok empty" ${pos} data-act="${mode === 'live' ? 'liveSlot' : 'slot'}" data-slot="${slot}"><span class="disc">${slot}</span><span class="nm">${mode === 'live' ? 'Libre' : 'Elegir'}</span></button>`; continue; }
    const c = comp && comp.P[id];
    const badges = (m.captain === id ? '<i class="cap">C</i>' : '') + (c && c.y ? `<i class="yc">${c.y > 1 ? 2 : ''}</i>` : '') + (c && c.g ? `<i class="gl">${c.g > 1 ? c.g : ''}${IC.ball}</i>` : '');
    html += `<button class="tok" ${pos} data-act="${mode === 'live' ? 'livePlayer' : 'slot'}" data-slot="${slot}" data-id="${esc(id)}">
      <span class="disc">${esc(p.dorsal)}${badges}</span><span class="nm">${esc(short(p.name))}</span>${mode === 'live' && c ? `<span class="mins">${c.min}'</span>` : `<span class="mins">${slot}</span>`}</button>`;
  }
  return `<div class="pitch">${pitchSVG()}${html}</div>`;
}
function formationChips(m) {
  return `<div class="chips scroll">${Object.keys(FORMATIONS).map(f => `<button class="chip ${m.formation === f ? 'on' : ''}" data-act="formation" data-v="${f}">${f}</button>`).join('')}</div>`;
}
function onceView(m) {
  const byId = rmap(m);
  const placed = new Set(Object.values(m.lineup));
  const calledList = m.roster.filter(p => m.called[p.id]);
  const bench = calledList.filter(p => !placed.has(p.id));
  const nPlaced = Object.values(m.lineup).filter(id => m.called[id]).length;
  return `${lockBar(m)}${formationChips(m)}
    ${field('Sistema tal y como lo apuntas en el Excel', inp('formationText', m.formationText, `placeholder="${esc(m.formation)}"`))}
    <div class="sumline"><b class="big">${nPlaced}</b>/11 titulares <span class="sp"></span><span class="muted small">Capitana: <b>${m.captain && byId[m.captain] ? esc(title(byId[m.captain].name)) : 'sin elegir'}</b></span></div>
    ${pitch(m, 'once')}
    <p class="muted small center">Toca un hueco para colocar a una jugadora. Tócala otra vez para cambiarla o hacerla capitana.</p>
    <h3 class="h3">Suplentes <span class="muted">${bench.length}</span></h3>
    <div class="benchrow">${bench.map(p => `<span class="bchip"><span class="disc sm">${esc(p.dorsal)}</span>${esc(short(p.name))}</span>`).join('') || '<span class="muted small">Nadie en el banquillo</span>'}</div>
    ${calledList.length < 11 ? `<div class="banner">Solo tienes ${calledList.length} convocadas. Vuelve a Convocatoria para añadir más.</div>` : ''}
    ${nextBtn('rival', 'Apuntar el rival')}`;
}

function rivalView(m, live = false) {
  const forms = ['1.4.4.2', '1.4.3.3', '1.4.2.3.1', '1.3.5.2', '1.5.3.2', '1.4.1.4.1'];
  const ro = isLocked(m) ? 'readonly' : '';
  return `${live ? '' : lockBar(m)}<div class="card">${field('Nombre del rival', inp('rival.name', m.rival.name || m.info.rival))}
    ${field('Sistema del rival', inp('rival.formation', m.rival.formation, 'placeholder="p. ej. 1.4.4.2 - 1.4.2.4."'))}
    <div class="chips">${forms.map(f => `<button class="chip" data-act="rivalForm" data-v="${f}">${f}</button>`).join('')}</div></div>
    ${live ? '' : '<p class="muted small">Si aún no las conoces, déjalo vacío: en el Directo tienes «Apuntar rival» para rellenarlo durante el partido.</p>'}
    <h3 class="h3">Jugadoras destacadas <span class="muted">${m.rival.players.length}/11</span></h3>
    ${m.rival.players.map((p, i) => `<div class="card rp">
      <div class="row2b">${field('Nombre', inp(`rival.players.${i}.name`, p.name, 'autocapitalize="characters"'))}${field('Dorsal', inp(`rival.players.${i}.dorsal`, p.dorsal, 'inputmode="numeric"'), 'narrow')}</div>
      <div class="chips tight">${RIVAL_POS.map(x => `<button class="chip sm ${p.pos === x ? 'on' : ''}" data-act="rpPos" data-i="${i}" data-v="${x}">${x}</button>`).join('')}</div>
      <div class="row3">${field('Goles', inp(`rival.players.${i}.goals`, p.goals || '', 'type="number" min="0" inputmode="numeric" ' + ro))}${field('Amarillas', inp(`rival.players.${i}.y`, p.y || '', 'type="number" min="0" inputmode="numeric" ' + ro))}${field('Rojas', inp(`rival.players.${i}.r`, p.r || '', 'type="number" min="0" inputmode="numeric" ' + ro))}</div>
      ${field('A destacar', inp(`rival.players.${i}.note`, p.note, 'placeholder="Goleadora, rápida, juego aéreo…"'))}
      <button class="link danger" data-act="rpDel" data-i="${i}">Quitar</button></div>`).join('')}
    ${m.rival.players.length < 11 ? `<button class="btn wide" data-act="rpAdd">+ Añadir jugadora rival</button>` : ''}
    ${live ? '' : nextBtn('directo', 'Ir al directo')}`;
}

function clockText(m) {
  const c = m.clock, Hh = H();
  const mmss = ms => { const s = Math.max(0, Math.floor(ms / 1000)); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };
  if (c.phase === 'h1') return mmss(Date.now() - c.h1Start);
  if (c.phase === 'h2') return mmss(Date.now() - c.h2Start + Hh * 60000);
  if (c.phase === 'ht') return 'Descanso';
  if (c.phase === 'end') return 'Final';
  return '00:00';
}
const PHASE_BTN = { pre: 'Empezar 1ª parte', h1: 'Descanso', ht: 'Empezar 2ª parte', h2: 'Final del partido', end: null };
const PHASE_LBL = { pre: 'Sin empezar', h1: '1ª parte', ht: 'Descanso', h2: '2ª parte', end: 'Terminado' };
function liveView(m) {
  const comp = compute(m, H());
  const byId = rmap(m);
  const onIds = new Set(Object.values(comp.field));
  const bench = m.roster.filter(p => m.called[p.id] && !onIds.has(p.id));
  const sc = scoreStrings(m, comp, awayOf(m.title));
  const gf = comp.gf[0] + comp.gf[1], gc = comp.gc[0] + comp.gc[1];
  const imported = !hasGoalEvents(m) && m.imp && m.imp.score.final;
  const nTit = Object.values(m.lineup).filter(id => m.called[id]).length;
  return `${lockBar(m)}<div class="board">
      <div class="score"><span class="t">${esc(title(m.team).replace(/^C\.d\. /i, ''))}</span><b>${imported ? esc(ourView(m.imp.score.final, awayOf(m.title))).replace(' - ', '<i>–</i>') : `${gf}<i>–</i>${gc}`}</b><span class="t">${esc(title(m.info.rival).replace(/^[A-Z]\.[A-Z]\.\s*/i, ''))}</span></div>
      <div class="clockrow"><span class="phase">${PHASE_LBL[m.clock.phase]}</span><span class="clock" data-clock>${clockText(m)}</span>
        ${m.clock.phase === 'h1' || m.clock.phase === 'h2' ? '<button class="link" data-act="adjust">Ajustar</button>' : ''}</div>
      <div class="phasebtns">${PHASE_BTN[m.clock.phase] ? `<button class="btn primary" data-act="phase">${PHASE_BTN[m.clock.phase]}</button>` : ''}
        ${m.clock.phase !== 'pre' ? '<button class="btn ghost sm" data-act="phaseBack">Deshacer</button>' : ''}</div>
    </div>
    <div class="seg">${[['us', 'Nuestro equipo'], ['rival', 'Apuntar rival']].map(([k, l]) => `<button class="${(S.ui.liveSide || 'us') === k ? 'on' : ''}" data-act="liveSide" data-v="${k}">${l}</button>`).join('')}</div>
    ${S.ui.liveSide === 'rival' ? rivalLive(m) : `
    ${nTit < 11 ? `<div class="banner">Faltan titulares (${nTit}/11). Puedes completarlo en <button class="link" data-act="step" data-v="once">Once</button>.</div>` : ''}
    ${imported ? `<div class="banner">Este partido ya estaba en el Excel. Si apuntas un gol nuevo, el marcador se recalcula solo con los goles apuntados aquí.</div>` : ''}
    <div class="quick"><button class="btn goal" data-act="goalStart">${IC.ball} Gol nuestro</button><button class="btn rgoal" data-act="rgoalStart">${IC.ball} Gol rival</button><button class="btn" data-act="rcardStart">${IC.card('Y')} Tarjeta rival</button></div>
    ${UI.pickIn ? `<div class="pickbar"><span>Entra <b>${esc(title(rmap(m)[UI.pickIn]?.name || ''))}</b>: toca a la jugadora que sale${Object.keys(comp.field).length < 11 ? ' o un hueco libre' : ''}</span><button class="link" data-act="pickCancel">Cancelar</button></div>` : ''}
    <div class="${UI.pickIn ? 'picking' : ''}">${pitch(m, 'live', comp)}</div>
    <div class="formline"><span class="muted small">${Object.keys(comp.field).length < 11 && m.clock.phase !== 'pre' ? `<b class="short">${Object.keys(comp.field).length} en el campo</b> · ` : ''}Sistema ${esc(m.formation)}</span><button class="link" data-act="formSheet">Cambiar</button></div>
    <h3 class="h3">Banquillo <span class="muted small">toca una y luego a quién sustituye</span></h3>
    <div class="benchrow">${bench.map(p => { const c = comp.P[p.id]; const dis = c.expelled;
      return `<button class="bchip ${dis ? 'dim' : ''} ${UI.pickIn === p.id ? 'sel' : ''}" data-act="${dis ? 'noop' : 'benchIn'}" data-id="${esc(p.id)}"><span class="disc sm">${esc(p.dorsal)}</span><span class="bn">${esc(short(p.name))}<small>${c.min ? `${c.min}' jugados` : 'sin jugar'}${c.leftAt != null && !c.expelled ? ` · fuera desde el ${c.leftAt}'` : ''}</small></span>${c.expelled ? IC.card('R') : ''}</button>`; }).join('') || '<span class="muted small">Sin suplentes</span>'}</div>
    <h3 class="h3">Lo que ha pasado</h3>
    ${eventLog(m, byId)}`}`;
}
function rivalLive(m) {
  // Vista rápida para apuntar al rival durante el partido; el marcador y el reloj siguen arriba
  return `<div class="quick"><button class="btn rgoal" data-act="rgoalStart">${IC.ball} Gol rival</button><button class="btn" data-act="rcardStart">${IC.card('Y')} Tarjeta rival</button><button class="btn" data-act="rpAdd">+ Jugadora</button></div>
    ${rivalView(m, true)}`;
}
function eventText(e, byId) {
  const n = id => (id && byId[id] ? esc(title(byId[id].name)) : '¿?');
  if (e.t === 'goal') return `<b>Gol</b> de ${e.scorer ? n(e.scorer) : 'propia puerta rival'}${e.assist ? ` · asist. ${n(e.assist)}` : ''}`;
  if (e.t === 'rgoal') return `<b>Gol rival</b> ${e.og ? `(en propia de ${n(e.og)})` : e.dorsal ? `del ${esc(e.dorsal)}` : ''}`;
  if (e.t === 'card') return `${e.color === 'Y' ? 'Amarilla' : 'Roja'} a ${n(e.pid)}`;
  if (e.t === 'rcard') return `${e.color === 'Y' ? 'Amarilla' : 'Roja'} al ${esc(e.dorsal)} rival`;
  if (e.t === 'sub') return `Entra ${n(e.in)} · sale ${n(e.out)}`;
  if (e.t === 'out') return `Sale ${n(e.pid)} sin cambio`;
  if (e.t === 'in') return `Entra ${n(e.pid)} (hueco ${esc(e.slot)})`;
  if (e.t === 'move') return `${n(e.pid)} pasa a la posición ${esc(e.slot)}`;
  return '';
}
function eventIcon(e) { return e.t === 'goal' || e.t === 'rgoal' ? IC.ball : e.t === 'card' || e.t === 'rcard' ? IC.card(e.color) : (e.t === 'sub' || e.t === 'out' || e.t === 'in') ? IC.sub : IC.move; }
function eventLog(m, byId) {
  const evs = sortedEvents(m).reverse();
  if (!evs.length) return '<p class="muted small">Aún no hay nada apuntado. Toca a una jugadora en el campo para apuntar un gol, una tarjeta o un cambio.</p>';
  return `<ol class="log">${evs.map(e => `<li class="ev-${e.t}"><button data-act="evEdit" data-id="${e.id}"><span class="lm">${fmtMin(e.min, e.half, H())}'</span>${eventIcon(e)}<span class="lt">${eventText(e, byId)}${e.desc ? `<small>${esc(e.desc)}</small>` : ''}</span></button></li>`).join('')}</ol>`;
}

function summaryView(m) {
  const comp = compute(m, H()); const aw = awayOf(m.title); const sc = scoreStrings(m, comp, aw); const byId = rmap(m);
  const edit = !!(UI.editStats || {})[m.sheetId];
  const rows = m.roster.filter(p => m.called[p.id]);
  const gr = goalRows(m, H());
  const st = Object.fromEntries(rows.map(p => [p.id, finalStats(m, comp, p.id)]));
  const v = x => (x === '' || x == null ? '' : esc(x));
  const cell = (p, f, w = 'n') => edit
    ? `<td><input class="cin ${f in (m.ov[p.id] || {}) ? 'ovr' : ''} ${w}" data-ov="${esc(p.id)}|${f}" value="${esc(st[p.id][f])}" ${f === 'pos' ? '' : 'inputmode="numeric"'} aria-label="${f}"></td>`
    : `<td>${v(st[p.id][f])}</td>`;
  const fin = sc.final ? ourView(sc.final, aw).split('-').map(s => +s) : null;
  const res = fin ? (fin[0] > fin[1] ? 'w' : fin[0] === fin[1] ? 'd' : 'l') : 'pending';
  const played = rows.filter(p => st[p.id].tit || st[p.id].min || st[p.id].pos);
  return `<div class="card result fin-${res}">
      <div class="finhead"><span class="finbadge"><svg viewBox="0 0 24 24" class="ic"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Jornada finalizada</span><span class="muted small">${esc(fmtFecha(m.info.fecha) || '')}${m.info.lugar ? ' · ' + esc(title(m.info.lugar)) : ''}</span></div>
      <div class="resrow"><div><small>1ª parte</small><b>${esc(ourView(sc.h1, aw) || '—')}</b></div><div><small>2ª parte</small><b>${esc(ourView(sc.h2, aw) || '—')}</b></div><div class="fin"><small>Final</small><b>${esc(ourView(sc.final, aw) || '—')}</b></div></div>
      <p class="muted small">Nosotras – ${esc(title(sheetShort(m.title).name))}${m.formationText || m.formation ? ' · sistema ' + esc(m.formationText || m.formation) : ''}${m.rival.formation ? ' · rival ' + esc(m.rival.formation) : ''}</p>
    </div>
    ${edit ? `<div class="lockbar open"><span>Editando estadísticas: los cambios se escriben en el Excel al guardar.</span><button class="link" data-act="editStatsOff">Hecho</button></div>`
           : `<div class="acts"><button class="btn" data-act="askEditStats">Cambiar estadísticas</button><button class="btn danger" data-act="askWipeJ">Borrar datos de la jornada</button></div>`}
    <h3 class="h3">Jugadoras</h3>
    <div class="tablewrap"><table class="review"><thead><tr><th>Jugadora</th><th>T/S</th><th>Min</th><th>Pos</th><th>G</th><th>A</th><th>GP</th><th>TA</th><th>TR</th></tr></thead><tbody>
      ${rows.map(p => `<tr><th><span class="disc sm">${esc(p.dorsal)}</span>${esc(short(p.name))}${st[p.id].cap ? ' <i class="cap inl">C</i>' : ''}${st[p.id].mvp ? ' <i class="mvpi">MVP</i>' : ''}</th>
        <td>${st[p.id].tit ? '<b class="pillT">T</b>' : '<b class="pillS">S</b>'}</td>${cell(p, 'min')}${cell(p, 'pos', 'w')}${cell(p, 'g')}${cell(p, 'a')}${cell(p, 'gp')}${cell(p, 'ta')}${cell(p, 'tr')}</tr>`).join('')}
    </tbody></table></div>
    ${edit ? `<h3 class="h3">MVP</h3><div class="chips">${(played.length ? played : rows).map(p => `<button class="chip ${m.mvp[p.id] ? 'on' : ''}" data-act="mvp" data-id="${esc(p.id)}">${m.mvp[p.id] ? IC.star : ''}${esc(title(p.name))}</button>`).join('')}</div>
      <h3 class="h3">Capitana</h3><div class="chips">${rows.map(p => `<button class="chip ${m.captain === p.id ? 'on' : ''}" data-act="setCapSum" data-id="${esc(p.id)}">${esc(title(p.name))}</button>`).join('')}</div>` : ''}
    <div class="card"><div class="eyebrow">Goles</div>
      ${gr.ours.length || gr.theirs.length ? `<ul class="glist">${gr.ours.map(r => `<li class="us"><b>${esc(r[0])}'</b><span>${esc(rows.find(p => str(p.dorsal) === str(r[1]))?.name ? title(rows.find(p => str(p.dorsal) === str(r[1])).name) : (r[1] ? '#' + r[1] : 'Gol'))}</span><small>${esc(r[2] || '')}</small></li>`).join('')}${gr.theirs.map(r => `<li class="them"><b>${esc(r[0])}'</b><span>Rival${r[1] ? ' #' + esc(r[1]) : ''}</span><small>${esc(r[2] || '')}</small></li>`).join('')}</ul>` : '<p class="muted small">Sin goles apuntados.</p>'}</div>
    ${m.rival.players.length ? `<div class="card scout"><div class="eyebrow">Rival · jugadoras destacadas</div><ul class="scoutlist">${m.rival.players.map(p => `<li><span class="disc sm">${esc(p.dorsal)}</span><b>${esc(title(p.name))}</b> <small>${esc(p.pos)}</small> ${p.goals ? `<small>${p.goals} gol</small>` : ''} ${fmtCards(p.y, p.r) ? `<small>${fmtCards(p.y, p.r)}</small>` : ''} <em>${esc(p.note)}</em></li>`).join('')}</ul></div>` : ''}
    <div class="card">${field('Planteamiento del partido', `<textarea data-bind="texts.plan" rows="4">${esc(m.texts.plan)}</textarea>`)}
      ${field('Crónica 1ª parte', `<textarea data-bind="texts.cron1" rows="5">${esc(m.texts.cron1)}</textarea>`)}
      ${field('Crónica 2ª parte', `<textarea data-bind="texts.cron2" rows="5">${esc(m.texts.cron2)}</textarea>`)}
      ${field('Observaciones generales', `<textarea data-bind="texts.obs" rows="4">${esc(m.texts.obs)}</textarea>`)}</div>
    <button class="btn primary wide big" data-act="save" ${UI.sync === 'saving' ? 'disabled' : ''}>${UI.sync === 'saving' ? esc(UI.syncMsg) : 'Guardar en el Excel'}</button>
    <button class="link" data-act="askReopen">Reabrir la jornada (convocatoria, once y directo)</button>`;
}
function cierreView(m) {
  const comp = compute(m, H());
  const aw = awayOf(m.title);
  const sc = scoreStrings(m, comp, aw);
  const played = m.roster.filter(p => comp.P[p.id] && (comp.P[p.id].tit || comp.P[p.id].min > 0 || (m.ov[p.id] && (m.ov[p.id].pos || m.ov[p.id].min))));
  const rows = m.roster.filter(p => m.called[p.id]);
  const hasOv = Object.keys(m.ov).length > 0;
  const lk = isLocked(m);
  const cell = (p, st, f, w = 'n') => `<td><input class="cin ${f in (m.ov[p.id] || {}) ? 'ovr' : ''} ${w}" data-ov="${esc(p.id)}|${f}" value="${esc(st[f])}" ${f === 'pos' ? '' : 'inputmode="numeric"'} ${lk ? 'readonly data-locked="1"' : ''} aria-label="${f}"></td>`;
  return `${lockBar(m)}<div class="card result"><div class="eyebrow">Resultado</div>
      <div class="resrow"><div><small>1ª parte</small><b>${esc(ourView(sc.h1, aw) || '—')}</b></div><div><small>2ª parte</small><b>${esc(ourView(sc.h2, aw) || '—')}</b></div><div class="fin"><small>Final</small><b>${esc(ourView(sc.final, aw) || '—')}</b></div></div>
      <p class="muted small">Nosotras – ${esc(title(sheetShort(m.title).name))}.${aw ? ' Jugamos fuera: en el Excel se guarda como local – visitante (' + esc(sc.final || '—') + ').' : ''}</p>
      ${m.clock.phase !== 'end' ? `<button class="btn ghost sm" data-act="markEnd">Dar el partido por terminado</button>` : ''}</div>
    <h3 class="h3">MVP del partido</h3>
    <div class="chips">${(played.length ? played : rows).map(p => `<button class="chip ${m.mvp[p.id] ? 'on' : ''}" data-act="mvp" data-id="${esc(p.id)}">${m.mvp[p.id] ? IC.star : ''}${esc(title(p.name))}</button>`).join('')}</div>
    <div class="card">${field('Crónica 1ª parte', `<textarea data-bind="texts.cron1" rows="5">${esc(m.texts.cron1)}</textarea>`)}
      ${field('Crónica 2ª parte', `<textarea data-bind="texts.cron2" rows="5">${esc(m.texts.cron2)}</textarea>`)}
      ${field('Observaciones generales', `<textarea data-bind="texts.obs" rows="4">${esc(m.texts.obs)}</textarea>`)}</div>
    <h3 class="h3">Repaso antes de guardar</h3>
    <p class="muted small">Calculado con los eventos del directo. Puedes corregir cualquier casilla; lo corregido sale marcado.</p>
    <div class="tablewrap"><table class="review"><thead><tr><th>Jugadora</th><th>T/S</th><th>Min</th><th>Pos</th><th>G</th><th>A</th><th>GP</th><th>TA</th><th>TR</th></tr></thead><tbody>
      ${rows.map(p => { const st = finalStats(m, comp, p.id); return `<tr><th><span class="disc sm">${esc(p.dorsal)}</span>${esc(short(p.name))}${st.cap ? ' <i class="cap inl">C</i>' : ''}${st.mvp ? ' <i class="mvpi">MVP</i>' : ''}</th>
        <td>${st.tit ? '<b class="pillT">T</b>' : '<b class="pillS">S</b>'}</td>${cell(p, st, 'min')}${cell(p, st, 'pos', 'w')}${cell(p, st, 'g')}${cell(p, st, 'a')}${cell(p, st, 'gp')}${cell(p, st, 'ta')}${cell(p, st, 'tr')}</tr>`; }).join('')}
    </tbody></table></div>
    ${hasOv ? `<button class="link" data-act="clearOv">Quitar correcciones y recalcular todo desde el directo</button>` : ''}
    ${m.clock.phase === 'end' ? `<button class="btn primary wide big" data-act="finalize" ${UI.sync === 'saving' ? 'disabled' : ''}>Finalizar jornada y guardar</button>
    <button class="btn wide" data-act="save" ${UI.sync === 'saving' ? 'disabled' : ''}>${UI.sync === 'saving' ? esc(UI.syncMsg) : 'Solo guardar en el Excel'}</button>`
    : `<button class="btn primary wide big" data-act="save" ${UI.sync === 'saving' ? 'disabled' : ''}>${UI.sync === 'saving' ? esc(UI.syncMsg) : 'Guardar en el Excel'}</button>`}
    <p class="muted small center">${m.clock.phase === 'end' ? 'Al finalizar, la jornada queda cerrada: solo verás el resumen y podrás añadir textos. ' : ''}${m.savedAt ? `Último guardado ${timeAgo(m.savedAt)}.` : 'Aún no se ha guardado esta jornada desde la app.'} Se escriben ${esc(m.title)}: datos, jugadoras, rival, sistemas, crónicas y goles.</p>
    <button class="link" data-act="askReload">Descartar lo de este móvil y volver a cargar desde el Excel</button>`;
}

// ---- Estadísticas ----
function statsView() {
  const sums = S.sheets.map(s => S.stats.sums[s.id]).filter(Boolean);
  const A = aggregate(sums);
  const tabs = `<div class="seg">${[['equipo', 'Equipo'], ['jugadoras', 'Jugadoras'], ['scout', 'Rival'], ['rivales', 'Notas']].map(([k, l]) => `<button class="${S.ui.stab === k ? 'on' : ''}" data-act="stab" data-v="${k}">${l}</button>`).join('')}</div>`;
  const prog = UI.statsProgress ? `<div class="banner">Leyendo jornadas del Excel… ${UI.statsProgress.done}/${UI.statsProgress.total}</div>` : '';
  const head = `<div class="sumline"><span class="muted small">${S.stats.at ? `Datos del Excel · ${timeAgo(S.stats.at)}` : `${sums.length} de ${S.sheets.length} jornadas leídas`}</span><span class="sp"></span><button class="btn ghost sm" data-act="statsReload" ${!ready() || UI.statsProgress ? 'disabled' : ''}>Actualizar</button></div>`;
  const err = UI.err.stats ? `<div class="banner err">${esc(UI.err.stats)}</div>` : '';
  if (S.ui.stab === 'scout') return `<section class="pad">${tabs}${scoutView()}</section>`;
  if (!A.games.length) return `<section class="pad">${tabs}${head}${prog}${err}<p class="muted">Todavía no hay partidos jugados en el Excel.</p></section>`;
  const v = S.ui.stab === 'jugadoras' ? playersStats(A) : S.ui.stab === 'rivales' ? rivalStats(A) : teamStats(A);
  return `<section class="pad">${tabs}${head}${prog}${err}${v}</section>`;
}
function bars(items, fmt = x => x) {
  const max = Math.max(1, ...items.map(i => i.v));
  return `<div class="bars">${items.map(i => `<div class="bar" title="${esc(i.l)}: ${esc(fmt(i.v))}"><span class="bl">${esc(i.l)}</span><span class="bt"><span class="bf" style="width:${(i.v / max) * 100}%"></span></span><span class="bv">${esc(fmt(i.v))}</span></div>`).join('')}</div>`;
}
function teamStats(A) {
  const t = A.team;
  const tiles = [['Partidos', t.pj], ['Puntos', t.pts], ['Balance', `${t.w}-${t.d}-${t.l}`], ['Goles', `${t.gf}:${t.gc}`]];
  const tr = ['1-15', '16-30', '31-45', '46-60', '61-75', '76-90'];
  const top = (k, n = 5) => [...A.players].filter(p => p[k] > 0).sort((a, b) => b[k] - a[k]).slice(0, n);
  return `<div class="tiles">${tiles.map(([l, v]) => `<div class="tile"><small>${l}</small><b>${v}</b></div>`).join('')}</div>
    <div class="card"><div class="eyebrow">Resultados</div><div class="results">${A.games.map(g => { const f = g.final; const r = !f ? '' : f[0] > f[1] ? 'w' : f[0] === f[1] ? 'd' : 'l';
      return `<button class="res ${r}" data-act="openJ" data-id="${g.id}" data-go="1"><i>${{ w: 'V', d: 'E', l: 'D' }[r] || ''}</i><small>J${g.n}</small><b>${f ? f.join('-') : '—'}</b><span>${esc(title(sheetShort(g.title).name))}</span></button>`; }).join('')}</div>
      <p class="muted small">V ganado · E empate · D derrota. Toca uno para abrir la jornada. Porterías a cero: <b>${t.cs}</b>.</p></div>
    <div class="card"><div class="eyebrow">Goles por parte</div>
      <div class="halves"><div><small>1ª parte</small><b>${t.gf1}<i>:</i>${t.gc1}</b></div><div><small>2ª parte</small><b>${t.gf2}<i>:</i>${t.gc2}</b></div></div></div>
    <div class="card"><div class="eyebrow">Goles a favor por tramo</div>${bars(tr.map((l, i) => ({ l, v: t.tramosF[i] })))}</div>
    <div class="card"><div class="eyebrow">Goles en contra por tramo</div>${bars(tr.map((l, i) => ({ l, v: t.tramosC[i] })))}</div>
    <div class="card"><div class="eyebrow">Goleadoras</div>${top('g').length ? bars(top('g').map(p => ({ l: title(p.name), v: p.g }))) : '<p class="muted small">Sin goles apuntados.</p>'}</div>
    <div class="card"><div class="eyebrow">Asistentes</div>${top('a').length ? bars(top('a').map(p => ({ l: title(p.name), v: p.a }))) : '<p class="muted small">Sin asistencias apuntadas.</p>'}</div>`;
}
function playersStats(A) {
  const cols = [['name', 'Jugadora'], ['conv', 'Conv'], ['pj', 'PJ'], ['tit', 'Tit'], ['min', 'Min'], ['g', 'G'], ['a', 'A'], ['mvp', 'MVP'], ['ta', 'TA'], ['tr', 'TR']];
  const k = S.ui.sort, d = S.ui.dir;
  const list = [...A.players].sort((a, b) => ((k === 'name' ? a.name.localeCompare(b.name) : a[k] - b[k]) * (d < 0 ? -1 : 1)) || a.name.localeCompare(b.name));
  const maxMin = A.games.length * 2 * H();
  return `<p class="muted small">Toca una cabecera para ordenar y una jugadora para ver su detalle.</p>
    <div class="tablewrap"><table class="stats"><thead><tr>${cols.map(([c, l]) => `<th><button data-act="sort" data-v="${c}" class="${k === c ? 'on' : ''}">${l}${k === c ? (d < 0 ? ' ↓' : ' ↑') : ''}</button></th>`).join('')}</tr></thead>
    <tbody>${list.map(p => `<tr data-act="pdetail" data-key="${esc(p.key)}"><th><span class="disc sm">${esc(p.dorsal)}</span>${esc(short(p.name))}</th><td>${p.conv}</td><td>${p.pj}</td><td>${p.tit}</td><td>${p.min || '—'}${p.min ? `<span class="pct">${Math.round(p.min / maxMin * 100)}%</span>` : ''}</td><td>${p.g || ''}</td><td>${p.a || ''}</td><td>${p.mvp || ''}</td><td>${p.ta || ''}</td><td>${p.tr || ''}</td></tr>`).join('')}</tbody></table></div>`;
}
function rivalStats(A) {
  return A.games.map(g => `<div class="card scout"><div class="eyebrow">J${g.n} · ${esc(title(g.rival))}</div>
    <div class="scoutres"><b>${g.final ? g.final.join(' – ') : '—'}</b><span>${esc(g.rivalForm || 'Sistema sin apuntar')}</span></div>
    ${g.rivalPlayers.length ? `<ul class="scoutlist">${g.rivalPlayers.map(p => `<li><span class="disc sm">${esc(p.dorsal)}</span><b>${esc(title(p.name))}</b> <small>${esc(p.pos)}</small> ${p.goals ? `<small>${esc(p.goals)} gol</small>` : ''} ${p.cards ? `<small>${esc(p.cards)}</small>` : ''} <em>${esc(p.note)}</em></li>`).join('')}</ul>` : '<p class="muted small">Sin jugadoras destacadas apuntadas.</p>'}</div>`).join('');
}


// ---- Rival de la jornada (datos de la federación) ----
const nameFmt = n => { n = str(n); if (n.includes(',')) { const [ap, no] = n.split(','); return title(no.trim()) + ' ' + title(ap.trim().split(/\s+/)[0]); } return title(n); };
const teamByName = name => { const k = rivalKey(name); return FFCV_SNAP.clas.find(c => rivalKey(c[2]) === k) || FFCV_SNAP.clas.find(c => rivalKey(c[2]).includes(k) || k.includes(rivalKey(c[2]))); };
function defaultScoutCod() {
  const m = cur(); const f = m && ffcvFor(m);
  if (f) { const t = teamByName(/apolo/i.test(f.local) ? f.visit : f.local); if (t) return t[1]; }
  return FFCV_SNAP.clas.find(c => c[1] !== APOLO_COD)[1];
}
function teamResults(cod) {
  return FFCV_SNAP.matches.filter(x => x[2] === cod || x[3] === cod).map(x => {
    const [a, b] = x[6].split('-').map(s => +s.trim()); const home = x[2] === cod;
    const gf = home ? a : b, ga = home ? b : a;
    return { j: x[0], fecha: x[1], home, opp: home ? x[5] : x[4], oppCod: home ? x[3] : x[2], gf, ga, r: gf > ga ? 'w' : gf === ga ? 'd' : 'l' };
  }).sort((p, q) => q.j - p.j);
}
const dmy = s => { const m = String(s).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/); return m ? new Date(+m[3], +m[2] - 1, +m[1]) : null; };
function scoutView() {
  if (!FFCV_SNAP) return `<div class="card"><p class="muted">Todavía no hay datos de la federación. ${ready() ? 'Pídeme en el chat que los actualice.' : 'Entra con Google para cargarlos.'}</p></div>`;
  const cod = S.ui.scoutCod && FFCV_SNAP.clas.some(c => c[1] === S.ui.scoutCod) ? S.ui.scoutCod : defaultScoutCod();
  const t = FFCV_SNAP.clas.find(c => c[1] === cod); const team = FFCV_SNAP.teams.find(x => x.cod === cod) || { pl: [], es: [] };
  const isNext = cod === defaultScoutCod();
  const chips = `<div class="chips scroll">${FFCV_SNAP.clas.filter(c => c[1] !== APOLO_COD).map(c => `<button class="chip ${c[1] === cod ? 'on' : ''}" data-act="scoutTeam" data-v="${c[1]}">${esc(title(c[2]).replace(/^[A-Z]\.[A-Z]\.(?:[A-Z]\.)?\s*/i, ''))}</button>`).join('')}</div>`;
  const res = teamResults(cod);
  const pill = r => { const k = { G: 'w', E: 'd', P: 'l' }[r] || r; return `<i class="rpill ${k}">${{ w: 'V', d: 'E', l: 'D' }[k]}</i>`; };
  const esc_ = team.es.reduce((o, e) => (o[e] = (o[e] || 0) + 1, o), {}); const esTop = Object.entries(esc_).sort((a, b) => b[1] - a[1])[0];
  const P = team.pl.map(p => ({ n: nameFmt(p[0]), d: p[1], pos: p[2], pj: p[3], ti: p[4], g: p[5], pen: p[6], og: p[7], y: p[8], r: p[9], c: p[10] }));
  const scorers = P.filter(p => p.g > 0).sort((a, b) => b.g - a.g || a.pj - b.pj);
  const cards = P.filter(p => p.y || p.r).sort((a, b) => (b.r * 3 + b.y) - (a.r * 3 + a.y));
  const eleven = [...P].sort((a, b) => b.ti - a.ti || b.pj - a.pj).slice(0, 11);
  const posOrder = ['P', 'LD', 'DFC', 'LI', 'MD', 'MC', 'MI', 'ED', 'EI', 'DC', ''];
  eleven.sort((a, b) => posOrder.indexOf(a.pos) - posOrder.indexOf(b.pos));
  // sanciones
  const sanc = FFCV_SNAP.sanc.filter(s => s[2] === cod).map(s => {
    const after = res.filter(r => { const d = dmy(r.fecha); return d && d > new Date(s[0]); }).length;
    return { n: nameFmt(s[3]), motivo: s[5] || s[4], partidos: s[6], fecha: s[0], pend: Math.max(0, s[6] - after) };
  });
  // rivales comunes
  const ours = teamResults(APOLO_COD);
  const common = [...new Set(ours.map(o => o.oppCod))].filter(c => c !== cod).map(c => ({ c, name: (ours.find(o => o.oppCod === c) || {}).opp, us: ours.filter(o => o.oppCod === c), them: res.filter(o => o.oppCod === c) })).filter(x => x.them.length);
  const head2 = ours.filter(o => o.oppCod === cod);
  const row = (p, extra) => `<li><span class="disc sm">${esc(p.d)}</span><b>${esc(p.n)}</b>${p.pos ? `<small>${esc(p.pos)}</small>` : ''}<span class="sp"></span>${extra}</li>`;
  return `${chips}
  <div class="card">
    <div class="eyebrow">${isNext ? 'Rival de esta jornada' : 'Equipo'} · datos FFCV del ${esc(new Date(FFCV_SNAP.at).toLocaleDateString('es-ES'))}</div>
    <h2 class="h">${esc(title(t[2]))}</h2>
    <div class="tiles"><div class="tile"><small>Posición</small><b>${t[0]}º</b></div><div class="tile"><small>Puntos</small><b>${t[9]}</b></div><div class="tile"><small>V-E-D</small><b>${t[4]}-${t[5]}-${t[6]}</b></div><div class="tile"><small>Goles</small><b>${t[7]}:${t[8]}</b></div></div>
    <div class="sumline"><span class="muted small">Racha</span>${t[10].split('').map(pill).join('')}<span class="sp"></span>${esTop ? `<span class="muted small">Sistema habitual <b>${esc(esTop[0])}</b> (${esTop[1]}/${team.es.length})</span>` : ''}</div>
  </div>
  <div class="card"><div class="eyebrow">Sancionadas</div>
    ${sanc.length ? `<ul class="slist">${sanc.map(s => `<li class="${s.pend ? 'bad' : ''}"><b>${esc(s.n)}</b><span>${esc(s.motivo)} · ${s.partidos} partido${s.partidos > 1 ? 's' : ''}</span><em>${s.pend ? `No debería jugar: le ${s.pend > 1 ? 'quedan ' + s.pend + ' partidos' : 'queda 1 partido'}` : 'Ya cumplida'}</em></li>`).join('')}</ul>` : '<p class="muted small">Sin sanciones publicadas por el comité para este equipo.</p>'}
    ${cards.some(p => p.y >= 4) ? `<p class="small">Con 4 amarillas (cerca del ciclo): ${cards.filter(p => p.y >= 4).map(p => `<b>${esc(p.n)}</b>`).join(', ')}</p>` : ''}
  </div>
  <div class="card"><div class="eyebrow">Últimos resultados</div>
    <ul class="rlist">${res.slice(0, 6).map(r => `<li>${pill(r.r)}<small>J${r.j}</small><span>${r.home ? 'vs' : 'en'} ${esc(title(r.opp))}</span><b>${r.gf}-${r.ga}</b></li>`).join('') || '<li class="muted small">Sin partidos jugados.</li>'}</ul>
    ${head2.length ? `<p class="small">Contra nosotras: ${head2.map(r => `<b>${r.ga}-${r.gf}</b> (J${r.j})`).join(', ')}</p>` : ''}</div>
  <div class="card"><div class="eyebrow">Goleadoras</div>
    ${scorers.length ? `<ul class="plist2">${scorers.slice(0, 8).map(p => row(p, `<span class="num">${p.g}${p.pen ? `<small> (${p.pen} pen.)</small>` : ''}</span><small class="muted">${p.pj} PJ</small>`)).join('')}</ul>` : '<p class="muted small">Ningún gol registrado en las actas.</p>'}</div>
  <div class="card"><div class="eyebrow">Tarjetas</div>
    ${cards.length ? `<ul class="plist2">${cards.map(p => row(p, `${p.y ? `<span class="tc">${IC.card('Y')}${p.y}</span>` : ''}${p.r ? `<span class="tc">${IC.card('R')}${p.r}</span>` : ''}`)).join('')}</ul>` : '<p class="muted small">Sin tarjetas en las actas.</p>'}</div>
  <div class="card"><div class="eyebrow">Once más habitual</div>
    <ul class="plist2">${eleven.map(p => row(p, `<small class="muted">${p.ti}/${res.length} titular</small>${p.c ? ' <i class="cap inl">C</i>' : ''}`)).join('')}</ul></div>
  <div class="card"><div class="eyebrow">Contra los mismos rivales</div>
    ${common.length ? `<ul class="clist">${common.map(x => `<li><b>${esc(title(x.name))}</b><span>Nosotras ${x.us.map(r => `${pill(r.r)}${r.gf}-${r.ga}`).join(' ')}</span><span>${esc(title(t[2]).replace(/^[A-Z]\.[A-Z]\.(?:[A-Z]\.)?\s*/i, ''))} ${x.them.map(r => `${pill(r.r)}${r.gf}-${r.ga}`).join(' ')}</span></li>`).join('')}</ul>` : '<p class="muted small">Todavía no hay rivales en común.</p>'}</div>
  <p class="muted small center">Datos de las actas y clasificación de la FFCV a ${esc(new Date(FFCV_SNAP.at).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' }))}. Pídeme en el chat que los actualice.</p>`;
}

function settingsView() {
  return `<section class="pad"><div class="card">
    ${S.settings.sid && !UI.editSid
      ? `<div class="fld"><span>Google Sheet</span><div class="locked"><svg viewBox="0 0 24 24" class="ic"><rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg><b>${esc(S.settings.sheetTitle || 'Excel conectado')}</b><button class="link" data-act="askEditSid">Cambiar</button></div></div>`
      : field('Google Sheet (pega el enlace)', `<input id="sidInput" value="" placeholder="https://docs.google.com/spreadsheets/d/…" autocapitalize="off" autocorrect="off"><div class="acts"><button class="btn primary" data-act="saveSid">Conectar este Excel</button>${S.settings.sid ? '<button class="btn ghost" data-act="cancelSid">Cancelar</button>' : ''}</div>`)}
    ${UI.err.sid ? `<div class="banner err">${esc(UI.err.sid)}</div>` : ''}
    ${field('Duración de cada parte', `<select data-bind="@settings.half">${[35, 40, 45].map(n => `<option value="${n}" ${+S.settings.half === n ? 'selected' : ''}>${n} minutos</option>`).join('')}</select>`)}
    ${CLIENT_ID_DEFAULT ? '' : field('ID de cliente de Google (OAuth)', inp('@settings.clientId', S.settings.clientId, 'placeholder="xxxx.apps.googleusercontent.com" autocapitalize="off" autocorrect="off"'))}
    <div class="acts">${ready() ? '<button class="btn" data-act="reconnect">Volver a leer las jornadas</button><button class="btn ghost" data-act="signout">Cerrar sesión</button>' : '<button class="btn primary" data-act="signin">Entrar con Google</button>'}</div>
    <p class="muted small">Conexión: ${ready() ? `conectada con tu cuenta de Google (la sesión dura hasta las ${new Date(AUTH.exp).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}; luego se renueva al guardar)` : 'sin sesión'}${UI.err.sheets ? ' · ' + esc(UI.err.sheets) : ''}</p></div>
    <div class="card"><h3 class="h3">Cómo se rellena el Excel</h3>
    <ul class="howto"><li><b>TITULAR</b>: en el once inicial. <b>SUPLENTE</b>: convocada que empieza en el banquillo.</li>
    <li><b>MINUTOS</b>: se calculan con los cambios, rojas y el reloj (partes de ${H()}').</li>
    <li><b>POSICIÓN</b>: número del hueco del sistema; si cambia de sitio se añade (p. ej. "10 6").</li>
    <li><b>Cambios volantes</b>: una jugadora que sale puede volver a entrar; los minutos se suman.</li>
    <li><b>GP</b>: goles en propia puerta. <b>CAP</b>: columna nueva que se crea al guardar cada jornada.</li>
    <li>Las jugadoras de otro equipo se añaden en una fila nueva bajo la última jugadora, con el mismo formato.</li></ul></div>
    <button class="link danger" data-act="askWipe">Borrar todos los datos guardados en este móvil</button></section>`;
}

// ===== HOJA INFERIOR (diálogos) =====
function openSheet(s) { UI.sheet = s; renderSheet(); }
function closeSheet() { UI.sheet = null; renderSheet(); }
function minuteField(s) {
  return `<div class="minrow"><button class="btn ghost" data-act="minDec" aria-label="Restar minuto">−</button>
    <label class="minbox"><span>Minuto</span><input type="number" inputmode="numeric" data-sbind="min" value="${esc(s.min)}"></label>
    <button class="btn ghost" data-act="minInc" aria-label="Sumar minuto">+</button>
    <div class="seg mini">${[1, 2].map(h => `<button class="${s.half === h ? 'on' : ''}" data-act="half" data-v="${h}">${h}ª</button>`).join('')}</div></div>`;
}
function plist(m, ids, act, extra = '') {
  const byId = rmap(m);
  return `<div class="plist">${ids.map(id => byId[id]).filter(Boolean).map(p => `<button data-act="${act}" data-id="${esc(p.id)}"><span class="disc">${esc(p.dorsal)}</span>${esc(title(p.name))}</button>`).join('')}${extra}</div>`;
}
function renderSheet() {
  const root = $('#sheet'); if (!root) return;
  const s = UI.sheet; const m = cur();
  if (!s || !m) { root.innerHTML = ''; root.classList.remove('open'); return; }
  root.classList.add('open');
  const byId = rmap(m); const comp = compute(m, H());
  const onField = Object.values(comp.field);
  let h = '', body = '';
  const n = id => (id && byId[id] ? esc(title(byId[id].name)) : '');
  switch (s.type) {
    case 'slot': {
      const id = m.lineup[s.slot]; const placed = new Set(Object.values(m.lineup));
      const free = m.roster.filter(p => m.called[p.id] && !placed.has(p.id)).map(p => p.id);
      h = id ? `${n(id)} · hueco ${s.slot}` : `Hueco ${s.slot}`;
      body = (id ? `<div class="acts"><button class="btn ${m.captain === id ? 'on' : ''}" data-act="setCap" data-id="${esc(id)}">${IC.star} ${m.captain === id ? 'Es la capitana' : 'Hacer capitana'}</button><button class="btn" data-act="unslot">Quitar del once</button></div><h4 class="h4">Cambiar por</h4>` : '<h4 class="h4">¿Quién juega aquí?</h4>')
        + (free.length ? plist(m, free, 'pickSlot') : '<p class="muted small">No quedan convocadas libres.</p>');
      break;
    }
    case 'enter': {
      const bench = m.roster.filter(p => m.called[p.id] && !onField.includes(p.id) && !comp.P[p.id].expelled).map(p => p.id);
      h = `Hueco ${s.slot} libre · ¿quién entra?`;
      body = (m.clock.phase === 'pre' ? '' : minuteField(s)) + (bench.length ? plist(m, bench, 'enterPick') : '<p class="muted small">No hay nadie disponible en el banquillo.</p>');
      break;
    }
    case 'player': {
      const c = comp.P[s.pid];
      h = `${n(s.pid)} <small>${c ? c.min + "' jugados" : ''}</small>`;
      body = `<div class="acts grid">
        <button class="btn goal" data-act="goalFrom">${IC.ball} Gol</button>
        <button class="btn" data-act="cardFrom" data-v="Y">${IC.card('Y')} Amarilla</button>
        <button class="btn" data-act="cardFrom" data-v="R">${IC.card('R')} Roja</button>
        <button class="btn" data-act="subFrom">${IC.sub} Cambio</button>
        <button class="btn" data-act="outFrom">${IC.sub} Sale sin cambio</button>
        <button class="btn" data-act="moveFrom">${IC.move} Cambiar posición</button>
        <button class="btn" data-act="ogFrom">${IC.ball} Gol en propia</button>
        <button class="btn ${m.captain === s.pid ? 'on' : ''}" data-act="setCap" data-id="${esc(s.pid)}">${IC.star} Capitana</button></div>`;
      break;
    }
    case 'goal': {
      if (s.step === 'scorer') { h = '¿Quién ha marcado?'; body = plist(m, onField, 'gScorer', `<button data-act="gScorer" data-id=""><span class="disc">PP</span>Gol en propia puerta rival</button>`); }
      else if (s.step === 'assist') { h = `Gol de ${n(s.scorer) || 'propia rival'} · ¿asistencia?`; body = `<div class="plist"><button data-act="gAssist" data-id="" class="none">Sin asistencia</button></div>` + plist(m, onField.filter(i => i !== s.scorer), 'gAssist'); }
      else { h = `Gol de ${n(s.scorer) || 'propia rival'}${s.assist ? ' · asist. ' + n(s.assist) : ''}`;
        body = minuteField(s) + `<label class="fld"><span>Cómo fue (opcional)</span><input data-sbind="desc" value="${esc(s.desc || '')}" placeholder="falta lejana, córner, contra…"></label><button class="btn primary wide" data-act="gSave">Apuntar gol</button>`; }
      break;
    }
    case 'rgoal': {
      h = 'Gol del rival';
      const known = m.rival.players.filter(p => str(p.dorsal));
      body = `<label class="fld"><span>Dorsal de la goleadora</span><input data-sbind="dorsal" inputmode="numeric" value="${esc(s.dorsal || '')}" placeholder="Nº"></label>
        ${known.length ? `<div class="chips">${known.map(p => `<button class="chip ${str(s.dorsal) === str(p.dorsal) ? 'on' : ''}" data-act="rgDorsal" data-v="${esc(p.dorsal)}">${esc(p.dorsal)} ${esc(title(p.name))}</button>`).join('')}</div>` : ''}
        <div class="chips"><button class="chip ${s.og ? 'on' : ''}" data-act="rgOgToggle">Fue en propia nuestra</button></div>
        ${s.og !== undefined && s.og !== null ? plist(m, onField, 'rgOg') + (s.og ? `<p class="small">En propia de <b>${n(s.og)}</b></p>` : '') : ''}
        ${minuteField(s)}<label class="fld"><span>Cómo fue (opcional)</span><input data-sbind="desc" value="${esc(s.desc || '')}" placeholder="balón largo, despeje…"></label>
        <button class="btn primary wide" data-act="rgSave">Apuntar gol rival</button>`;
      break;
    }
    case 'rcard': {
      h = 'Tarjeta a una rival';
      const known = m.rival.players.filter(p => str(p.dorsal));
      body = `<div class="seg">${[['Y', 'Amarilla'], ['R', 'Roja']].map(([c, l]) => `<button class="${s.color === c ? 'on' : ''}" data-act="rcColor" data-v="${c}">${IC.card(c)} ${l}</button>`).join('')}</div>
        <label class="fld"><span>Dorsal</span><input data-sbind="dorsal" inputmode="numeric" value="${esc(s.dorsal || '')}" placeholder="Nº"></label>
        ${known.length ? `<div class="chips">${known.map(p => `<button class="chip ${str(s.dorsal) === str(p.dorsal) ? 'on' : ''}" data-act="rgDorsal" data-v="${esc(p.dorsal)}">${esc(p.dorsal)} ${esc(title(p.name))}</button>`).join('')}</div>` : ''}
        ${minuteField(s)}<button class="btn primary wide" data-act="rcSave">Apuntar tarjeta</button>`;
      break;
    }
    case 'card': { h = `${s.color === 'Y' ? 'Amarilla' : 'Roja'} a ${n(s.pid)}`; body = minuteField(s) + `<button class="btn primary wide" data-act="cSave">Apuntar tarjeta</button>`; break; }
    case 'sub': {
      if (!s.in) { const bench = m.roster.filter(p => m.called[p.id] && !onField.includes(p.id) && !comp.P[p.id].expelled).map(p => p.id);
        h = `Sale ${n(s.out)} · ¿quién entra?`; body = bench.length ? plist(m, bench, 'subIn') : '<p class="muted small">No quedan suplentes disponibles.</p>'; }
      else if (!s.out) { h = `Entra ${n(s.in)} · ¿quién sale?`; body = plist(m, onField, 'subOut'); }
      else { h = `Entra ${n(s.in)} · sale ${n(s.out)}`; body = minuteField(s) + `<button class="btn primary wide" data-act="subSave">Hacer el cambio</button>`; }
      break;
    }
    case 'move': {
      const F = FORMATIONS[m.formation];
      h = `¿A qué posición pasa ${n(s.pid)}?`;
      body = `<div class="slotgrid">${Object.keys(F).sort((a, b) => a - b).map(sl => { const who = comp.field[sl];
        return `<button class="${String(s.slot) === sl ? 'on' : ''} ${who === s.pid ? 'self' : ''}" data-act="mvSlot" data-v="${sl}"><b>${sl}</b><small>${who ? esc(short(byId[who]?.name || '')) : 'libre'}</small></button>`; }).join('')}</div>
        <p class="muted small">Si el hueco está ocupado, se intercambian las dos.</p>${s.slot ? minuteField(s) + '<button class="btn primary wide" data-act="mvSave">Apuntar cambio de posición</button>' : ''}`;
      break;
    }
    case 'event': {
      const e = m.events.find(x => x.id === s.eid); if (!e) { closeSheet(); return; }
      h = eventText(e, byId); body = minuteField(s) + `<label class="fld"><span>Nota</span><input data-sbind="desc" value="${esc(s.desc || '')}"></label>
        <div class="acts"><button class="btn primary" data-act="evSave">Guardar</button><button class="btn danger" data-act="evDel">Borrar</button></div>`;
      break;
    }
    case 'adjust': { h = 'Ajustar el reloj'; body = `<p class="muted small">Si se te olvidó darle al empezar, pon el minuto por el que va el partido.</p>${minuteField(s)}<button class="btn primary wide" data-act="adjSave">Ajustar</button>`; break; }
    case 'form': { h = 'Cambiar de sistema'; body = formationChips(m) + '<p class="muted small">Las jugadoras mantienen su número de posición.</p>'; break; }
    case 'confirm': { h = s.title; body = `<p>${s.text}</p><div class="acts"><button class="btn danger" data-act="${s.act}">${s.ok}</button><button class="btn" data-act="close">Cancelar</button></div>`; break; }
    case 'pdetail': {
      const A = aggregate(S.sheets.map(x => S.stats.sums[x.id]).filter(Boolean)); const p = A.players.find(x => x.key === s.key); if (!p) { closeSheet(); return; }
      h = `${esc(title(p.name))} <small>#${esc(p.dorsal)}</small>`;
      body = `<div class="tiles small">${[['Min', p.min], ['Goles', p.g], ['Asist.', p.a], ['MVP', p.mvp]].map(([l, v]) => `<div class="tile"><small>${l}</small><b>${v}</b></div>`).join('')}</div>
        <div class="eyebrow">Minutos por jornada</div>${bars(p.games.map(g => ({ l: `J${g.n} ${title(g.rival).slice(0, 12)}`, v: g.min })), v => (v ? v + "'" : '—'))}
        <ul class="gl">${p.games.filter(g => g.conv || g.played).map(g => `<li><b>J${g.n}</b> ${g.tit ? 'Titular' : 'Suplente'}${g.pos ? ` · pos. ${esc(g.pos)}` : ''}${g.g ? ` · ${g.g} gol` : ''}${g.a ? ` · ${g.a} asist.` : ''}${g.mvp ? ' · MVP' : ''}${g.cap ? ' · capitana' : ''}</li>`).join('')}</ul>`;
      break;
    }
  }
  root.innerHTML = `<div class="scrim" data-act="close"></div><div class="panel" role="dialog" aria-modal="true"><div class="grab"></div><div class="ph"><h3>${h}</h3><button class="x" data-act="close" aria-label="Cerrar">×</button></div><div class="pb">${body}</div></div>`;
}

// ===== ACCIONES =====
function setPath(obj, path, val) { const ks = path.split('.'); let o = obj; for (let i = 0; i < ks.length - 1; i++) o = o[ks[i]]; o[ks[ks.length - 1]] = val; }
const ACT = {
  noop() {},
  tab(el) { S.ui.tab = el.dataset.v; persist(); render(); window.scrollTo(0, 0); if (S.ui.tab === 'stats' && ready() && Object.keys(S.stats.sums).length < S.sheets.length) loadStats(); },
  step(el) { S.ui.step = el.dataset.v; persist(); render(); window.scrollTo(0, 0); },
  stab(el) { S.ui.stab = el.dataset.v; persist(); render(); },
  openJ(el) { if (el.dataset.go) { S.ui.tab = 'match'; } UI.unlocked = {}; UI.editStats = {}; S.ui.railOpen = false; UI.sync = null; openMatch(el.dataset.id); window.scrollTo(0, 0); },
  railToggle() { S.ui.railOpen = !S.ui.railOpen; persist(); render(); if (S.ui.railOpen) { const c = document.getElementById('j' + S.current); if (c) c.scrollIntoView({ inline: 'center', block: 'nearest' }); } },
  reloadJ() { openMatch(S.current, { reload: true }); },
  askReload() { openSheet({ type: 'confirm', title: 'Volver a cargar desde el Excel', text: 'Se perderá lo que hayas apuntado en este móvil para esta jornada y no esté guardado.', ok: 'Cargar desde el Excel', act: 'doReload' }); },
  doReload() { closeSheet(); openMatch(S.current, { reload: true }); },
  askWipe() { openSheet({ type: 'confirm', title: 'Borrar datos del móvil', text: 'Se borran los partidos apuntados en este móvil. Lo que ya está en el Excel no se toca.', ok: 'Borrar', act: 'doWipe' }); },
  doWipe() { const keep = S.settings; S = defaultState(); S.settings = keep; closeSheet(); persist(); render(); if (ready()) openMatch(S.sheets[0].id); },
  save() { const m = cur(); if (m) saveToSheet(m); },
  signin() { signIn(''); },
  finalize() { const m = cur(); m.finalized = true; if (UI.editStats) delete UI.editStats[m.sheetId]; touch(m); window.scrollTo(0, 0); saveToSheet(m); },
  askWipeJ() {
    const m = cur();
    openSheet({ type: 'confirm', title: 'Borrar datos de la jornada',
      text: `Vas a borrar <b>todos los datos</b> de la hoja <b>«${esc(m.title)}»</b> del Excel: resultado, lugar, fecha y horas, convocatoria, titulares, minutos, posiciones, goles, asistencias, tarjetas, MVP, capitana, rival, sistemas, planteamiento, crónicas, goles y observaciones. Se mantienen los nombres y dorsales de la plantilla y el formato. <b>No se puede deshacer.</b>`,
      ok: 'Sí, borrar la jornada', act: 'doWipeJ' });
  },
  doWipeJ() { const m = cur(); closeSheet(); wipeJornada(m); },
  askEditStats() { openSheet({ type: 'confirm', title: 'Cambiar estadísticas', text: 'Estás a punto de cambiar las estadísticas de un partido finalizado (minutos, goles, tarjetas, MVP…). ¿Seguro?', ok: 'Sí, cambiar', act: 'editStatsOn' }); },
  editStatsOn() { const m = cur(); (UI.editStats = UI.editStats || {})[m.sheetId] = true; closeSheet(); render(); },
  editStatsOff() { const m = cur(); if (UI.editStats) delete UI.editStats[m.sheetId]; render(); },
  setCapSum(el) { const m = cur(); m.captain = m.captain === el.dataset.id ? null : el.dataset.id; touch(m); },
  askReopen() { openSheet({ type: 'confirm', title: 'Reabrir la jornada', text: 'Volverás a tener la convocatoria, el once, el directo y el cierre como en una jornada sin terminar. Lo apuntado no se borra. Cuando acabes, vuelve a pulsar «Finalizar jornada».', ok: 'Reabrir', act: 'doReopen' }); },
  doReopen() { const m = cur(); m.finalized = false; S.ui.step = 'cierre'; closeSheet(); touch(m); },
  unlock() { UI.pendingAct = null; openSheet({ type: 'confirm', title: 'Desbloquear estadísticas', text: 'Este partido ya terminó. Al desbloquear podrás cambiar convocatoria, minutos, goles, tarjetas y MVP; los cambios se escriben en el Excel cuando guardes.', ok: 'Desbloquear', act: 'unlockGo' }); },
  unlockGo() {
    const m = cur(); (UI.unlocked = UI.unlocked || {})[m.sheetId] = true;
    const p = UI.pendingAct; UI.pendingAct = null; closeSheet();
    if (p && ACT[p.name]) ACT[p.name]({ dataset: p.data, value: '' }, { target: { closest: () => null } }); else render();
  },
  relock() { const m = cur(); if (UI.unlocked) delete UI.unlocked[m.sheetId]; render(); },
  askEditSid() { openSheet({ type: 'confirm', title: 'Cambiar el Excel', text: 'Solo hace falta si vas a usar otro Google Sheet. El actual seguirá conectado hasta que pegues uno nuevo que funcione.', ok: 'Cambiar', act: 'doEditSid' }); },
  doEditSid() { closeSheet(); UI.editSid = true; UI.err.sid = null; render(); },
  cancelSid() { UI.editSid = false; UI.err.sid = null; render(); },
  async saveSid() {
    const v = str($('#sidInput').value); if (!v) return;
    const prev = S.settings.sid; S.settings.sid = v;
    if (!sid()) { S.settings.sid = prev; UI.err.sid = 'Eso no parece un enlace de Google Sheets.'; return render(); }
    if (!ready()) { persist(); UI.editSid = false; return signIn(''); }
    try {
      await call('get_spreadsheet', {}, { read: true });
      UI.editSid = false; UI.err.sid = null; UI.err.auth = null; S.stats = { v: 2, at: 0, sums: {} };
      if (prev !== S.settings.sid) S.matches = {};
      persist(); S.ui.tab = 'match'; initAuth();
    } catch (e) { S.settings.sid = prev; UI.err.sid = 'No he podido abrir ese Excel: ' + errText(e); render(); }
  },
  signout() { signOut(); },
  reconnect() { refreshSheets(); },
  statsReload() { loadStats(true); },
  scoutTeam(el) { S.ui.scoutCod = el.dataset.v; persist(); render(); },
  sort(el) { const v = el.dataset.v; if (S.ui.sort === v) S.ui.dir *= -1; else { S.ui.sort = v; S.ui.dir = v === 'name' ? 1 : -1; } persist(); render(); },
  pdetail(el) { openSheet({ type: 'pdetail', key: el.dataset.key }); },
  close() { closeSheet(); },
  ffcvFill() { const m = cur(); applyFfcv(m, true); touch(m); },
  // convocatoria
  toggleCall(el, ev) { if (ev.target.closest('[data-act="rmExtra"]')) return; const m = cur(); const id = el.dataset.id; m.called[id] = !m.called[id]; if (!m.called[id]) { for (const k in m.lineup) if (m.lineup[k] === id) delete m.lineup[k]; if (m.captain === id) m.captain = null; } touch(m); },
  callAll() { const m = cur(); m.roster.forEach(p => (m.called[p.id] = true)); touch(m); },
  callNone() { const m = cur(); m.called = {}; m.lineup = {}; m.captain = null; touch(m); },
  addExtra() { const m = cur(); const name = up($('#xName').value), dorsal = str($('#xDorsal').value); if (!name) { $('#xName').focus(); return; }
    const id = pkey(name, dorsal); if (!m.roster.some(p => p.id === id)) m.roster.push({ id, name, dorsal, extra: true }); m.called[id] = true; touch(m); },
  addPool(el) { const m = cur(); const x = S.extrasPool[+el.dataset.i]; if (!x) return; const id = pkey(x.name, x.dorsal); if (!m.roster.some(p => p.id === id)) m.roster.push({ id, name: x.name, dorsal: x.dorsal, extra: true }); m.called[id] = true; touch(m); },
  rmExtra(el) { const m = cur(); const id = el.dataset.id; m.roster = m.roster.filter(p => p.id !== id); delete m.called[id]; for (const k in m.lineup) if (m.lineup[k] === id) delete m.lineup[k]; touch(m); },
  // once
  formation(el) { const m = cur(); m.formation = el.dataset.v; if (!m.formationText || Object.keys(FORMATIONS).includes(m.formationText)) m.formationText = ''; touch(m); if (UI.sheet && UI.sheet.type === 'form') closeSheet(); },
  formSheet() { openSheet({ type: 'form' }); },
  slot(el) { openSheet({ type: 'slot', slot: el.dataset.slot }); },
  pickSlot(el) { const m = cur(); const sl = UI.sheet.slot; for (const k in m.lineup) if (m.lineup[k] === el.dataset.id) delete m.lineup[k]; m.lineup[sl] = el.dataset.id; closeSheet(); touch(m); },
  unslot() { const m = cur(); const id = m.lineup[UI.sheet.slot]; delete m.lineup[UI.sheet.slot]; if (m.captain === id) m.captain = null; closeSheet(); touch(m); },
  setCap(el) { const m = cur(); m.captain = m.captain === el.dataset.id ? null : el.dataset.id; closeSheet(); touch(m); },
  // rival
  rivalForm(el) { const m = cur(); m.rival.formation = el.dataset.v; touch(m); },
  rpPos(el) { const m = cur(); const p = m.rival.players[+el.dataset.i]; p.pos = p.pos === el.dataset.v ? '' : el.dataset.v; touch(m); },
  rpAdd() { const m = cur(); m.rival.players.push({ name: '', dorsal: '', pos: '', goals: 0, y: 0, r: 0, note: '' }); touch(m); },
  rpDel(el) { const m = cur(); m.rival.players.splice(+el.dataset.i, 1); touch(m); },
  // directo
  phase() { const m = cur(); const c = m.clock, now = Date.now();
    if (c.phase === 'pre') { c.phase = 'h1'; c.h1Start = now; if (m.imp && !m.events.length) { m.imp = null; m.ov = {}; }
      if (!str(m.info.fecha)) m.info.fecha = todayISO();
      if (!str(m.info.hora)) { const d = new Date(now); m.info.hora = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; } }
    else if (c.phase === 'h1') { c.phase = 'ht'; c.h1End = now; }
    else if (c.phase === 'ht') { c.phase = 'h2'; c.h2Start = now; }
    else if (c.phase === 'h2') { c.phase = 'end'; c.h2End = now; S.ui.step = 'cierre'; }
    keepAwake(c.phase === 'h1' || c.phase === 'h2');
    touch(m); },
  phaseBack() { const m = cur(); const c = m.clock; const prev = { h1: 'pre', ht: 'h1', h2: 'ht', end: 'h2' }[c.phase]; if (!prev) return;
    if (prev === 'h2' && !c.h2Start) c.h2Start = Date.now() - H() * 60000;
    if (prev === 'h1' && !c.h1Start) c.h1Start = Date.now() - H() * 60000;
    c.phase = prev; touch(m); },
  markEnd() { const m = cur(); m.clock.phase = 'end'; touch(m); },
  adjust() { const m = cur(); openSheet({ type: 'adjust', ...nowMinute(m) }); },
  adjSave() { const m = cur(); const s = UI.sheet; const mins = Math.max(1, +s.min || 1); const now = Date.now();
    if (s.half === 1) { m.clock.phase = 'h1'; m.clock.h1Start = now - (mins - 1) * 60000; } else { m.clock.phase = 'h2'; m.clock.h2Start = now - Math.max(0, mins - H() - 1) * 60000; }
    closeSheet(); touch(m); },
  livePlayer(el) {
    const m = cur(); const out = el.dataset.id;
    if (UI.pickIn) {
      const inn = UI.pickIn; UI.pickIn = null;
      if (m.clock.phase === 'pre') { // antes de empezar: cambia el once
        for (const k in m.lineup) if (m.lineup[k] === out) m.lineup[k] = inn;
        return touch(m);
      }
      const nm = rmap(m);
      addEvent(m, { t: 'sub', out, in: inn, ...nowMinute(m) });
      const ev = m.events[m.events.length - 1];
      showToast(`Entra ${title(nm[inn].name)} · sale ${title(nm[out].name)} (${fmtMin(ev.min, ev.half, H())}')`, ev.id);
      return;
    }
    openSheet({ type: 'player', pid: out });
  },
  liveSide(el) { S.ui.liveSide = el.dataset.v; persist(); render(); },
  outFrom() {
    const m = cur(); const pid = UI.sheet.pid; closeSheet();
    addEvent(m, { t: 'out', pid, ...nowMinute(m) });
    const ev = m.events[m.events.length - 1];
    showToast(`Sale ${title(rmap(m)[pid].name)} sin cambio (${fmtMin(ev.min, ev.half, H())}'). Quedáis ${Object.keys(compute(m, H()).field).length}.`, ev.id);
  },
  liveSlot(el) {
    const m = cur(); const slot = +el.dataset.slot;
    if (UI.pickIn) {
      const pid = UI.pickIn; UI.pickIn = null;
      if (m.clock.phase === 'pre') { m.lineup[slot] = pid; return touch(m); }
      addEvent(m, { t: 'in', pid, slot, ...nowMinute(m) });
      const ev = m.events[m.events.length - 1];
      return showToast(`Entra ${title(rmap(m)[pid].name)} al hueco ${slot} (${fmtMin(ev.min, ev.half, H())}')`, ev.id);
    }
    openSheet({ type: 'enter', slot, ...nowMinute(m) });
  },
  enterPick(el) { const m = cur(); const s = UI.sheet; closeSheet(); if (m.clock.phase === 'pre') { m.lineup[s.slot] = el.dataset.id; return touch(m); } addEvent(m, { t: 'in', pid: el.dataset.id, slot: s.slot, min: +s.min || 1, half: s.half }); },
  pickCancel() { UI.pickIn = null; render(); },
  undoToast() { const m = cur(); const t = UI.toast; UI.toast = null; if (t && t.undo) removeEvent(m, t.undo); else render(); },
  goalStart() { const m = cur(); openSheet({ type: 'goal', step: 'scorer', ...nowMinute(m) }); },
  goalFrom() { const m = cur(); openSheet({ type: 'goal', step: 'assist', scorer: UI.sheet.pid, ...nowMinute(m) }); },
  gScorer(el) { UI.sheet.scorer = el.dataset.id || null; UI.sheet.step = 'assist'; renderSheet(); },
  gAssist(el) { UI.sheet.assist = el.dataset.id || null; UI.sheet.step = 'confirm'; renderSheet(); },
  gSave() { const m = cur(), s = UI.sheet; closeSheet(); addEvent(m, { t: 'goal', scorer: s.scorer || null, assist: s.assist || null, min: +s.min || 1, half: s.half, desc: str(s.desc) }); },
  rgoalStart() { const m = cur(); openSheet({ type: 'rgoal', og: null, ...nowMinute(m) }); },
  ogFrom() { const m = cur(); openSheet({ type: 'rgoal', og: UI.sheet.pid, ...nowMinute(m) }); },
  rgDorsal(el) { UI.sheet.dorsal = el.dataset.v; renderSheet(); },
  rgOgToggle() { const s = UI.sheet; s.og = (s.og === null || s.og === undefined) ? '' : null; renderSheet(); },
  rgOg(el) { UI.sheet.og = el.dataset.id; renderSheet(); },
  rgSave() { const m = cur(), s = UI.sheet; closeSheet(); addEvent(m, { t: 'rgoal', dorsal: s.og ? '' : str(s.dorsal), og: s.og || null, min: +s.min || 1, half: s.half, desc: str(s.desc) }); },
  rcardStart() { const m = cur(); openSheet({ type: 'rcard', color: 'Y', ...nowMinute(m) }); },
  rcColor(el) { UI.sheet.color = el.dataset.v; renderSheet(); },
  rcSave() { const m = cur(), s = UI.sheet; if (!str(s.dorsal)) return; closeSheet(); addEvent(m, { t: 'rcard', dorsal: str(s.dorsal), color: s.color, min: +s.min || 1, half: s.half }); },
  cardFrom(el) { const m = cur(); openSheet({ type: 'card', pid: UI.sheet.pid, color: el.dataset.v, ...nowMinute(m) }); },
  cSave() { const m = cur(), s = UI.sheet; closeSheet(); addEvent(m, { t: 'card', pid: s.pid, color: s.color, min: +s.min || 1, half: s.half }); },
  subFrom() { const m = cur(); openSheet({ type: 'sub', out: UI.sheet.pid, ...nowMinute(m) }); },
  benchIn(el) { UI.pickIn = UI.pickIn === el.dataset.id ? null : el.dataset.id; render(); },
  subIn(el) { UI.sheet.in = el.dataset.id; renderSheet(); },
  subOut(el) { UI.sheet.out = el.dataset.id; renderSheet(); },
  subSave() { const m = cur(), s = UI.sheet; closeSheet(); addEvent(m, { t: 'sub', out: s.out, in: s.in, min: +s.min || 1, half: s.half }); },
  moveFrom() { const m = cur(); openSheet({ type: 'move', pid: UI.sheet.pid, ...nowMinute(m) }); },
  mvSlot(el) { UI.sheet.slot = el.dataset.v; renderSheet(); },
  mvSave() { const m = cur(), s = UI.sheet; closeSheet(); addEvent(m, { t: 'move', pid: s.pid, slot: +s.slot, min: +s.min || 1, half: s.half }); },
  evEdit(el) { const m = cur(); const e = m.events.find(x => x.id === el.dataset.id); if (e) openSheet({ type: 'event', eid: e.id, min: e.min, half: e.half, desc: e.desc || '' }); },
  evSave() { const m = cur(), s = UI.sheet; const e = m.events.find(x => x.id === s.eid); if (e) { e.min = +s.min || 1; e.half = s.half; e.desc = str(s.desc); } closeSheet(); touch(m); },
  evDel() { const m = cur(), s = UI.sheet; closeSheet(); removeEvent(m, s.eid); },
  minDec() { const s = UI.sheet; s.min = Math.max(1, (+s.min || 1) - 1); renderSheet(); },
  minInc() { const s = UI.sheet; s.min = (+s.min || 0) + 1; renderSheet(); },
  half(el) { const s = UI.sheet; s.half = +el.dataset.v; if (s.half === 2 && +s.min <= H()) s.min = H() + 1; if (s.half === 1 && +s.min > H() + 10) s.min = H(); renderSheet(); },
  // cierre
  mvp(el) { const m = cur(); const id = el.dataset.id; if (m.mvp[id]) delete m.mvp[id]; else m.mvp[id] = true; touch(m); },
  clearOv() { openSheet({ type: 'confirm', title: 'Recalcular todo', text: 'Se quitan las correcciones a mano y los datos importados del Excel de esta jornada; todo se calcula con los eventos del directo.', ok: 'Recalcular', act: 'doClearOv' }); },
  doClearOv() { const m = cur(); m.ov = {}; m.imp = null; closeSheet(); touch(m); },
};

// acciones que cambian estadísticas: en un partido terminado piden confirmación
const GUARDED = new Set(['toggleCall', 'callAll', 'callNone', 'addExtra', 'addPool', 'rmExtra', 'formation', 'formSheet', 'slot', 'rpDel', 'phaseBack', 'adjust',
  'livePlayer', 'goalStart', 'rgoalStart', 'rcardStart', 'benchIn', 'evEdit', 'mvp', 'clearOv']);
document.addEventListener('click', ev => {
  const el = ev.target.closest('[data-act]'); if (!el) return;
  const name = el.dataset.act; const f = ACT[name]; if (!f) return;
  ev.preventDefault();
  if (GUARDED.has(name) && isLocked(cur())) {
    UI.pendingAct = { name, data: { ...el.dataset } };
    openSheet({ type: 'confirm', title: 'Partido terminado', text: 'Este partido ya terminó y sus estadísticas están protegidas. Si cambias convocatoria, minutos, goles, tarjetas o MVP, cambiarán al guardar en el Excel. Los textos se pueden editar sin desbloquear.', ok: 'Desbloquear y cambiar', act: 'unlockGo' });
    return;
  }
  f(el, ev);
});
document.addEventListener('focusin', ev => { if (ev.target.dataset && ev.target.dataset.locked) { ev.target.blur(); ACT.unlock(); } });
document.addEventListener('input', ev => {
  const el = ev.target;
  if (el.dataset.bind) {
    let v = el.value; const path = el.dataset.bind;
    if (path.startsWith('@')) { setPath(S, path.slice(1), path.endsWith('half') ? +v : v); persist(); return; }
    const m = cur(); if (!m) return;
    if (/\.(goals|y|r)$/.test(path)) v = toInt(v);
    if (path === 'rival.name') m.info.rival = m.info.rival || v;
    setPath(m, path, v);
    if (path === 'info.hora') { m.info.cit = citOf(v) || m.info.cit; const o = document.getElementById('citOut'); if (o) o.textContent = m.info.cit || '—'; }
    m.dirty = true; persist();
    const chip = document.querySelector('.top .sync'); if (chip && mcpState !== 'none' && !chip.classList.contains('dirty') && UI.sync !== 'saving') chip.outerHTML = '<button class="sync dirty" data-act="save">Guardar en Excel</button>';
  } else if (el.dataset.sbind && UI.sheet) {
    UI.sheet[el.dataset.sbind] = el.value;
  } else if (el.dataset.ov) {
    const m = cur(); const [id, f] = el.dataset.ov.split('|');
    (m.ov[id] = m.ov[id] || {})[f] = el.value; el.classList.add('ovr'); m.dirty = true; persist();
  }
});
document.addEventListener('change', ev => { const el = ev.target; if (el.dataset.bind && (el.dataset.bind === '@settings.half' || el.dataset.bind === '@settings.sid' || el.dataset.bind === '@settings.clientId')) { UI.err.auth = null; render(); if (el.dataset.bind === '@settings.sid' && ready()) { S.ui.tab = 'match'; initAuth(); } } });

setInterval(() => {
  const m = cur(); if (!m || S.ui.tab !== 'match' || S.ui.step !== 'directo') return;
  const el = document.querySelector('[data-clock]'); if (el) el.textContent = clockText(m);
}, 1000);
setInterval(() => {
  const m = cur(); if (!m || S.ui.tab !== 'match' || S.ui.step !== 'directo' || UI.sheet) return;
  if (m.clock.phase === 'h1' || m.clock.phase === 'h2') render();
}, 10000);

function start() {
  try { const raw = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); if (raw && raw.settings) S = Object.assign(defaultState(), raw, { settings: Object.assign(defaultState().settings, raw.settings), ui: Object.assign(defaultState().ui, raw.ui || {}) }); } catch (e) {}
  if (S.stats.v !== 2) S.stats = { v: 2, at: 0, sums: {} };
  Object.values(S.matches).forEach(migrateMatch);
  if (S.current == null) S.current = S.sheets[0].id;
  pickStartJornada(); S.ui.railOpen = false;
  if (!S.matches[S.current]) S.matches[S.current] = seedMatch(sheetById(S.current) || S.sheets[0]);
  render();
  const chip = document.getElementById('j' + S.current); if (chip) chip.scrollIntoView({ inline: 'center', block: 'nearest' });
  initAuth();
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
}
start();
