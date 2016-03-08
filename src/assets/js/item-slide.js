$(function() {
    if (window.innerWidth <= 640) {
        var carousel = $('.product-image-small ul').itemslide({
            parent_width: true
        });
    }
})