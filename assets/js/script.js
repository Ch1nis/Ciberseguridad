$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (nombre && correo && mensaje) {
      $('#resultado').html("<div class='alert alert-success'>Formulario enviado correctamente.</div>");
      this.reset();
    } else {
      $('#resultado').html("<div class='alert alert-danger'>Por favor, completa todos los campos.</div>");
    }
  });
});