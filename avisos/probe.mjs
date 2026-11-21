// Diagnóstico temporal: de qué servidor salen los escudos en la web de la federación
import { HEADERS } from './ffcvhttp.mjs';
const H = { ...HEADERS, Accept: 'text/html,*/*', 'Sec-Fetch-Dest': 'document', 'Sec-Fetch-Mode': 'navigate' };
const page = await (await fetch('https://ffcv.es/competiciones/?view=clasificacion', { headers: H })).text();
const scripts = [...page.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => new URL(m[1], 'https://ffcv.es/competiciones/').href);
console.log('SCRIPTS', scripts.join(' '));
for (const name of ['toEscudo', 'withBase', 'fixLogo', 'toImgSrc']) {
  let i = -1; const re = new RegExp(`(function\\s+${name}\\s*\\(|(const|let|var)\\s+${name}\\s*=)`, 'g'); let m;
  while ((m = re.exec(page))) console.log('DEF', name, '::', page.slice(m.index, m.index + 600).replace(/\s+/g, ' '));
}
for (const m of page.matchAll(/https?:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/[a-z0-9_\/.-]*)?/gi)) if (!/google|gstatic|w3\.org|jsdelivr|cdn/.test(m[0])) console.log('URL', m[0]);
for (const s of scripts.filter(u => /ffcv|competic/.test(u))) {
  try { const t = await (await fetch(s, { headers: H })).text(); for (const m of t.matchAll(/.{0,160}(url_img|escudo|pnfg|pimg|IMG_|imgBase|baseImg).{0,160}/g)) console.log('JS', s.split('/').pop(), '::', m[0]); } catch (e) { console.log('ERR', s, e.message); }
}
