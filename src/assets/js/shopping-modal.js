//Edit modal
$('#shoppingEdit, #shoppingBagEditModalClose').click(function() {
  $('.bag-edit-modal').toggleClass("is-active");
  $('.bag-edit-title').toggleClass("is-active");
  $('.edit-close').toggleClass("is-active");
  $('.bag-edit-cta').toggleClass("is-active");

  //Fading
  $('body').toggleClass("is-scroll-locked");
  $('.shopping-bag').toggleClass("is-faded");
  $('.shopping-bag-recommendations').toggleClass("is-faded");
});

// //Sign in to Checkout
$('#signIn, #sign-in-close').click(function() {
  $('.bag-sign-in').toggleClass("is-active");
  $('.bag-sign-in-cta').toggleClass("is-active");

  //Fading
  $('body').toggleClass("is-scroll-locked");
  $('.shopping-bag').toggleClass("is-faded");
  $('.shopping-bag-recommendations').toggleClass("is-faded");
});

// Forgot Panel
$('#bagForgotPassword, #forgotPasswordClose').click(function() {
  //toggles the sign in panel
  $('.bag-sign-in').toggleClass("is-active");
  $('.bag-sign-in-cta').toggleClass("is-active");

  //toggles the forgot panel
  $('.bag-forgot').toggleClass("is-active");
  $('.bag-forgot-cta').toggleClass("is-active");

});

