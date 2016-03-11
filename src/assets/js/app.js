$(document).foundation({
  accordion: {
    // specify the class used for accordion panels
    content_class: 'content',
    // specify the class used for active (or open) accordion panels
    active_class: 'active',
    // allow multiple accordion panels to be active at the same time
    multi_expand: true,
    // allow accordion panels to be closed by clicking on their headers
    // setting to false only closes accordion panels when another is opened
    toggleable: true
  }
});

// Show and hide more filters in product off canvas
$('.accordion.more-filters').hide(0);
$('#add-more-filters').click(function() {
  $('.accordion.more-filters').show(0);
  $(this).hide(0);
});

// reinstatiate slick after dom update on styleguide
$('#style-guide-tabs').on('toggled', function (event, tab) {
  $('.collage-slider').resize();
});
$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
  $('.collage-slider-modal').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    useTransform: true
  });
});

$('.collage-slider').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  useTransform: true
});

$('#slick-blog-slider').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  useTransform: true
});

// image-slide-plugin

// var carousel;
// $(document).ready(function () {
//     carousel = $("ul");
//     carousel.itemslide();
// });

//$('.product-feature').slick({
////  centerMode: true,
////  centerPadding: '60px',
//  dots: true,
//  swipe: true,
//  touchMove: true,
//  arrows: false,
//  slidesToShow: 3,
//  slidesToScroll: 1,
//
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
////        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 3,
//        slidesToScroll: 1
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//  ]
//});

// init date picker
$('.fdatepicker').fdatepicker();

// turn off jQuery animation
jQuery.fx.off = true;

// off canvas nav interaction
$('#global-tab-mobile-trigger-shop').on('click', function() {
  $('#global-tab-mobile-trigger-shop').addClass('active');
  $('#global-tab-mobile-trigger-rent').removeClass('active');
  $('#global-tab-mobile-trigger-advice').removeClass('active');
  $('#global-tab-mobile-shop').removeClass('hide');
  $('#global-tab-mobile-rent').addClass('hide');
  $('#global-tab-mobile-advice').addClass('hide');
});

$('#global-tab-mobile-trigger-rent').on('click', function() {
  $('#global-tab-mobile-trigger-shop').removeClass('active');
  $('#global-tab-mobile-trigger-rent').addClass('active');
  $('#global-tab-mobile-trigger-advice').removeClass('active');
  $('#global-tab-mobile-shop').addClass('hide');
  $('#global-tab-mobile-rent').removeClass('hide');
  $('#global-tab-mobile-advice').addClass('hide');
});

$('#global-tab-mobile-trigger-advice').on('click', function() {
  $('#global-tab-mobile-trigger-shop').removeClass('active');
  $('#global-tab-mobile-trigger-rent').removeClass('active');
  $('#global-tab-mobile-trigger-advice').addClass('active');
  $('#global-tab-mobile-shop').addClass('hide');
  $('#global-tab-mobile-rent').addClass('hide');
  $('#global-tab-mobile-advice').removeClass('hide');
});

$('#mobile-nav-trigger-suits').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-suits').show('hide');
});

$('#mobile-nav-trigger-shoes').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-shoes').show('hide');
});

$('#mobile-nav-trigger-accessories').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-accessories').show('hide');
});

$('#mobile-nav-trigger-bigtall').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-bigtall').show('hide');
});

$('#mobile-nav-trigger-collections').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-collections').show('hide');
});

$('#mobile-nav-trigger-outlet').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-outlet').show('hide');
});

$('#mobile-nav-trigger-sale').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-sale').show('hide');
});

$('.back-trigger').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $(this).parent().parent().hide('hide');
  $('.left-off-canvas-menu .main-nav').show('hide');
});

// account form interaction

// $('#assign-to-members-yes').on('click', function() {
//     $('#account-who-else').show();
// });

// $('#assign-to-members-no').on('click', function() {
//     $('#account-who-else').hide();
// });

$('#customize-look-yes').on('click', function() {
  $('#account-what-part').show();
});

$('#customize-look-no').on('click', function() {
  $('#account-what-part').hide();
});

$('ul.member-list li a, ul.customize-list li').on('click', function() {
  $(this).parent().toggleClass('active');
});
$('ul.customize-list li img').on('click', function() {
  $(this).parent().toggleClass('active');
});

// customizer interaction

$('ul.option-select:not(#main-category) img').on('click', function() {
  $('ul.option-select:not(#main-category) li').removeClass('active');
  $(this).parent().addClass('active');
});

$('ul.option-select li span').on('click', function() {
  if (Modernizr.mq('only all and (max-width: 40em)')) {
    if ($(this).attr('data-details')) {
      window.location.href= $(this).data('details');
    }
  }
});

