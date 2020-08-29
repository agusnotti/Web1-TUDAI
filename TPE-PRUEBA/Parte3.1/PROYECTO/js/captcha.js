document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario-contacto").addEventListener("submit", validar);
    document.getElementById("nombreformulario").addEventListener("keydown", bloquearEspacio);
    document.getElementById("apellidoformulario").addEventListener("keydown", bloquearEspacio);
    document.getElementById("codAreaformulario").addEventListener("keydown", bloquearEspacio);
    document.getElementById("telefonoformulario").addEventListener("keydown", bloquearEspacio);
    document.getElementById("correoformulario").addEventListener("keydown", bloquearEspacio);
    document.querySelector(".btn-filtros-mobile").addEventListener("click", toggleFiltros);
    document.querySelector(".btn-aplicar-filtros").addEventListener("click", toggleFiltros);
    document.querySelector(".ver-mas").addEventListener("click", mostrarInformacion);
    document.querySelector(".ver-menos").addEventListener("click", mostrarInformacion);

  function toggleFiltros() {
    document.querySelector(".container-filtros").classList.toggle("show");
  }

  function mostrarInformacion() {
    document.querySelector(".ver-mas").classList.toggle("mobile-hidden");
    document.querySelector("#parrafo-adicional").classList.toggle("mobile-hidden");
    document.querySelector(".ver-menos").classList.toggle("mobile-hidden");
  }

  // Captcha Limitado a 4 valores
  let input = document.getElementById("input-captcha");

  input.addEventListener("input", function () {
    if (this.value.length > 4) this.value = this.value.slice(0, 4);
  });

  //Prevenir el uso de barra espaciadora
  function bloquearEspacio() {
    if (event.keyCode == 32) {
      event.returnValue = false;
      return false;
    }
  }

  // Validación del captcha
  let captcha = document.querySelector("#captcha-codigo");
  captcha.innerHTML = Math.round(Math.random() * 9000 + 1000);
  let inputUsuario = document.querySelector("#input-captcha");

  function validar() {
    event.preventDefault();
    let textocaptcha = document.querySelector("#captcha-mensaje");
    if (captcha.innerHTML === inputUsuario.value) {
      mensajeCaptcha.classList.remove("validacion-captcha");
      mensajeCaptcha.classList.add("validacion-captcha-correcto");
      mensajeCaptcha.classList.remove("validacion-captcha-incorrecto");
      textocaptcha.innerHTML = "Captcha Correcto";
    } else {
      mensajeCaptcha.classList.remove("validacion-captcha");
      mensajeCaptcha.classList.add("validacion-captcha-incorrecto");
      mensajeCaptcha.classList.remove("validacion-captcha-correcto");
      textocaptcha.innerHTML = "Captcha Incorrecto";
    }
  }

});
