// Booking Summary Mobile and iPad
if ($(window).width() < 1200) {
  $("#booking-summary").detach().insertAfter("#mobile-hotel-info");
  $('.booking-summary-heading').click(function(){
    $('.booking-summary-data').slideToggle();
    $(this).find('.icon-expand').toggleClass("rotate180");
  });
}
// Mobile detach P3B
if ($(window).width() < 991) {
  $('.rate-name').click(function(){
    $(this).closest('.rate-container').find('.rate-description').detach().insertAfter($(this).closest('.rate-container').find('.rate-name'));
  });
  $(".room-slider").detach().insertAfter(".room-modal-header");
}

// Booking Summary Room Details
$('.booking-summary-room-row').click(function(){
  $(this).closest('.booking-summary-room-row').find('.booking-summary-room-row-expanded').slideToggle();
});

// .Fa rotate P3B
$('.trigger-rotate').click(function(){
  $(this).find('.fa').toggleClass('rotate180');
  $(this).find('i').toggleClass('rotate180');
});

// View Rates P3B
$('.view-rates-btn').click(function(){
  $(this).closest('.room-with-rates-wrapper').find('.rates-wrapper').slideToggle();
  $("html, body").animate({
      scrollTop: $(this).closest('.room-with-rates-wrapper').find('.room-wrapper').offset().top - 10
  }, 'slow');
});
$('.rate-name').click(function(){
  $(this).closest('.rate-container').find('.rate-description').slideToggle();
});
$('.expand-special-request').click(function(){
  $(this).closest('section').find('.special-request-input').slideToggle();
});
$(".view-rates-btn").click(function(){
  $(".icon-chevron-down").toggleClass("icon-chevron-up");
});
$(".plus-minus-icons").click(function(){
  $(".icon-plus-circle").toggleClass("icon-minus-circle");
});

// Init tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.hotel-info-buttons [data-toggle="tab"]').on('click', function () {
  $('#modalTabs').modal('toggle');
  $('#modalTabs').find('[data-toggle="tab"]').removeClass('active');
  $('.nav-tab-' + $(this).attr('href').replace('#', '')).addClass('active');
});

$('.hotel-gallery').on('click', function () {
  $('#modalTabs').modal('toggle');
  $('#modalTabs').find('[data-toggle="tab"]').removeClass('active');
  $('.nav-tab-' + $(this).attr('href').replace('#', '')).addClass('active');
});

// Lazy Load
document.addEventListener('DOMContentLoaded', function () {
  if (typeof LazyLoad != 'function') {
      return;
  }
  var lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazyload'
  });
});

// Spinner
$('.loading-spinner').click(function () {
  $(this).append('<i class="fa fa-spinner fa-spin ml-2"></i>');
});

// Booking Widget
  $('.promo-code-link').on('click', function (e) {
    e.preventDefault();
    $(this).next('.form-group').slideToggle();
  });
  $('#guest-widget').on('click', function () {
    $('.guest-widget-buttons').show();
  });
  
  // Sliders
  $('.standard-slider').slick({
    arrows: true,
    autoplay: true
  });

  // Slick Initialize Modal
  function initSlickSlider() {
    setTimeout( function() {
      // Slick slider single Item
      $('.room-modal-slider').slick({
        arrows: true,
        autoplay: true
      });
  
      // Modal Gallery
      $('.gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: false,
        asNavFor: '.slider-nav'
      });
  
      $('.slider-nav').slick({
        // slidesToShow: 15,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.gallery-slider',
        dots: false,
        centerMode: true,
        arrows: false,
        vertical: false,
        focusOnSelect: true
      });
    }, 500);
  }

  $('.btn').click(function(){
    $('.modal-body').on('shown.bs.modal', function () {
        initSlickSlider();
    });
  });
  $('.initSlick').click(function(){
    initSlickSlider();
  });
  $('.gallery-tab').click(function(){
      initSlickSlider();
  });

  
