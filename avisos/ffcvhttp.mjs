// Peticiones a la web de la federación (con cabeceras de navegador)
export const BASE = 'https://ffcv.es/competiciones/';
// Cabeceras como las de un navegador en la propia web (sin ellas, la FFCV bloquea con «Token de página inválido»)
export const HEADERS = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', Accept: '*/*', 'Accept-Language': 'es-ES,es;q=0.9',
  Referer: 'https://ffcv.es/competiciones/?view=partidos', 'Sec-Fetch-Site': 'same-origin', 'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Dest': 'empty',
  'sec-ch-ua': '"Chromium";v="130"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"macOS"' };

export async function get(path, tries = 3) {
  for (let i = 0; ; i++) {
    try {
      const r = await fetch(BASE + path, { headers: HEADERS });
      const t = await r.text();
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return JSON.parse(t);
    } catch (e) { if (i + 1 >= tries) throw new Error(`FFCV ${path.split('?')[0]}: ${e.message}`); await new Promise(r => setTimeout(r, 1500 * (i + 1))); }
  }
}
export async function pool(items, n, fn) { const out = []; let k = 0; await Promise.all(Array.from({ length: n }, async () => { while (k < items.length) { const i = k++; out[i] = await fn(items[i]); } })); return out; }
