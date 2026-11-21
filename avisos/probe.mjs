// Diagnóstico temporal: de qué servidor salen los escudos en la web de la federación
import { HEADERS } from './ffcvhttp.mjs';
const H = { ...HEADERS, Accept: 'text/html,*/*', 'Sec-Fetch-Dest': 'document', 'Sec-Fetch-Mode': 'navigate' };
const page = await (await fetch('https://ffcv.es/competiciones/?view=clasificacion', { headers: H })).text();
const scripts = [...page.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => new URL(m[1], 'https://ffcv.es/competiciones/').href);
console.log('SCRIPTS', scripts.join(' '));
for (const m of page.matchAll(/.{0,120}(pimg|url_img|escudo|pnfg).{0,120}/g)) console.log('PAGE', m[0]);
for (const s of scripts.filter(u => /ffcv|competic/.test(u))) {
  try { const t = await (await fetch(s, { headers: H })).text(); for (const m of t.matchAll(/.{0,160}(url_img|escudo|pnfg|pimg|IMG_|imgBase|baseImg).{0,160}/g)) console.log('JS', s.split('/').pop(), '::', m[0]); } catch (e) { console.log('ERR', s, e.message); }
}
