//When clicking the PDP dropdown, add the class ".is-active" to open it up.
$('.size-dropdown-wrapper').on('click', function() {
  $('.custom-dropdown').toggleClass('is-active');
});

//When clicking an item within the custom PDP dropdown, 
//replace the placeholder text with what you clicked on.
$('.dropdown-item').on('click', function() {
  var myvar = $(this).text();
  console.log(myvar);
  $('.selected-item').text(myvar);
  $('.selected-item').removeClass('dropdown-placeholder');
});