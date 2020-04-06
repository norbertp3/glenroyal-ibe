// Mobile detach P3B
if ($(window).width() < 991) {
  $("#booking-summary").detach().insertAfter("#mobile-hotel-info");
  $('.open-booking-summary').click(function(){
    $('.booking-summary-data').slideToggle();
    $(this).find('.icon-chevron-down').toggleClass("icon-chevron-up");
  });
  $('.rate-name').click(function(){
    $(this).closest('.rate-container').find('.rate-description').detach().insertAfter($(this).closest('.rate-container').find('.rate-name'));
  });
  $(".room-slider").detach().insertAfter(".room-modal-header");
}

// Booking Summary Room Details
$('.open-booking-summary-room-details').click(function(){
  $(this).closest('.booking-summary-room-row').find('.booking-summary-room-row-expanded').slideToggle();
  $(this).find('.icon-chevron-down').toggleClass("icon-chevron-up");
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

$('.hotel-info-buttons [data-toggle="tab"]').on('click', function () {
  $('#modalTabs').modal('toggle');
  $('#modalTabs').find('[data-toggle="tab"]').removeClass('active');
  $('.nav-tab-' + $(this).attr('href').replace('#', '')).addClass('active');
});