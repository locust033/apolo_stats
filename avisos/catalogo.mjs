// Catálogo de la federación para «Añadir equipo» en la app: competiciones → grupos → equipos de la temporada.
// Se guarda en data/ffcv/catalogo.json (lo sirve GitHub Pages) y se rehace una vez por semana.
import fs from 'node:fs';
import { get, pool } from './ffcvhttp.mjs';
const T = process.env.FFCV_TEMP || '22';
const FILE = 'data/ffcv/catalogo.json';
const MAX_AGE_D = 7;
try { const j = JSON.parse(fs.readFileSync(FILE, 'utf8')); if (process.env.FORCE !== '1' && (Date.now() - Date.parse(j.at)) / 864e5 < MAX_AGE_D) { console.log('Catálogo al día.'); process.exit(0); } } catch (e) {}
const c = await get(`api/filtros/competiciones_fetch.php?temporada=${T}`);
const comps = (c.competiciones || []).map(x => ({ c: String(x.codigo), n: String(x.nombre || '').trim(), cat: String(x.NombreCategoria || '').trim(), gc: String(x.nombre_grupo_categoria || '').trim(), juego: String(x.TipoJuego || ''), min: +x.minutos_juego || 0, partes: +x.numero_partes || 2 }));
let errs = 0;
await pool(comps, 3, async comp => {
  try {
    const g = await get(`api/filtros/grupos_fetch.php?cod_competicion=${comp.c}`);
    comp.groups = await pool((g.grupos || []).map(x => ({ g: String(x.codigo), n: String(x.nombre || '').trim() })), 2, async gr => {
      try {
        const cl = await get(`api/clasificaciones/clasificaciones_ajax.php?cod_grupo=${gr.g}&cod_jornada=1`);
        gr.teams = (cl.clasificacion || []).map(t => [String(t.codequipo), String(t.nombre).trim()]);
        if (!gr.teams.length) { // sin clasificación (copas, fases…): los equipos de la 1ª jornada
          const r = await get(`api/partidos/resultados_por_grupo_jornada_data.php?cod_temporada=${T}&cod_competicion=${comp.c}&cod_grupo=${gr.g}&cod_jornada=1`);
          const m = new Map(); for (const p of r.partidos || []) { m.set(String(p.cod_equipo_local), p.local); m.set(String(p.cod_equipo_visitante), p.visitante); }
          gr.teams = [...m].filter(([k, n]) => k && k !== '0' && !/descansa/i.test(n)).map(([k, n]) => [k, String(n).trim()]);
        }
      } catch (e) { gr.teams = []; errs++; }
      return gr;
    });
  } catch (e) { comp.groups = []; errs++; }
});
const out = { at: new Date().toISOString(), t: T, comps: comps.filter(x => x.groups && x.groups.some(g => g.teams.length)) };
fs.mkdirSync('data/ffcv', { recursive: true });
fs.writeFileSync(FILE, JSON.stringify(out));
console.log(`Catálogo (${errs} errores): ${out.comps.length} de ${comps.length} competiciones, ${out.comps.reduce((a, x) => a + x.groups.length, 0)} grupos, ${out.comps.reduce((a, x) => a + x.groups.reduce((b, g) => b + g.teams.length, 0), 0)} equipos.`);
