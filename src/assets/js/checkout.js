$('#differentStore, #reserveInStore').click(function(){
  $('.store-saved').toggleClass('is-active');
  $('.store-new').toggleClass('is-active');
});

//Change address

$('#changeAddress, #changeAddress2, #saveAddress').click(function(){
  $('#dropdown-ship-address-1').toggleClass('is-active');
  $('#ChangeAddressInputs').toggleClass('is-active');
  $('#changeAddress').toggleClass('is-hidden');
  $('#saveAddress').toggleClass('is-active');
});

//Add card

$('#addCard, #addCard2, #saveCard').click(function(){
  $('#dropdown-payment-card-1').toggleClass('is-active');
  $('#addCardInputs').toggleClass('is-active');
  $('#addCard').toggleClass('is-hidden');
  $('#saveCard').toggleClass('is-active');
});

//Add Billing Address

$('#addBillAddress, #addBillAddress2, #saveBillAddress').click(function(){
  $('#dropdown-billing-address-1').toggleClass('is-active');
  $('#addBillAddressInputs').toggleClass('is-active');
  $('#addBillAddress').toggleClass('is-hidden');
  $('#saveBillAddress').toggleClass('is-active');
});


//Text me cta for payment section
$('.text-me-cta').click(function(){
  $('.text-me-checkbox').attr('checked', 'checked');
});

//Email me cta
$('.email-me-cta').click(function(){
  $('.email-me-checkbox').attr('checked', 'checked');
});

//shoppin bag
$('#signInLarge').click(function(){
  $('#signInCheckoutCTALarge').toggleClass("sign-in-emphasis");
  $('#guestCheckoutCTALarge').toggleClass('sign-in-emphasis');
  $('#guestInputs').toggleClass('is-active');
});

$('#checkoutGuest').click(function() {
  $('#guestInputs').toggleClass('is-active');
  $('#guestCheckoutCTALarge').toggleClass('sign-in-emphasis');
  $('#signInCheckoutCTALarge').toggleClass('sign-in-emphasis');
});
