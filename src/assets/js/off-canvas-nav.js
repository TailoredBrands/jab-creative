//Off-canvas
$('#menuIcon').on('click', function(){
  $('.inner-wrap').toggleClass('is-active');
  $('.off-canvas-wrap').toggleClass('is-active');
});

$('#suitMenu').on('click', function(){
  $('#suitSubMenu').toggleClass('is-active');
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