$(document).ready(function(){
  $('.slick-slider').slick({
    useTransform: true
  });
});


var carousel = $('#productRecommendationsThree').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  useTransform: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 4.25,
      slidesToScroll: 4
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3.25,
      slidesToScroll: 1
    }
  }
  ]
});


//Interchange and slick need to play nicely!
$('.carouselInterchange').on('replace', function(){

  //if small screen
  if (window.innerWidth <= 640) {
    //pdp
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
          slidesToShow: 1.15,
          slidesToScroll: 1
        }
      }
      ]
    });   
  }
  //end if

  //PDP recommendations
  var carousel = $('#productRecommendations').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    useTransform: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4.25,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.25,
        slidesToScroll: 1
      }
    }
    ]
  });
  //End PDP recommendations

  var carousel = $('#productRecommendationsTwo').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    useTransform: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4.25,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.25,
        slidesToScroll: 1
      }
    }
    ]
  });

  //Browse
});
//End small screens logic

var carousel = $('.browsepage-thumbnails ul').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  useTransform: true
});


//Shopping Bag Recommendation
var carousel = $('#productRecommendationsShopping').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  useTransform: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3.25,
      slidesToScroll: 1
    }
  }
  ]
});
//End Shopping Bag Recommendation

//Shopping Bag Recommendation
var carousel = $('#shoppingBagSaved').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  useTransform: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }
  ]
});
//End Shopping Bag Recommendation


//QuickView Recommendation
var carousel = $('#quickViewRecommendations').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  useTransform: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3.25,
      slidesToScroll: 1
    }
  }
  ]
});
//End QuickView Recommendation

