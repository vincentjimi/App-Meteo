const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/img',
    '/css/bootstrap.min.css',
    '/css/style.css',
    '/js/script.js'
];


self.addEventListener('install', evt => {
    // console.log('service worker has been instaled');
    evt.waitUntil(
        // caches the files for offline access
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );

});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    ); 
});

