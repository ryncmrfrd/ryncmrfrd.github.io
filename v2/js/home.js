"use strict"

const init = function(){
    new pagination("pagination-wrapper", {
        useHashes: false,
        scrollSpeed: 1000,
        isDevMode: false
    });
    new fitty("#landing-title, #landing-subtitle");
     new particlesJS.load('landing-particles', './js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

}

window.onload = init();