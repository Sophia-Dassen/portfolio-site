import PhotoSwipeLightbox from
    'https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

import PhotoSwipeVideoPlugin from 
    './vendor/photoswipe-video-plugin.esm.js';

const lightbox = new PhotoSwipeLightbox({

    gallery: 'a[data-pswp-width]',
    children: '',

    pswpModule: () =>
    import('https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.min.js')

});

const videoPlugin = new PhotoSwipeVideoPlugin(lightbox, {
    // options if needed
});

lightbox.init();
