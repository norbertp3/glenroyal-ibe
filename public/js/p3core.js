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
}

// Booking Summary Room Details
$('.open-booking-summary-room-details').click(function(){
  $(this).closest('.booking-summary-room-row').find('.booking-summary-room-row-expanded').slideToggle();
  $(this).find('.icon-chevron-down').toggleClass("icon-chevron-up");
});

// .Fa rotate P3B
$('.trigger-rotate').click(function(){
  $(this).find('.fa').toggleClass('rotate180');
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
$(".view-rates-btn").click(function(){
  $(".icon-chevron-down").toggleClass("icon-chevron-up");
});

// Slick slider single Item
$('.single-item').slick({
  arrows: true,
  autoplay: true
});
// Init tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})