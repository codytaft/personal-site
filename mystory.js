var sdegree = 0;

$(window).scroll(function() {
  $('.hero-image').css('opacity', 1 - $(window).scrollTop() / 500);
  $('.fa-angle-double-right').css(
    'opacity',
    1 - $(window).scrollTop() / 150,
    'transform',
    'translate3d(10px, 20px, 0)'
  );
});

$(window).scroll(function() {
  $('.kid-title').css('opacity', 0 + $(window).scrollTop() / 1050);
});
