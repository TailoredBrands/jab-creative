$(document).foundation({
  accordion: {
    // specify the class used for accordion panels
    content_class: 'content',
    // specify the class used for active (or open) accordion panels
    active_class: 'active',
    // allow multiple accordion panels to be active at the same time
    multi_expand: true,
    // allow accordion panels to be closed by clicking on their headers
    // setting to false only closes accordion panels when another is opened
    toggleable: true
  }
});

//Toggle Sav
$('.save-look').click(function() {
  $('.save-icon.hollow').toggleClass('is-hidden');
  $('.save-icon.fill').toggleClass('is-hidden');
});


// Show and hide more filters in product off canvas
$('#search-icon').click(function() {
  $('.search-tool').slideToggle(500);
  $('#search-icon').toggleClass("is-active");
});

// Show and hide search bar
$('.accordion.more-filters').hide(0);
$('#add-more-filters').click(function() {
  $('.accordion.more-filters').show(0);
  $(this).hide(0);
});

// off canvas nav interaction
$('#global-tab-mobile-trigger-shop').on('click', function() {
  $('#global-tab-mobile-trigger-shop').addClass('active');
  $('#global-tab-mobile-trigger-rent').removeClass('active');
  $('#global-tab-mobile-trigger-advice').removeClass('active');
  $('#global-tab-mobile-shop').removeClass('hide');
  $('#global-tab-mobile-rent').addClass('hide');
  $('#global-tab-mobile-advice').addClass('hide');
});

$('#global-tab-mobile-trigger-rent').on('click', function() {
  $('#global-tab-mobile-trigger-shop').removeClass('active');
  $('#global-tab-mobile-trigger-rent').addClass('active');
  $('#global-tab-mobile-trigger-advice').removeClass('active');
  $('#global-tab-mobile-shop').addClass('hide');
  $('#global-tab-mobile-rent').removeClass('hide');
  $('#global-tab-mobile-advice').addClass('hide');
});

$('#global-tab-mobile-trigger-advice').on('click', function() {
  $('#global-tab-mobile-trigger-shop').removeClass('active');
  $('#global-tab-mobile-trigger-rent').removeClass('active');
  $('#global-tab-mobile-trigger-advice').addClass('active');
  $('#global-tab-mobile-shop').addClass('hide');
  $('#global-tab-mobile-rent').addClass('hide');
  $('#global-tab-mobile-advice').removeClass('hide');
});

$('#mobile-nav-trigger-suits').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-suits').show('hide');
});

$('#mobile-nav-trigger-shoes').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-shoes').show('hide');
});

$('#mobile-nav-trigger-accessories').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-accessories').show('hide');
});

$('#mobile-nav-trigger-bigtall').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-bigtall').show('hide');
});

$('#mobile-nav-trigger-collections').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-collections').show('hide');
});

$('#mobile-nav-trigger-outlet').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-outlet').show('hide');
});

$('#mobile-nav-trigger-sale').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $('.left-off-canvas-menu .main-nav').hide('hide');
  $('#secondary-nav-sale').show('hide');
});

$('.back-trigger').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  $(this).parent().parent().hide('hide');
  $('.left-off-canvas-menu .main-nav').show('hide');
});


//See more colors interaction
$('#pdpSeeMore').on('click', function() {
  $('.secondary-colors').toggleClass('is-hidden');
  $('.less').toggleClass('is-hidden');
  $('.more').toggleClass('is-active');
});

$('#quickViewThumb').hover(function(){
  $('#quickViewDemo').toggleClass('is-active');
});


// pdp add fun

$('#add-pants-trigger').on('click', function() {
  $('#add-pants-check').prop("checked", !$('#add-pants-check').prop("checked"));
});

$('#add-traveler-trigger').on('click', function() {
  $('#add-traveler-check').prop("checked", !$('#add-traveler-check').prop("checked"));
});