$('#type-drop li, #fit-drop li, #price-drop li, #color-drop ul li, #pattern-drop ul li, .customize-modal ul.type li, .customize-modal ul.colors li, ul#color-mega-drop li, ul#pattern-mega-drop li').on('click', function() {
  $(this).toggleClass('active');
});

$('#clear-all-type').on('click', function() {
  $('#type-drop li, .customize-modal ul.type li').removeClass('active')
});
$('#clear-all-fit').on('click', function() {
  $('#fit-drop li, .customize-modal ul.fit li').removeClass('active')
});
$('#clear-all-price').on('click', function() {
  $('#price-drop li, .customize-modal ul.price li').removeClass('active')
});

$('#clear-all-color').on('click', function() {
  $('#color-drop ul li, .customize-modal ul.colors li').removeClass('active')
});
$('#clear-all-pattern').on('click', function() {
  $('#pattern-drop ul li, .customize-modal ul.patterns li').removeClass('active')
});

if ($('.customize-module').length) {
  if (Modernizr.mq('only all and (min-width: 40.063em)')) {
    $(document).ready(function(){
      $('img.image-zoom').each( function() {
        $(this).wrap('<a class="zoom-image-wrapper" style="display:inline-block;"></a>')
        .css('display', 'block')
        .parent()
        .zoom({
          url: $(this).data('zoom-image'),
          duration: 300,
          callback: function() {
            $(this).on('click', function() {
              $(this).css('display', 'none');
              $('ul.option-select:not(#main-category) li').removeClass('active');
              $(this).parent().parent().toggleClass('active');
            });
          }
        })
      });
    });
  } else {

  }


  var setOptionSelectHeight = function() {
    var desktopPaddingTop = 52;
    var mobilePaddingTop = 20;
    var optionSelectHeight;
    if (Modernizr.mq('only all and (max-width: 40em)')) {
      optionSelectHeight = $(window).height() - $('.sticky-footer').height() - $('.calculate-height').height() - $('.product.header').height() - mobilePaddingTop;
    } else {
      optionSelectHeight = $(window).height() - $('.sticky-footer').height() - $('.calculate-height').height() - desktopPaddingTop;
    }
    $('.customize-module .option-select').height(optionSelectHeight + "px");
  }

  $('.option-select-category a').on('click', function() {
    $('#main-category').hide();
    var optionSelectCategoryId = $(this).data('option-select-id');
    $('#' + optionSelectCategoryId).show();
  });

  if ($('.option-select#main-category').length) {
    $('.option-select:not(#main-category)').hide();
  }

  if (Modernizr.mq('only all and (max-width: 40em)')) {
    $('.option-select:not(#main-category) .swatch-title').text("Details »");
  }

  $('.option-select-back').on('click', function() {
    $(this).parent().hide();
    $('#main-category').show();
  });

  $("body").css({"overflow":"hidden"});

  $(document).ready(function() { setOptionSelectHeight(); });
  // debounce on resize to avoid flicker
  var resizeTimer;
  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      setOptionSelectHeight()
    }, 250);
  });

  // hijack scrollwheel to account for zoomImage plugin overflow hidden blocker
  $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
  $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    event.preventDefault();
    var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    $('.option-select:visible').scrollTop($('.option-select:visible').scrollTop() - (delta / 4));
  });

}

$('.account-edit-interaction').on('click', function() {
  var accountEditId = $(this).data('account-edit-id');
  $(this).parent().parent().parent().parent().hide();
  $('#' + accountEditId).show();
});

$('.account-save-interaction').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  var accountEditId = $(this).parent().parent().parent().attr('id');
  var accountViewId = accountEditId.replace('edit', 'view');
  $('#' + accountEditId).hide();
  $('#' + accountViewId).show();
});

$('.account-remove-interaction').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  var accountEditId = $(this).parent().parent().parent().attr('id');
  var accountViewId = accountEditId.replace('edit', 'view');
  $('#' + accountEditId).hide();
});

$('.group-member input:checkbox').on('change', function() {
  if( $(this).is(':checked') ) {
    $('#invite-message').show();
  } else if ( $('.group-member input:checkbox:checked').length <= 0 ) {
    $('#invite-message').hide();
  }
});

$('#all').on('change', function() {
  if( $(this).is(':checked') ) {
    $('.group-member input:checkbox').prop('checked', true);
    $('#invite-message').show();
  } else {
    $('.group-member input:checkbox').prop('checked', false);
    $('#invite-message').hide();

  }
});

// misc interaction

$('.filter-tag a.close').on('click', function() {
  $(this).parent().hide();
});

$('#shop-nav-search-trigger').on({
  click: function() {
    $('.search-bar-input').toggleClass('hide').focus();
  },
  mouseenter: function() {
    $('.search-bar-input').removeClass('hide').focus();
  },
});


// input fields

(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( 'input.input-field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input-filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input-filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input-filled' );
    }
  }

})();
