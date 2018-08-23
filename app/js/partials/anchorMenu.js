$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('main.content').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});