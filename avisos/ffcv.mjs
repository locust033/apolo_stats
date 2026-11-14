// Datos de la federación (FFCV) para la app: clasificación, resultados, calendario del Apolo,
// goleadoras/tarjetas/sistemas de cada equipo y sanciones. Se guardan en la pestaña oculta «FFCV» del Excel.
// Se actualiza solo cada 6 horas, o antes si la app lo pide (fila «ffcv_sync» en la pestaña AVISOS).
import { configured, sheetsMeta, readRange, writeRange, clearRange, batchUpdate, setAvisosKey } from './lib.mjs';

const T = '22', C = '905431657', G = '905431660', APOLO = '905446426';
const BASE = 'https://ffcv.es/competiciones/';
const MAX_AGE_H = 6;
const FORCE = process.env.FORCE === '1';
// Cabeceras como las de un navegador en la propia web (sin ellas, la FFCV bloquea con «Token de página inválido»)
const HEADERS = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', Accept: '*/*', 'Accept-Language': 'es-ES,es;q=0.9',
  Referer: 'https://ffcv.es/competiciones/?view=partidos', 'Sec-Fetch-Site': 'same-origin', 'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Dest': 'empty',
  'sec-ch-ua': '"Chromium";v="130"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"macOS"' };

async function get(path, tries = 3) {
  for (let i = 0; ; i++) {
    try {
      const r = await fetch(BASE + path, { headers: HEADERS });
      const t = await r.text();
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return JSON.parse(t);
    } catch (e) { if (i + 1 >= tries) throw new Error(`FFCV ${path.split('?')[0]}: ${e.message}`); await new Promise(r => setTimeout(r, 1500 * (i + 1))); }
  }
}
async function pool(items, n, fn) { const out = []; let k = 0; await Promise.all(Array.from({ length: n }, async () => { while (k < items.length) { const i = k++; out[i] = await fn(items[i]); } })); return out; }
const played = p => /\d+\s*-\s*\d+/.test(p.resultado || '') && String(p.estado) !== '0';
const ddmmyyyy = s => String(s || '').replace(/-/g, '/');

async function build() {
  const qs = `cod_temporada=${T}&cod_competicion=${C}&cod_grupo=${G}`;
  const jf = await get(`api/filtros/jornadas_fetch.php?cod_grupo=${G}`);
  const jornadas = (jf.jornadas || []).map(j => +j.codjornada).filter(Boolean).sort((a, b) => a - b);
  const res = await pool(jornadas, 4, async j => ({ j, d: await get(`api/partidos/resultados_por_grupo_jornada_data.php?${qs}&cod_jornada=${j}`) }));
  const all = res.flatMap(({ j, d }) => (d.partidos || []).map(p => ({ ...p, j })));
  const done = all.filter(played);
  const lastJ = done.length ? Math.max(...done.map(p => p.j)) : jornadas[0];
  const clas = await get(`api/clasificaciones/clasificaciones_ajax.php?cod_grupo=${G}&cod_jornada=${lastJ}`);

  const rows = [['at', new Date().toISOString()]];
  for (const c of clas.clasificacion || []) rows.push(['C', +c.posicion, String(c.codequipo), c.nombre, +c.jugados || 0, +c.ganados || 0, +c.empatados || 0, +c.perdidos || 0, +c.goles_a_favor || 0, +c.goles_en_contra || 0, +c.puntos || 0, (c.racha_partidos || []).map(r => r.tipo).join('')]);
  for (const p of done) rows.push(['M', p.j, p.fecha, String(p.cod_equipo_local), String(p.cod_equipo_visitante), p.local, p.visitante, p.resultado.replace(/\s*-\s*/, ' - ')]);
  // calendario del Apolo (todas las jornadas, jugadas o no)
  for (const p of all.filter(p => String(p.cod_equipo_local) === APOLO || String(p.cod_equipo_visitante) === APOLO).sort((a, b) => a.j - b.j))
    rows.push(['K', p.j, p.fecha, p.hora || '', p.local, p.visitante, (p.campo || '').trim(), String(p.codacta || '')]);

  // fichas de los partidos jugados: jugadoras, goles, tarjetas y sistema
  const fichas = await pool(done.sort((a, b) => a.j - b.j), 4, async p => ({ p, f: await get(`api/partidos/ficha_partido_ajax.php?cod_partido=${p.codacta}`) }));
  const teams = new Map(); // cod -> {name, es:[], pl: Map}
  const team = (cod, name) => { cod = String(cod); if (!teams.has(cod)) teams.set(cod, { name, es: [], pl: new Map() }); return teams.get(cod); };
  for (const { p, f } of fichas) {
    for (const side of ['local', 'visitante']) {
      const cod = String(side === 'local' ? (f.codigo_equipo_local || p.cod_equipo_local) : (f.codigo_equipo_visitante || p.cod_equipo_visitante));
      const t = team(cod, side === 'local' ? p.local : p.visitante);
      const es = side === 'local' ? f.esquema_local : f.esquema_visitante; if (es) t.es.push(es);
      for (const j of f[`jugadores_equipo_${side}`] || []) {
        const k = String(j.codjugador); const x = t.pl.get(k) || { name: j.nombre_jugador, d: '', pos: '', pj: 0, ti: 0, g: 0, pen: 0, og: 0, y: 0, r: 0, c: 0 };
        x.name = j.nombre_jugador || x.name; x.d = String(j.dorsal || x.d); x.pos = j.posicion_jugador_abreviatura || x.pos;
        x.pj++; if (String(j.titular) === '1') x.ti++; if (String(j.capitan) === '1') x.c++;
        t.pl.set(k, x);
      }
    }
    const find = cod => { for (const t of teams.values()) if (t.pl.has(String(cod))) return t.pl.get(String(cod)); return null; };
    for (const side of ['local', 'visitante']) {
      for (const g of f[`goles_equipo_${side}`] || []) { const x = find(g.codjugador); if (!x) continue; const tg = String(g.tipo_gol);
        if (tg === '102') x.og++; else { x.g++; if (tg === '101') x.pen++; } }
      for (const c of f[`tarjetas_equipo_${side}`] || []) { const x = find(c.codjugador); if (!x) continue;
        if (String(c.codigo_tipo_amonestacion) === '100') { x.y++; if (String(c.segunda_amarilla) === '1') x.r++; } else x.r++; }
    }
  }
  for (const c of clas.clasificacion || []) team(c.codequipo, c.nombre).name = c.nombre;
  for (const [cod, t] of teams) {
    rows.push(['T', cod, t.name, t.es.join(',')]);
    for (const x of t.pl.values()) rows.push(['P', cod, x.name, x.d, x.pos, x.pj, x.ti, x.g, x.pen, x.og, x.y, x.r, x.c]);
  }
  // sanciones del comité
  const sf = await get(`api/filtros/sanciones_fechas_fetch.php?${qs}`);
  for (const fecha of sf.fechas || []) {
    const sd = await get(`api/sancionesv2/sanciones_comite.php?${qs}&fecha_comite=${fecha}`);
    for (const d of sd.data || []) for (const g of d.grupos || []) for (const s of g.jugadores_sancionados || [])
      rows.push(['S', fecha, String(g.jornada || ''), String(s.codigo_equipo), String(s.nombre || '').trim(), String(s.tipo_motivo || '').trim(), String(s.motivo_sancion || '').trim(), +s.partidos_sancion || 0]);
  }
  return { rows, summary: `${(clas.clasificacion || []).length} equipos, ${done.length} partidos jugados, jornada ${lastJ}` };
}

