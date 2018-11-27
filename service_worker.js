self.addEventListener('install', function(event) {
  console.log('installing *thirty-fifth* SW');
  event.waitUntil(
    caches.open('reviews-cache-v6').then(function (cache) {
cache.addAll([
  '/',
  'css/detail-page-styles.css',
  'css/main-page-styles.css',
  'css/shared-styles.css',
  'data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  'js/dbhelper.js',
  'js/main.js',
  'js/restaurant_info.js'
])  }))
});
self.addEventListener('activate', function(event) {
  console.log('activating *thirty-fifth* SW');
});

console.log(caches.match);

self.addEventListener('fetch', function(event) {
console.log(event.request);
caches.match(event.request).then(function (response) {
  if(response) return response;
  return fetch(event.request);
});
});
