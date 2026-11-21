// ===== LÓGICA (sin DOM) =====
const SERVER = 'Google Sheets';
const DEFAULT_SID = ''; // el enlace del Excel se pega en Ajustes (no va en el código público)
const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

// Numeración clásica: 1 POR · 2 LD · 3 LI · 4/5 centrales · 6/8 medios · 7/11 bandas · 10 media punta · 9 punta
// Coordenadas [x, y]: x de izquierda a derecha, y desde nuestra portería (0) hacia la rival (100)
const FORMATIONS = {
  '1.4.2.3.1': {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],6:[62,41],8:[38,41],7:[84,63],10:[50,63],11:[16,63],9:[50,85]},
  '1.4.3.3':   {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],6:[50,38],8:[69,52],10:[31,52],7:[83,76],9:[50,85],11:[17,76]},
  '1.4.4.2':   {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],7:[85,54],6:[61,47],8:[39,47],11:[15,54],9:[61,83],10:[39,83]},
  '1.4.1.4.1': {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],6:[50,38],7:[85,60],8:[62,57],10:[38,57],11:[15,60],9:[50,85]},
  '1.3.5.2':   {1:[50,6],4:[70,20],5:[50,17],6:[30,20],2:[88,50],8:[67,45],10:[50,59],7:[33,45],3:[12,50],9:[61,84],11:[39,84]},
  '1.3.4.3':   {1:[50,6],4:[70,20],5:[50,17],6:[30,20],2:[86,49],8:[61,45],10:[39,45],3:[14,49],7:[83,76],9:[50,85],11:[17,76]},
  '1.5.3.2':   {1:[50,6],2:[88,32],4:[69,20],5:[50,17],6:[31,20],3:[12,32],8:[68,51],7:[50,45],10:[32,51],9:[61,83],11:[39,83]},
  // con menos jugadoras (se usan los mismos números de hueco, para que las estadísticas de posición sigan valiendo)
  '1.4.3.2':   {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],7:[78,50],6:[50,43],11:[22,50],9:[61,82],10:[39,82]},
  '1.4.4.1':   {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],7:[85,54],6:[61,47],8:[39,47],11:[15,54],9:[50,84]},
  '1.3.4.2':   {1:[50,6],4:[70,20],5:[50,17],6:[30,20],2:[86,49],8:[61,45],10:[39,45],3:[14,49],9:[61,83],11:[39,83]},
  '1.4.3.1':   {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],7:[78,52],6:[50,45],11:[22,52],9:[50,83]},
  '1.3.3.2':   {1:[50,6],4:[70,20],5:[50,17],6:[30,20],7:[80,48],8:[50,44],11:[20,48],9:[61,82],10:[39,82]},
  '1.3.4.1':   {1:[50,6],4:[70,20],5:[50,17],6:[30,20],2:[86,49],8:[61,45],10:[39,45],3:[14,49],9:[50,84]},
  '1.3.3.1':   {1:[50,6],4:[70,20],5:[50,17],6:[30,20],7:[80,50],8:[50,46],11:[20,50],9:[50,83]},
  '1.4.2.1':   {1:[50,6],2:[85,25],4:[62,19],5:[38,19],3:[15,25],6:[62,48],8:[38,48],9:[50,83]},
  '1.3.2.1':   {1:[50,6],4:[70,22],5:[50,18],6:[30,22],8:[64,50],10:[36,50],9:[50,83]},
  '1.2.3.1':   {1:[50,6],4:[64,20],5:[36,20],7:[78,50],6:[50,45],11:[22,50],9:[50,83]},
};
// número de jugadoras de un sistema
const fSize = f => Object.keys(FORMATIONS[f] || {}).length;
const DEFAULT_FORMATION = '1.4.2.3.1';
const RIVAL_POS = ['POR','LD','DFC','LI','MCD','MC','MCO','ED','EI','DC'];

