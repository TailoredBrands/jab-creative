$(function() {
  if (window.innerWidth <= 640) {
    var carousel = $('.product-image-small ul').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      useTransform: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.25,
            slidesToScroll: 1
          }
        }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
    });

    //Browse
    var carousel = $('.browsepage-thumbnails ul').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      useTransform: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
    });
  }
})
