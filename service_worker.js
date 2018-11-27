self.addEventListener('install', function(event) {
  console.log('installing *thirty-third* SW');
  event.waitUntil(
    caches.open('reviews-cache-v5').then(function (cache) {
cache.addAll([
  '/',
  'css/detail-page-styles.css',
  'css/main-page-styles.css',
  'css/shared-styles.css',
  'data/restaurants.json',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
  'js/dbhelper.js',
  'js/main.js',
  'js/restaurant_info.js'
])  }))
});
self.addEventListener('activate', function(event) {
  console.log('activating *thirty-third* SW');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch('img/1.jpg')
  );
});
