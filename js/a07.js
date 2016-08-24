// http://vegas.jaysalvat.com/documentation/settings/
$(document).ready( function() {
    //vegas
    $('body').vegas({
        transition: 'zoomOut2',
        delay: 8000,
        shuffle: true,
        slides: [
            { src: 'img/a07_bg01.jpg' },
            { src: 'img/a07_bg02.jpg' },
            { src: 'img/a07_bg03.jpg' },
            { src: 'img/a07_bg04.jpg' },
            { src: 'img/a07_bg05.jpg' }
        ]
    });
});