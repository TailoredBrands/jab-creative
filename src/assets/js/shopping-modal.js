$('#shoppingEdit').click(function() {
  $('.shopping-bag-edit-modal').toggleClass("is-active");
  $('.edit-modal-title').toggleClass("is-active");
  $('.edit-modal-close').toggleClass("is-active");
  $('.shopping-edit-update-cta').toggleClass("is-active");

  //Fading
  $('body').toggleClass("is-scroll-locked");
  $('.shopping-bag').toggleClass("is-faded");
  $('.shopping-bag-recommendations').toggleClass("is-faded");
});

$('.edit-modal-close').click(function() {
  $('.shopping-bag-edit-modal').toggleClass("is-active");
  $('.edit-modal-title').toggleClass("is-active");
  $('.edit-modal-close').toggleClass("is-active");
  $('.shopping-edit-update-cta').toggleClass("is-active");

  //Fading
  $('body').toggleClass("is-scroll-locked");
  $('.shopping-bag').toggleClass("is-faded");
  $('.shopping-bag-recommendations').toggleClass("is-faded");
});