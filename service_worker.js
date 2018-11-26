self.addEventListener('install', function(event) {
  console.log('installing *twentieth* SW');
});
self.addEventListener('activate', function(event) {
  console.log('activating *twentieth* SW');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response('Lts change the world one step at a time')
  )
});
