// Funciona sin cobertura: la app se guarda en el móvil; la página se intenta actualizar primero por la red.
const VERSION = 'apolo-v5';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.hostname.endsWith('googleapis.com') && !u.hostname.startsWith('fonts')) return; // datos de Google Sheets: siempre en directo
  if (u.hostname === 'accounts.google.com') return;
  if (e.request.mode === 'navigate' || u.pathname.endsWith('/index.html')) {
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERSION).then(ca => ca.put('./index.html', c)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(VERSION).then(ca => ca.put(e.request, c)); } return r; })));
});
