//Toggles the Order Summary's "Place Order" button
$(document).ready(function() {
  //If a checkout tab is toggled...
  $('.checkout-tabs').on('toggled', function (event, tab) {
    //...and the review tab has the class active...
    if( $('.panel3').hasClass('active') ) {
      //...add is-active to the "Place Order" button!
      $('.review-cta').addClass('is-active');
    }
    else {  
      $('.review-cta').removeClass('is-active');
    }
   });
});

//If you're on larger screen sizes
if(window.innerWidth > 640) {
  //and you scroll
  $(window).scroll(function(){

    //and if order summary exists
    if($('.order-summary').length > 0 ) {
      var myScrollPosition = $(this).scrollTop();
      var promoTop  = $('.promotion-callout-top').outerHeight();
      var navMain = $('nav.main').outerHeight();

      //stick the order summary to the top of screen
      if (myScrollPosition > (promoTop + navMain)) {
        $('.order-summary').addClass("order-summary-sticky");
      }

      else {
        $('.order-summary').removeClass("order-summary-sticky");
      }
    }
  });
}

