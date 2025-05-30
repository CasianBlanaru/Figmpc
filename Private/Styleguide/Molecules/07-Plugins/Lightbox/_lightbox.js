//
// @https://github.com/biati-digital/glightbox

import GLightbox from 'glightbox';

function lightboxInit() {
    GLightbox({
        selector: '.lightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
        zoomable: false,
        cssEfects: {
            // This are some of the animations included, no need to overwrite
            fade: { in: 'fadeIn', out: 'fadeOut' },
            zoom: { in: 'zoomIn', out: 'zoomOut' },
        },
    });
}

export default {};

export const LightboxInit = lightboxInit;
