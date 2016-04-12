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

$('#checkoutGuest').click(function() {
  $('#guestInputs').toggleClass('is-active');
});

//Text me cta for payment section
$('.text-me-cta').click(function(){
  $('.text-me-checkbox').attr('checked', 'checked');
});