const CACHE_NAME = 'pilates-studio-v3';
const APP_VERSION = '1.0.3';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
          .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);
  
  if (url.pathname.endsWith('/') || 
      url.pathname.endsWith('index.html') || 
      url.pathname.endsWith('app.js') ||
      url.pathname.endsWith('manifest.json')) {
    
    event.respondWith(
      fetch(event.request).then(function(fetchResponse) {
        if (fetchResponse && fetchResponse.status === 200 && fetchResponse.type === 'basic') {
          var responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return fetchResponse;
      }).catch(function() {
        return caches.match(event.request).then(function(response) {
          return response || caches.match('./index.html');
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(fetchResponse) {
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }
          var responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
          return fetchResponse;
        });
      })
    );
  }
});
