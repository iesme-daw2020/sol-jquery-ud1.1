$(function () {
  var btn = document.getElementById('button1');
  btn.addEventListener('click', function (event) {
    var elementCount = $('.div').find('*').length;
    $('div').last().prepend(`<p>${elementCount} elementos encontrados</p>`);
  });
});
