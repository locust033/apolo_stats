// Diagnóstico temporal: campos de escudos en la API de la federación
import { get } from './ffcvhttp.mjs';
const qs = 'cod_temporada=22&cod_competicion=905431657&cod_grupo=905431660';
const r = await get(`api/partidos/resultados_por_grupo_jornada_data.php?${qs}&cod_jornada=1`);
console.log('PARTIDO', JSON.stringify(r.partidos[0]));
const c = await get('api/clasificaciones/clasificaciones_ajax.php?cod_grupo=905431660&cod_jornada=5');
console.log('CLAS', JSON.stringify((c.clasificacion || [])[0]));
const f = await get(`api/partidos/ficha_partido_ajax.php?cod_partido=${r.partidos[0].codacta}`);
console.log('FICHA', JSON.stringify(Object.fromEntries(Object.entries(f).filter(([k, v]) => typeof v !== 'object'))));
