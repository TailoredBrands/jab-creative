//When clicking the custom dropdown, add the class ".is-active" to open it up.
$('#sizeDropdownList').on('click', function() {
  $('#sizeDropdownList').toggleClass('is-active');
});

$('#dropdown-ship-address-1').on('click', function() {
  $('#dropdown-ship-address-dropdown-1').toggleClass('is-active');
});

$('#dropdown-ship-address-2').on('click', function() {
  $('#dropdown-ship-address-dropdown-2').toggleClass('is-active');
});

//When clicking an item within the custom PDP dropdown, 
//replace the placeholder text with what you clicked on.
$('.dropdown-item').on('click', function() {
  var myvar = $(this).text();
  console.log(myvar);
  $('.selected-item').text(myvar);
  $('.selected-item').removeClass('dropdown-placeholder');
});