$(function () {
  var btn = document.getElementById('boton1');
  btn.addEventListener('click', function (event) {
    $('select')
      .empty()
      .append('<option selected="selected" value="blanco">Blanco</option>');
  });
});
