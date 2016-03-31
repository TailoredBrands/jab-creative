//Edit modal
$('#shoppingEdit, #shoppingBagEditModalClose').click(function() {
  $('.shopping-bag-edit-modal').toggleClass("is-active");
  $('.shopping-bag-modal-title').toggleClass("is-active");
  $('.edit-close').toggleClass("is-active");
  $('.shopping-edit-update-cta').toggleClass("is-active");

  //Fading
  $('body').toggleClass("is-scroll-locked");
  $('.shopping-bag').toggleClass("is-faded");
  $('.shopping-bag-recommendations').toggleClass("is-faded");
});



// //Sign in to Checkout
$('#signIn, #sign-in-close').click(function() {
  $('.shopping-bag-sign-in').toggleClass("is-active");
  $('.shopping-bag-sign-in-cta').toggleClass("is-active");

  //Fading
  $('body').toggleClass("is-scroll-locked");
  $('.shopping-bag').toggleClass("is-faded");
  $('.shopping-bag-recommendations').toggleClass("is-faded");
});
