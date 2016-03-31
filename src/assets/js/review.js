$(document).ready(function() {
  $('.checkout-tabs').on('toggled', function (event, tab) {
    if( $('.panel3').hasClass('active') ) {
      $('.review-cta').addClass('is-active');
    }
    else {  
      $('.review-cta').removeClass('is-active');
    }

   });
});

console.log(window.innerWidth);


if($(window.innerWidth) > 640) {
  $(window).scroll(function(){

    if($('.order-summary').length > 0 ) {
      var myScrollPosition = $(this).scrollTop();
      var windowHeight = $(window).height();
      var orderSummaryHeight = $('.order-summary').outerHeight();

      var promoTop  = $('.promotion-callout-top').outerHeight();
      var navMain = $('nav.main').outerHeight();

      if (myScrollPosition > (promoTop + navMain)) {
        $('.order-summary').addClass("order-summary-sticky");

      }
      else {
        $('.order-summary').removeClass("order-summary-sticky");
      }
    }
  });
}

