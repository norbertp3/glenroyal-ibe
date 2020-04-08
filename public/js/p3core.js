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

// Slick slider single Item
$('.standard-slider').slick({
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
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: '.gallery-slider',
  dots: false,
  centerMode: false,
  arrows: false,
  focusOnSelect: true
});

// Init tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('[data-toggle="tab"]').on('click', function () {
  $('#modalTabs').modal('toggle');
  $('#modalTabs').find('[data-toggle="tab"]').removeClass('active');
  $('.nav-tab-' + $(this).attr('href').replace('#', '')).addClass('active');
});

// Modal loading images

document.addEventListener('DOMContentLoaded', function () {

  if (typeof LazyLoad != 'function') {
      return;
  }

  var lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazyload'
  });

  $('.modal').on('shown.bs.modal', function () {
      /**
       * sometimes the images in the room modals don't load
       * this will force any that haven't loaded in
       */
      $(this).find('[data-src]').each(function (index, element) {
          $(element).attr('src', $(element).data('src') );
          $(element).removeAttr('data-src');
      });
  });
});