// Perform install steps
let CACHE_NAME = 'my-cache';
let urlsToCache = [
  'https://thedoggybrad.github.io/2048ontheweb/index.html',
  'https://thedoggybrad.github.io/2048ontheweb/favicon.ico',
  'https://thedoggybrad.github.io/2048ontheweb/style/main.css',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/clear-sans.cs',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Bold-webfont.eot',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Bold-webfont.svg',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Bold-webfont.woff',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Light-webfont.eot',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Light-webfont.svg',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Light-webfont.woff',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Regular-webfont.eot',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Regular-webfont.svg',
  'https://thedoggybrad.github.io/2048ontheweb/style/fonts/ClearSans-Regular-webfont.woff',
  'https://thedoggybrad.github.io/2048ontheweb/js/animframe_polyfill.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/application.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/bind_polyfill.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/classlist_polyfill.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/game_manager.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/grid.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/html_actuator.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/keyboard_input_manager.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/local_storage_manager.js',
  'https://thedoggybrad.github.io/2048ontheweb/js/tile.js',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-icon.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-icon_96.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-icon_144.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-startup-image-640x920.png',
  'https://thedoggybrad.github.io/2048ontheweb/meta/apple-touch-startup-image-640x1096.png'

    ];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});
