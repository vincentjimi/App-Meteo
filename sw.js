//https://codelabs.developers.google.com/codelabs/offline/#6 
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('cache-man').then(function(cache) {
        return cache.addAll([
          '/',
          '/img',
          '/index.html',
          '/css/bootstrap.min.css',
          '/css/style.css',
          '/js/script.js'
        ]);
      })
    );
   });
  
  //https://codelabs.developers.google.com/codelabs/offline/#7
  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
    caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
        })
        );
        });
  
  