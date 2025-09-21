const CACHE_NAME = 'cache-portafolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/eco_blog.html',
  '/music_player.html',
  '/pairs_game.html',
  '/themed_calendar.html',
  '/web_stamps.html',
  '/styles.css',
  '/img/field_lake.jpg',
  '/img/cyber-glacier.webp',
  '/img/DORFic.webp',
  '/img/exo.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
