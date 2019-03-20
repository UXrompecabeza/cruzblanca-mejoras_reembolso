$('.btn-adjuntar').click(function() {
  $('.box-adjuntar_documento-vacio').addClass('hide')
  $('.box-adjuntar_documento-cargado').removeClass('hide')
})

$('.deleteDoc').click(function() {
  $('.box-adjuntar_documento-vacio').removeClass('hide')
  $('.box-adjuntar_documento-cargado').addClass('hide')
})