async function main() {
  if (!configured()) { console.log('Falta el secreto GOOGLE_SA.'); return; }
  const sheets = await sheetsMeta();
  const ffcv = sheets.find(s => s.title === 'FFCV');
  const at = ffcv ? ((await readRange("'FFCV'!A1:B1"))[0] || [])[1] : '';
  let req = '';
  if (sheets.some(s => s.title === 'AVISOS')) req = ((await readRange("'AVISOS'!A1:B600")).find(r => r[0] === 'ffcv_sync') || [])[1] || '';
  const ageH = at ? (Date.now() - Date.parse(at)) / 3600e3 : Infinity;
  const asked = req && (!at || Date.parse(req) > Date.parse(at));
  if (!FORCE && !asked && ageH < MAX_AGE_H) { console.log(`FFCV al día (${ageH.toFixed(1)} h).`); return; }
  console.log(asked ? 'Actualización pedida desde la app.' : 'Actualizando datos de la federación…');
  try {
    const { rows, summary } = await build();
    const width = 13; const data = rows.map(r => { const o = r.slice(0, width); while (o.length < width) o.push(''); return o; });
    if (!ffcv) await batchUpdate([{ addSheet: { properties: { title: 'FFCV', hidden: true, gridProperties: { rowCount: data.length + 200, columnCount: 14 } } } }]);
    else if (ffcv.gridProperties.rowCount < data.length + 50) await batchUpdate([{ updateSheetProperties: { properties: { sheetId: ffcv.sheetId, gridProperties: { rowCount: data.length + 200, columnCount: 14 } }, fields: 'gridProperties.rowCount,gridProperties.columnCount' } }]);
    await clearRange("'FFCV'!A1:N5000");
    await writeRange(`'FFCV'!A1:M${data.length}`, data);
    await writeRange("'FFCV'!N1", [[`ok · ${summary} · ${new Date().toISOString()}`]]);
    if (sheets.some(s => s.title === 'AVISOS')) await setAvisosKey('ffcv_estado', `ok · ${summary} · ${new Date().toISOString()}`);
    console.log('FFCV actualizado:', summary);
  } catch (e) {
    console.error(e);
    const msg = `error · ${String(e.message || e).slice(0, 200)} · ${new Date().toISOString()}`;
    try { if (ffcv) await writeRange("'FFCV'!N1", [[msg]]); if (sheets.some(s => s.title === 'AVISOS')) await setAvisosKey('ffcv_estado', msg); } catch (e2) { console.error(e2); }
    process.exitCode = 1;
  }
}
main();
