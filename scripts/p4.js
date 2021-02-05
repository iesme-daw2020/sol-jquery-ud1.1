$(function () {
  $('ul').last().children().first().css('background-color', 'red');
  $('ul').first().children().last().css('background-color', 'blue');
  $('ul').eq(1).children().eq(2).css('background-color', 'yellow');
});
