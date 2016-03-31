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
