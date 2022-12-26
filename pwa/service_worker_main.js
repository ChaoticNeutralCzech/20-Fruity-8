'use strict'

const CACHE_NAME = '2048ontheweb';
// The files we want to cache
const resourceList = [
  '/',
  'https://thedoggybrad.github.io/2048ontheweb/index.html',
  'https://thedoggybrad.github.io/2048ontheweb/favicon.ico',
  'https://thedoggybrad.github.io/2048ontheweb/style/main.css',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/clear-sans.css',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Bold-webfont.eot',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Bold-webfont.svg',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Bold-webfont.woff',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Light-webfont.eot',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Light-webfont.svg',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Light-webfont.woff',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Regular-webfont.eot',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Regular-webfont.svg',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Regular-webfont.woff',
  'https://thedoggybrad.github.io/2048ontheweb/game.js',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-icon.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-icon_96.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-icon_144.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-startup-image-640x920.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-startup-image-640x1096.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
