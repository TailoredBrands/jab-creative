//Off-canvas
$('#menuIcon').on('click', function(){
  $('.inner-wrap').toggleClass('is-active');
  $('.off-canvas-wrap').toggleClass('is-active');
});

$('#suitMenu').on('click', function(){
  $('#suitSubMenu').toggleClass('is-active');
  $('#suitMenu').toggleClass('is-active');
});

$('.left-off-canvas-toggle').on('click', function() {
  if( $('.off-canvas-wrap').hasClass('move-right')) {
    $('.left-off-canvas-toggle img').attr('src', 'assets/images/jab/mobile/mobile-bar-menu.svg');
  } else {
    $('.left-off-canvas-toggle img').attr('src', 'assets/images/jab/mobile/mobile-menu-close-x.svg');
  }
});


$(function() {   
 $(window).resize(function() {
        //small-screen
        if (window.innerWidth >= 640) {
          $('#suitMenu, #suitSubMenu').hover( function(){
            $('#suitMenu').toggleClass('is-active');
            $('#suitSubMenu').toggleClass('is-active');
          });
        }
        //end small-screen
    }) .resize(); // trigger resize event
})