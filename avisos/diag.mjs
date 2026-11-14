// Diagnóstico temporal: ¿qué responde la federación desde los servidores de GitHub?
import { configured, writeRange } from './lib.mjs';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const tests = [
  ['ffcv min', 'https://ffcv.es/competiciones/api/filtros/jornadas_fetch.php?cod_grupo=905431660', {}],
  ['ffcv full', 'https://ffcv.es/competiciones/api/filtros/jornadas_fetch.php?cod_grupo=905431660', { 'User-Agent': UA, Accept: '*/*', 'Accept-Language': 'es-ES,es;q=0.9', Referer: 'https://ffcv.es/competiciones/?view=partidos', 'Sec-Fetch-Site': 'same-origin', 'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Dest': 'empty', 'sec-ch-ua': '"Chromium";v="130"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"macOS"' }],
  ['ffcv home', 'https://ffcv.es/competiciones/', { 'User-Agent': UA }],
  ['isquad', 'https://resultadosffcv.isquad.es/clasificacion.php?id_temp=22&id_modalidad=33345&id_competicion=905431657&id_torneo=905431660', { 'User-Agent': UA }],
  ['isquad home', 'https://resultadosffcv.isquad.es/', { 'User-Agent': UA }],
];
const out = [];
for (const [n, u, h] of tests) {
  try { const r = await fetch(u, { headers: h }); const t = await r.text(); out.push(`${n}: ${r.status} ${r.headers.get('server') || ''} ${t.slice(0, 80).replace(/\s+/g, ' ')}`); }
  catch (e) { out.push(`${n}: ERR ${e.message}`); }
}
console.log(out.join('\n'));
if (configured()) await writeRange("'FFCV'!N2:N6", out.map(x => [x.slice(0, 300)]));