const str = v => String(v ?? '').trim();
const up = v => str(v).toUpperCase();
const noacc = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
const isTrue = v => v === true || up(v) === 'TRUE' || up(v) === 'VERDADERO';
const toInt = v => { const n = parseInt(str(v), 10); return isNaN(n) ? 0 : n; };
const pkey = (name, dorsal) => up(name) + '#' + str(dorsal);
const colL = i => String.fromCharCode(65 + i);
const qs = title => "'" + String(title).replace(/'/g, "''") + "'";
const toCell = v => {
  if (v === null || v === undefined) return '';
  if (typeof v === 'boolean' || typeof v === 'number') return v;
  const s = str(v);
  if (s === '') return '';
  if (/^-?\d+$/.test(s)) return Number(s);
  return s;
};

function sheetShort(title) {
  const m = String(title).match(/^\s*(\d+)\s*-\s*(.+)$/);
  return m ? { n: +m[1], name: m[2].trim() } : { n: 0, name: String(title) };
}
function rivalKey(name) {
  const stop = new Set(['SD','CF','UE','CD','CLUB','FC','UD','CE','ATH','A','B']);
  return noacc(up(name)).replace(/'[^']*'/g, ' ').replace(/[^A-Z0-9 ]/g, '').split(/\s+/)
    .filter(t => t.length > 1 && !stop.has(t)).join(' ');
}

function parseFecha(s) {
  s = str(s); if (!s) return '';
  if (/^\d{5}$/.test(s)) { const d = new Date(Date.UTC(1899, 11, 30) + (+s) * 86400000); return d.toISOString().slice(0, 10); }
  let m = s.match(/(\d{1,2})\s+de\s+([a-záéíóú]+)\s+(?:de\s+)?(\d{4})/i);
  if (m) { const mi = MESES.indexOf(noacc(m[2].toLowerCase())); if (mi >= 0) return `${m[3]}-${String(mi+1).padStart(2,'0')}-${m[1].padStart(2,'0')}`; }
  m = s.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (m) return `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
  m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return m[0];
  return '';
}
function fmtFecha(iso) {
  const m = str(iso).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return '';
  return `${+m[3]} de ${MESES[+m[2]-1]} ${m[1]}`;
}
const stripH = s => str(s).replace(/h$/i, '').trim();
const addH = s => { s = str(s); return s ? s + 'h' : ''; };

function guessFormation(text) {
  const first = str(text).split(/\s+-\s+/)[0];
  const digits = (first.match(/\d/g) || []).join('.');
  return FORMATIONS[digits] ? digits : null;
}

// Valoraciones del campo (fila VALORACIONES del Excel): clave, cabecera en el Excel, texto en la app
const VAL_FIELDS = [['vest', 'VESTUARIO', 'Vestuario'], ['duch', 'DUCHAS', 'Duchas'], ['bal', 'BALONES', 'Balones'], ['terr', 'TERRENO', 'Terreno de juego'], ['aten', 'ATENCION', 'Atención']];

// ---- Lectura de la estructura de una hoja de jornada ----
function parseLayout(rows) {
  const R = rows || [];
  const c = (r, k) => (r < 0 ? '' : str((R[r] || [])[k]));
  const find = (pred, from = 0) => { for (let i = Math.max(0, from); i < R.length; i++) if (pred(R[i] || [], i)) return i; return -1; };
  const hdr = find(r => up(r[0]) === 'JUGADORA' && up(r[2]) === 'TITULAR');
  if (hdr < 0) throw new Error('No encuentro la tabla de jugadoras (fila con JUGADORA / TITULAR).');
  const fence = find(r => up(r[7]) === 'SISTEMAS' || up(r[0]) === 'RIVAL', hdr + 1);
  const firstEmpty = find(r => !str(r[0]), hdr + 1);
  let total = find(r => !str(r[0]) && str(r[4]) !== '', hdr + 1);
  if (total < 0 || (fence > 0 && total >= fence)) total = firstEmpty;
  const players = [];
  for (let i = hdr + 1; i < total; i++) {
    const r = R[i] || [];
    players.push({ idx: i, name: str(r[0]), dorsal: str(r[1]), blank: !str(r[0]),
      tit: isTrue(r[2]), sup: isTrue(r[3]), min: str(r[4]), pos: str(r[5]), g: str(r[6]), a: str(r[7]),
      mvp: isTrue(r[8]), gp: str(r[9]), ta: str(r[10]), tr: str(r[11]), cap: isTrue(r[12]) });
  }
  const sist = find(r => up(r[7]) === 'SISTEMAS', total);
  const rh = find(r => up(r[0]) === 'JUGADORA' && noacc(up(r[2])).startsWith('POSICION'), total);
  const plan = find(r => up(r[0]).startsWith('PLANTEAMIENTO'), total);
  const cron = find(r => noacc(up(r[0])).startsWith('CRONICA 1'), total);
  const gh = find(r => up(r[0]) === 'MINUTO' && up(r[1]) === 'DORSAL', Math.max(total, cron));
  const obs = find(r => noacc(up(r[0])).startsWith('OBSERVACIONES'), total);
  // POSITIVO / A MEJORAR: celdas combinadas bajo las observaciones, con la etiqueta delante del texto
  const lab = (re, off) => { let i = obs >= 0 ? find(r => re.test(noacc(up(r[0]))), obs + 1) : -1; if (i < 0 && obs >= 0) i = obs + off; return i; };
  const pos = lab(/^POSITIVO/, 5), mej = lab(/^A MEJORAR/, 7);
  const stripLab = (t, re) => str(t).replace(re, '').trim();
  const val = find(r => noacc(up(r[0])).startsWith('VALORACION'), total);
  const valCols = {}, vals = {};
  if (val >= 0) {
    const lab = R[val + 1] || [];
    for (const [k, name] of VAL_FIELDS) {
      const col = lab.findIndex(x => noacc(up(x)).startsWith(name));
      if (col >= 0) { valCols[k] = col; vals[k] = c(val + 2, col); }
    }
  }
  const rivalPlayers = [];
  if (rh >= 0) for (let i = rh + 1; i <= rh + 11; i++) {
    const p = { name: c(i,0), dorsal: c(i,1), pos: c(i,2), goals: c(i,3), cards: c(i,4), note: c(i,5) };
    if (p.name || p.dorsal || p.note) rivalPlayers.push(p);
  }
  const goals = { ours: [], theirs: [] };
  if (gh >= 0) for (let i = gh + 1; i <= gh + 11; i++) {
    if (c(i,0) || c(i,1) || c(i,2)) goals.ours.push([c(i,0), c(i,1), c(i,2)]);
    if (c(i,4) || c(i,6) || c(i,7)) goals.theirs.push([c(i,4), c(i,6), c(i,7)]);
  }
  return {
    hdr, total, players, hasCap: up(c(hdr,12)) === 'CAP',
    sist, rh, plan, cron, gh, obs, pos, mej, val, valCols, vals,
    title: c(1,0), rival: c(4,0), team: c(13,0),
    lugar: c(7,3), fecha: c(8,3), hora: c(9,3), cit: c(10,3),
    h1: c(7,10), h2: c(8,10), final: c(10,10),
    ourForm: sist >= 0 ? c(sist+2,7) : '',
    rivalName: rh >= 0 ? c(rh+12,7) : '', rivalForm: rh >= 0 ? c(rh+13,7) : '',
    rivalPlayers, goals,
    plan_t: plan >= 0 ? c(plan+1,0) : '', cron1: cron >= 0 ? c(cron+1,0) : '', cron2: cron >= 0 ? c(cron+1,4) : '',
    obs_t: obs >= 0 ? c(obs+1,0) : '',
    pos_t: pos >= 0 ? stripLab(c(pos,0), /^\s*POSITIVO\s*:?\s*/i) : '', mej_t: mej >= 0 ? stripLab(c(mej,0), /^\s*A MEJORAR\s*:?\s*/i) : '',
  };
}

// Nota de una destacada del rival: «Goleadora» (etiqueta) + datos de temporada de la federación (solo en la app) + tu nota.
// En el Excel solo va «Goleadora, tu nota».
function splitNote(note, auto = true) { // auto = false: del Excel, solo se separa la etiqueta
  let t = str(note).trim(), tag = ''; const info = [];
  const g = t.match(/^goleadora\b/i); if (g) { tag = g[0]; t = t.slice(g[0].length); }
  for (;auto;) {
    t = t.replace(/^[\s·,.:;\-–]+/, '');
    const m = t.match(/^(\d+ gol(?:es)?(?: \(\d+ pen\.\))?|\d+ amarillas?|\d+ rojas?)(?![\p{L}\d])/u);
    if (!m) break; info.push(m[1]); t = t.slice(m[0].length);
  }
  return { tag, info: info.join(' · '), note: (tag ? t.replace(/^[\s·,.:;\-–]+/, '') : t).trim() };
}
const joinNote = p => [str(p.tag), str(p.note)].filter(Boolean).join(', ');

function parseCards(s) {
  s = up(s); const a = s.match(/(\d+)\s*A/); const r = s.match(/(\d+)\s*R/);
  return { y: a ? +a[1] : (/\bA\b/.test(s) ? 1 : 0), r: r ? +r[1] : (/\bR\b/.test(s) ? 1 : 0) };
}
const fmtCards = (y, r) => [y ? y + 'A' : '', r ? r + 'R' : ''].filter(Boolean).join(' ');

function matchFromLayout(sheet, L) {
  const m = {
    v: 1, sheetId: sheet.id, title: sheet.title, team: L.team || 'C.D. APOLO',
    info: { rival: L.rival || sheetShort(sheet.title).name, lugar: L.lugar, fecha: parseFecha(L.fecha), hora: stripH(L.hora), cit: stripH(L.hora) ? stripH(L.cit) : '' },
    roster: [], called: {}, formation: guessFormation(L.ourForm) || DEFAULT_FORMATION, formationText: L.ourForm || '',
    lineup: {}, captain: null,
    rival: { name: L.rivalName || L.rival || '', formation: L.rivalForm || '',
      players: L.rivalPlayers.map(p => { const cc = parseCards(p.cards); return { name: p.name, dorsal: p.dorsal, pos: p.pos, goals: toInt(p.goals), y: cc.y, r: cc.r, ...splitNote(p.note, false) }; }) },
    clock: { phase: 'pre' }, events: [], mvp: {},
    texts: { plan: L.plan_t, cron1: L.cron1, cron2: L.cron2, obs: L.obs_t, pos: L.pos_t || '', mej: L.mej_t || '' },
    vals: { ...(L.vals || {}) },
    ov: {}, imp: null, savedAt: null, dirty: false, seq: 1,
  };
  for (const p of L.players) if (!p.blank) m.roster.push({ id: pkey(p.name, p.dorsal), name: p.name, dorsal: p.dorsal, extra: false });
  // Jugado = hay resultado o estadísticas. Con solo convocatoria/once guardados, el partido aún no se ha jugado.
  const hasStats = L.players.some(p => p.min || p.g || p.a || p.gp || p.ta || p.tr || p.mvp);
  const played = !!L.final || hasStats;
  if (!played) {
    const slots0 = FORMATIONS[m.formation];
    for (const p of L.players) {
      if (p.blank || !(p.tit || p.sup)) continue;
      const id = pkey(p.name, p.dorsal);
      m.called[id] = true; if (p.cap) m.captain = id;
      if (p.tit) { const s = toInt(p.pos.split(/\s+/)[0]); if (slots0[s] && !m.lineup[s]) m.lineup[s] = id; }
    }
  }
  if (played) {
    m.imp = { score: { h1: L.h1, h2: L.h2, final: L.final }, goals: L.goals };
    m.clock.phase = 'end';
    m.finalized = !!L.final; // con resultado en el Excel: jornada finalizada
    const slots = FORMATIONS[m.formation];
    for (const p of L.players) {
      if (p.blank || !(p.tit || p.sup)) continue;
      const id = pkey(p.name, p.dorsal);
      m.called[id] = true;
      if (p.mvp) m.mvp[id] = true;
      if (p.cap) m.captain = id;
      m.ov[id] = { min: p.min, pos: p.pos, g: p.g, a: p.a, gp: p.gp, ta: p.ta, tr: p.tr };
      if (p.tit) { const s = toInt(p.pos.split(/\s+/)[0]); if (slots[s] && !m.lineup[s]) m.lineup[s] = id; }
    }
  }
  return m;
}

// ---- Minutos y estadísticas a partir de los eventos ----
function eff(min, half, H) { min = +min || 0; return half === 1 ? Math.max(0, Math.min(min, H)) : Math.max(H, Math.min(min, 2 * H)); }
function fmtMin(min, half, H) { min = +min || 0; const cap = half === 1 ? H : 2 * H; return min > cap ? `${cap}+${min - cap}` : String(min); }
function clockMinute(clock, H, now = Date.now()) {
  // minuto por el que vamos: con 11:53 en el reloj es el 11
  if (clock.phase === 'h1') return Math.floor((now - clock.h1Start) / 60000);
  if (clock.phase === 'h2') return H + Math.floor((now - clock.h2Start) / 60000);
  if (clock.phase === 'ht') return H;
  if (clock.phase === 'end') return 2 * H;
  return 1;
}
function clockHalf(clock) { return clock.phase === 'h2' || clock.phase === 'end' ? 2 : 1; }
function sortedEvents(m) { return [...m.events].sort((a, b) => a.half - b.half || a.min - b.min || a.seq - b.seq); }

// Posición contabilizada: la jugadora tiene que estar al menos este tiempo en ella (evita huecos «fantasma» al reorganizar)
const MIN_POS_MS = 30000;
function compute(m, H, now = Date.now()) {
  const P = {};
  const called = m.roster.filter(p => m.called[p.id]).map(p => p.id);
  for (const id of called) P[id] = { tit: false, sup: false, min: 0, stints: [], g: 0, a: 0, gp: 0, y: 0, r: 0, on: false, inAt: 0, out: false, expelled: false, leftAt: null };
  const field = {};
  const kickTs = m.clock.h1Start || null;
  // tramos en cada posición: {slot, ts, min, endTs, endMin}
  const open = (id, slot, ts, min) => P[id].stints.push({ slot: +slot, ts: ts ?? null, min, endTs: undefined, endMin: undefined });
  const close = (id, ts, min) => { const s = P[id] && P[id].stints[P[id].stints.length - 1]; if (s && s.endMin === undefined) { s.endTs = ts ?? null; s.endMin = min; } };
  for (const [slot, id] of Object.entries(m.lineup)) if (P[id]) { field[slot] = id; P[id].tit = true; P[id].on = true; P[id].inAt = 0; open(id, slot, kickTs, 0); }
  for (const id of called) if (!P[id].tit) P[id].sup = true;
  const gf = [0, 0], gc = [0, 0];
  const slotOf = id => Object.keys(field).find(s => field[s] === id);
  let curTs = null;
  const leave = (id, at) => { const p = P[id]; if (!p || !p.on) return; p.min += Math.max(0, at - p.inAt); p.on = false; p.leftAt = at; close(id, curTs, at); const s = slotOf(id); if (s) delete field[s]; };
  const ph = m.clock.phase;
  const live = ph === 'h1' || ph === 'h2';
  // sin empezar el directo no hay minutos: se cuentan desde que se pulsa «Empezar 1ª parte»
  let end = live ? eff(clockMinute(m.clock, H, now), ph === 'h1' ? 1 : 2, H) : ph === 'pre' ? 0 : ph === 'ht' ? H : 2 * H;
  if (live || ph === 'ht') for (const e of m.events) end = Math.max(end, eff(e.min, e.half, H));
  for (const e of sortedEvents(m)) {
    const at = eff(e.min, e.half, H);
    curTs = e.ts || null;
    if (e.t === 'goal') { gf[e.half - 1]++; if (P[e.scorer]) P[e.scorer].g++; if (P[e.assist]) P[e.assist].a++; }
    else if (e.t === 'rgoal') { gc[e.half - 1]++; if (P[e.og]) P[e.og].gp++; }
    else if (e.t === 'card' && P[e.pid]) {
      const p = P[e.pid];
      if (e.color === 'Y') { p.y++; if (p.y === 2) { p.expelled = true; leave(e.pid, at); } }
      else { p.r++; p.expelled = true; leave(e.pid, at); }
    }
    else if (e.t === 'sub' && P[e.out] && P[e.in]) {
      // cambios volantes: una jugadora que ya salió puede volver a entrar
      const s = slotOf(e.out); if (!s || P[e.in].on || P[e.in].expelled) continue;
      leave(e.out, at); P[e.out].out = true;
      field[s] = e.in; P[e.in].on = true; P[e.in].inAt = at; open(e.in, s, curTs, at);
    }
    else if (e.t === 'out' && P[e.pid]) { leave(e.pid, at); P[e.pid].out = true; } // sale sin cambio (a respirar)
    else if (e.t === 'in' && P[e.pid]) { // entra a un hueco libre
      const s = String(e.slot); if (field[s] || P[e.pid].on || P[e.pid].expelled) continue;
      field[s] = e.pid; P[e.pid].on = true; P[e.pid].inAt = at; open(e.pid, s, curTs, at);
    }
    else if (e.t === 'move' && P[e.pid]) {
      const from = slotOf(e.pid); if (!from || String(from) === String(e.slot)) continue;
      const other = field[e.slot];
      field[e.slot] = e.pid; close(e.pid, curTs, at); open(e.pid, e.slot, curTs, at);
      if (other) { field[from] = other; close(other, curTs, at); open(other, from, curTs, at); } else delete field[from];
    }
  }
  const onField = { ...field };
  const endTs = ph === 'end' ? (m.clock.h2End || null) : live ? now : null;
  for (const id of called) if (P[id].on) { P[id].min += Math.max(0, end - P[id].inAt); close(id, endTs, end); }
  for (const id of called) {
    const p = P[id];
    // duración de cada tramo: por la hora real si la hay; si no, por los minutos
    const dur = s => (s.ts != null && s.endTs != null) ? s.endTs - s.ts : (s.endMin === undefined ? Infinity : (s.endMin - s.min) * 60000);
    let keep = p.stints.filter(s => dur(s) >= MIN_POS_MS);
    if (!keep.length && p.stints.length) keep = [p.stints.reduce((a, b) => (dur(b) > dur(a) ? b : a))];
    const d = [];
    for (const s of keep) if (!d.includes(s.slot)) d.push(s.slot); // sin repetir posiciones
    p.pos = d; p.posStr = d.join(' ');
    p.ta = p.y; p.tr = p.r + (p.y >= 2 && p.r === 0 ? 1 : 0);
  }
  return { P, field: onField, gf, gc, end };
}

function hasGoalEvents(m) { return m.events.some(e => e.t === 'goal' || e.t === 'rgoal'); }
// away = jugamos fuera: en el Excel el resultado va como local - visitante
function scoreStrings(m, comp, away = false) {
  if (hasGoalEvents(m) || (!m.imp && m.clock.phase !== 'pre')) {
    const s = (a, b) => (away ? `${b} - ${a}` : `${a} - ${b}`);
    return { h1: s(comp.gf[0], comp.gc[0]), h2: s(comp.gf[1], comp.gc[1]), final: s(comp.gf[0] + comp.gf[1], comp.gc[0] + comp.gc[1]), computed: true };
  }
  if (m.imp) return { ...m.imp.score, computed: false };
  return { h1: '', h2: '', final: '', computed: false };
}

const STAT_FIELDS = ['min', 'pos', 'g', 'a', 'gp', 'ta', 'tr'];
function finalStats(m, comp, id) {
  const c = comp.P[id];
  if (!c) return { tit: false, sup: false, min: '', pos: '', g: '', a: '', mvp: false, gp: '', ta: '', tr: '', cap: false, called: false };
  const ov = m.ov[id] || {};
  const z = n => (n ? n : '');
  const comp1 = { min: c.min > 0 ? c.min : '', pos: c.posStr, g: z(c.g), a: z(c.a), gp: z(c.gp), ta: z(c.ta), tr: z(c.tr) };
  const out = { tit: c.tit, sup: c.sup, mvp: !!m.mvp[id], cap: m.captain === id, called: true };
  for (const f of STAT_FIELDS) out[f] = f in ov ? ov[f] : comp1[f];
  return out;
}
function playerRowValues(p, st) {
  return [p.name, toCell(p.dorsal), st.tit, st.sup, toCell(st.min), toCell(st.pos), toCell(st.g), toCell(st.a), st.mvp, toCell(st.gp), toCell(st.ta), toCell(st.tr), st.cap];
}

function goalRows(m, H) {
  if (!hasGoalEvents(m) && m.imp) return { ours: m.imp.goals.ours, theirs: m.imp.goals.theirs };
  const byId = Object.fromEntries(m.roster.map(p => [p.id, p]));
  const ours = [], theirs = [];
  for (const e of sortedEvents(m)) {
    if (e.t === 'goal') ours.push([fmtMin(e.min, e.half, H), e.scorer ? (byId[e.scorer]?.dorsal ?? '') : '', e.desc || (e.scorer ? '' : 'gol en propia rival')]);
    if (e.t === 'rgoal') theirs.push([fmtMin(e.min, e.half, H), e.og ? '' : (e.dorsal || ''), e.desc || (e.og ? 'gol en propia (' + (byId[e.og]?.name || '') + ')' : '')]);
  }
  return { ours, theirs };
}

// ---- Resumen de una hoja para estadísticas ----
function summarize(sheet, L, away = false) {
  const sc = s => { const m = str(s).match(/(\d+)\s*-\s*(\d+)/); return m ? [+m[1], +m[2]] : null; };
  const players = L.players.filter(p => !p.blank).map(p => ({
    key: up(p.name), name: p.name, dorsal: p.dorsal, tit: p.tit, sup: p.sup, conv: p.tit || p.sup,
    min: toInt(p.min), pos: p.pos, g: toInt(p.g), a: toInt(p.a), mvp: p.mvp, gp: toInt(p.gp), ta: toInt(p.ta), tr: toInt(p.tr), cap: p.cap,
    played: p.tit || toInt(p.min) > 0 || !!p.pos,
  }));
  const fix = x => (x && away ? [x[1], x[0]] : x);
  const final = fix(sc(L.final));
  return {
    id: sheet.id, title: sheet.title, n: sheetShort(sheet.title).n, rival: L.rival || sheetShort(sheet.title).name,
    rkey: rivalKey(sheetShort(sheet.title).name), fecha: L.fecha, h1: fix(sc(L.h1)), h2: fix(sc(L.h2)), final, away,
    played: !!final || players.some(p => p.tit), players, goals: L.goals,
    ourForm: L.ourForm, rivalForm: L.rivalForm, rivalPlayers: L.rivalPlayers, cron1: L.cron1, cron2: L.cron2, obs: L.obs_t,
  };
}

// ---- Posiciones por jugadora (para sugerir el once) ----
// Huecos que son «la misma posición» en el sistema habitual 1.4.2.3.1: 4/5 centrales, 6/8 mediocentros
const SAME_POS = { 4: [5], 5: [4], 6: [8], 8: [6] };
// minutos (y partidos) de cada jugadora en cada hueco. Si una jugadora pasó por varios, los minutos se reparten a partes iguales.
function positionStats(summaries) {
  const out = {};
  for (const g of summaries.filter(s => s.played)) {
    const noMin = !g.players.some(p => p.min > 0);
    for (const p of g.players) {
      const pos = [...new Set(String(p.pos || '').split(/\s+/).filter(x => /^\d+$/.test(x)))];
      if (!pos.length) continue;
      const o = out[p.key] || (out[p.key] = {});
      for (const sl of pos) {
        const x = o[sl] || (o[sl] = { min: 0, games: 0 });
        x.games++; if (!noMin) x.min += (p.min || 0) / pos.length;
      }
    }
  }
  for (const k in out) for (const sl in out[k]) out[k][sl].min = Math.round(out[k][sl].min);
  return out;
}
// puntuación de una jugadora para un hueco: minutos ahí + la mitad de lo jugado en el hueco equivalente (+ partidos, para la J sin minutos)
function slotScore(ps, key, slot) {
  const o = ps[key] || {}; const own = o[slot] || { min: 0, games: 0 };
  let sc = own.min + own.games * 10;
  for (const e of SAME_POS[slot] || []) { const x = o[e]; if (x) sc += (x.min + x.games * 10) / 2; }
  return sc;
}
// Once sugerido: rellena los huecos vacíos con las convocadas que más han jugado en cada posición.
// La portería solo se sugiere a quien ha jugado de portera; si no hay ninguna convocada, se queda vacía.
function suggestLineup(ps, slots, candidates, lineup = {}) {
  const used = new Set(Object.values(lineup)); const res = { ...lineup };
  const free = slots.filter(sl => !res[sl]);
  const pairs = [];
  for (const sl of free) for (const c of candidates) {
    if (used.has(c.id)) continue;
    const sc = slotScore(ps, c.key, +sl); if (sc > 0) pairs.push([sc, sl, c.id]);
  }
  pairs.sort((a, b) => b[0] - a[0]);
  for (const [, sl, id] of pairs) { if (res[sl] || used.has(id)) continue; res[sl] = id; used.add(id); }
  return res;
}
// Capitanas por turno: después de la última que llevó el brazalete, la siguiente convocada de la lista
// mode 'rot' (rotatorio) o 'jer' (jerarquía: la primera convocada de la lista, siempre)
function nextCaptain(summaries, curN, order, calledKeys, mode = 'rot') {
  const norm = x => noacc(String(x || '').toUpperCase()).trim();
  const ord = order.map(norm).filter(Boolean); const called = new Set(calledKeys.map(norm));
  if (!ord.length) return null;
  let last = -1;
  if (mode === 'jer') { for (let i = 0; i < ord.length; i++) if (called.has(ord[i])) return { key: ord[i], turn: ord[0], skipped: i > 0 }; return null; }
  for (const g of summaries.filter(s => s.played && s.n < curN).sort((a, b) => b.n - a.n)) {
    const c = g.players.find(p => p.cap && ord.includes(norm(p.key)));
    if (c) { last = ord.indexOf(norm(c.key)); break; }
  }
  const start = (last + 1) % ord.length;
  for (let i = 0; i < ord.length; i++) { const k = ord[(start + i) % ord.length]; if (called.has(k)) return { key: k, turn: ord[start], skipped: i > 0 }; }
  return null;
}

function aggregate(summaries) {
  const games = summaries.filter(s => s.played).sort((a, b) => a.n - b.n);
  const team = { pj: 0, w: 0, d: 0, l: 0, gf: 0, gc: 0, pts: 0, cs: 0, gf1: 0, gf2: 0, gc1: 0, gc2: 0, tramosF: [0,0,0,0,0,0], tramosC: [0,0,0,0,0,0] };
  const byP = {};
  let gamesMin = 0;
  for (const g of games) {
    // jornada sin minutos apuntados (p. ej. no se pudieron coger datos): no cuenta para las medias de minutos
    g.noMin = !g.players.some(p => p.min > 0);
    if (!g.noMin) gamesMin++;
    if (g.final) {
      team.pj++; const [a, b] = g.final; team.gf += a; team.gc += b;
      if (a > b) { team.w++; team.pts += 3; } else if (a === b) { team.d++; team.pts += 1; } else team.l++;
      if (b === 0) team.cs++;
    }
    if (g.h1) { team.gf1 += g.h1[0]; team.gc1 += g.h1[1]; }
    if (g.h2) { team.gf2 += g.h2[0]; team.gc2 += g.h2[1]; }
    const tramo = mm => { const n = parseInt(String(mm), 10); if (isNaN(n)) return -1; const base = String(mm).includes('+') ? n : n; return Math.min(5, Math.floor((Math.max(1, base) - 1) / 15)); };
    for (const r of g.goals.ours) { const t = tramo(r[0]); if (t >= 0) team.tramosF[t]++; }
    for (const r of g.goals.theirs) { const t = tramo(r[0]); if (t >= 0) team.tramosC[t]++; }
    for (const p of g.players) {
      const o = byP[p.key] || (byP[p.key] = { key: p.key, name: p.name, dorsal: p.dorsal, conv: 0, pj: 0, tit: 0, min: 0, g: 0, a: 0, mvp: 0, gp: 0, ta: 0, tr: 0, cap: 0, convMin: 0, games: [] });
      o.dorsal = p.dorsal;
      if (p.conv && !g.noMin) o.convMin++;
      if (p.conv) o.conv++; if (p.played) o.pj++; if (p.tit) o.tit++;
      o.min += p.min; o.g += p.g; o.a += p.a; o.mvp += p.mvp ? 1 : 0; o.gp += p.gp; o.ta += p.ta; o.tr += p.tr; o.cap += p.cap ? 1 : 0;
      o.games.push({ n: g.n, rival: g.rival, noMin: g.noMin, ...p });
    }
  }
  return { games, team, gamesMin, players: Object.values(byP) };
}

if (typeof module !== 'undefined') module.exports = { FORMATIONS, fSize, VAL_FIELDS, positionStats, slotScore, suggestLineup, nextCaptain, splitNote, joinNote, parseLayout, matchFromLayout, compute, finalStats, playerRowValues, scoreStrings, goalRows, summarize, aggregate, parseFecha, fmtFecha, guessFormation, rivalKey, fmtMin, eff, pkey };
