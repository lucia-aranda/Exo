const CACHE_NAME = 'cache-portafolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/eco_blog.html',
  '/music_player.html',
  '/pairs_game.html',
  '/pairs_game_acnh.html',
  '/themed_calendar.html',
  '/themed_calendar_acnh.html',
  '/web_stamps.html',
  '/css/styles.css',
  '/css/styles_calendar.css',
  '/css/styles_calendar_acnh.css',
  '/css/styles_pairs.css',
  '/css/styles_pairs_acnh.css',
  '/css/styles_player.css',
  '/img/field_lake.jpg',
  '/img/cyber-glacier.webp',
  '/img/DORFic.webp',
  '/img/exo.png',
  '/img/apple.png', 
  '/img/blue-notebook.png', 
  '/img/colorful-locker.png', 
  '/img/dialog-balloons.png', 
  '/img/full-bin.png', 
  '/img/media-player.png', 
  '/img/movie-player.png', 
  '/img/blue-user.png', 
  '/img/orange.png', 
  '/img/world-headphones.png', 
  '/img/green-user.png', 
  '/img/blue-world.png', 
  '/img/clippy.png',
  '/img/acnh_question.png',
  '/img/acnh_wand.png',
  'img/acnh_timer.png',
  'img/acnh_bag.png',
  'img/acnh_cupcake.png',
  'img/acnh_weed.png',
  'img/acnh_carpet.png',
  'img/acnh_water.png',
  'img/acnh_starfragment.png',
  'img/acnh_eggfish.png',
  'img/acnh_summershell.png',
  'img/acnh_maple.png',
  'img/acnh_snowflake.png',
  'img/acnh_acorn.png', 
  'img/acnh_bells.png', 
  'img/acnh_book.png', 
  'img/acnh_branch.webp', 
  'img/acnh_coin.png',
  'img/acnh_fishbait.png', 
  'img/acnh_heartcrystals.webp', 
  'img/acnh_leaf.png', 
  'img/acnh_pinecone.png', 
  'img/acnh-2.webp',
  'img/acnh-3.webp',
  'img/acnh-9.jpg',
  'img/acnh-6.png',
  'img/acnh-7.png',
  'img/acnh-8.jpg',
  'img/acnh-16.webp',
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
