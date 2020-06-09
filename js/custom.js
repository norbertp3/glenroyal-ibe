// Hamburger
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

// Disable scroll
function noScroll() {
  window.scrollTo(0, 0);
}

// Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  window.addEventListener('scroll', noScroll);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  window.removeEventListener('scroll', noScroll);
}

// Booking Widget

function openWidget() {
  document.getElementById("booking-widget").style.width = "100%";
  window.addEventListener('scroll', noScroll);
}

function closeWidget() {
  document.getElementById("booking-widget").style.width = "0";
  window.removeEventListener('scroll', noScroll);
}

$( document ).ready(function() {
  // Read more
  $('.expand').find('a[href="#"]').on('click', function (e) {
      e.preventDefault();
      this.expand = !this.expand;
      $(this).text(this.expand?"Read Less...":"Read More...");
      $(this).closest('.expand').find('.hidden-list').slideToggle();
  });

  // Booking Widget
  $('#guest-widget').on('click', function () {
      $('.guest-widget-buttons-container').show();
  });

});

if ($(window).width() > 991) {
  $('.offers-list__article').each(function(){
    var boxSize = 0;
    $(this).find('.offers-list__article--description').each(function(){
      boxSize = $(this).height();
    });
    boxSize = boxSize + 40;
    $(this).closest('.offers-list__article').css({"height":boxSize+"px"});
  });
}