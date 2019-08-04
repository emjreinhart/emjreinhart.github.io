$(document).ready(function() {
  $('.desc').hide();
  $('.lab_item').hover(
    function() {
      $(this).find('.desc').fadeIn('fast');
      $(this).find('.desc').addClass('base');
    },
    function() {
      $(this).find('.desc').fadeOut('slow', function() {
        $(this).removeClass(color);
      });
    });
});
