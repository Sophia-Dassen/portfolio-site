import PhotoSwipeLightbox from
    'https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

import PhotoSwipeVideoPlugin from 
    './vendor/photoswipe-video-plugin.esm.js';

function isDesktop() {
    return window.matchMedia('(min-width: 900px)').matches;
}

const lightbox = new PhotoSwipeLightbox({

    gallery: 'a[data-pswp-width]',
    children: '',

    initialZoomLevel: (zoomLevelObject) => {

        if (isDesktop()) {
            return zoomLevelObject.fit * 0.85;
        }

        return zoomLevelObject.fit;
    },

    pswpModule: () =>
    import('https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.min.js')

});

const videoPlugin = new PhotoSwipeVideoPlugin(lightbox, {
    // options if needed
});

lightbox.init();

