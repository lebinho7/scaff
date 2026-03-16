const CACHE_NAME = 'scaff-v4';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// URLs that should never be cached (Firebase API, Firestore, Auth, etc)
const IGNORED_HOSTS = ['firestore.googleapis.com', 'firebaseinstallations.googleapis.com', 'securetoken.googleapis.com', 'identitytoolkit.googleapis.com'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  
  const url = new URL(e.request.url);
  
  // Ignora requisições de API de terceiros (como Firebase/Firestore)
  if (IGNORED_HOSTS.some(host => url.hostname.includes(host))) {
    return;
  }

  // Network-first com fallback pro cache
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Salva cópia fresca no cache
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => {
        // Em caso de falha (offline), busca a versão salva no cache
        return caches.match(e.request);
      })
  );
});
