const CACHE_NAME = 'credit-calculator-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  'logo192.jpg',
  'logo512.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
