if (navigator.serviceWorker.controller) {
    console.log("Active service worker found");
    } else {
        navigator.serviceWorker
        .register("https://thedoggybrad.github.io/2048ontheweb/sw.js"), {
        scope: "./"
        })
        .then(function (reg) {
        console.log("Service worker  registered);
        });
    }
}
