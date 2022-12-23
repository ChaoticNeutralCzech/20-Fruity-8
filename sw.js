// This code executes in its own worker or thread
const urlsToCache = [
  "index.html",
  "favicon.ico",
  "style/main.css",
  "style/fonts/clear-sans.css",
  "style/fonts/ClearSans-Bold-webfont.eot",
  "style/fonts/ClearSans-Bold-webfont.svg",
  "style/fonts/ClearSans-Bold-webfont.woff",
  "style/fonts/ClearSans-Light-webfont.eot",
  "style/fonts/ClearSans-Light-webfont.svg",
  "style/fonts/ClearSans-Light-webfont.woff",
  "style/fonts/ClearSans-Regular-webfont.eot",
  "style/fonts/ClearSans-Regular-webfont.svg",
  "style/fonts/ClearSans-Regular-webfont.woff",
  "js/animframe_polyfill.js",
  "js/application.js",
  "js/bind_polyfill.js",
  "js/classlist_polyfill.js",
  "js/game_manager.js",
  "js/grid.js",
  "js/html_actuator.js",
  "js/keyboard_input_manager.js",
  "js/local_storage_manager.js",
  "js/tile.js",
  "meta/apple-touch-icon.png",
  "meta/apple-touch-icon_96.png",
  "meta/apple-touch-icon_144.png",
  "meta/apple-touch-startup-image-640x920.png",
  "meta/apple-touch-startup-image-640x1096.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(async () => {
        const cache = await caches.open("pwa-assets");
        return cache.addAll(urlsToCache);
    });
});

self.addEventListener("activate", (event) => {
    console.log("Service worker activated");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // It can update the cache to serve updated content on the next request
            return cachedResponse || fetch(event.request);
        })
    );
});
