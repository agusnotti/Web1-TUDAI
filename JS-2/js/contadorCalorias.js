document.addEventListener("DOMContentLoaded", function () { //FUNCION ANONIMA ---> SE LA LLAMA UNA SOLA VEZ

  let calorias = 0;
  let btnRestarCalorias = document.getElementById("restar-calorias");
  let btnSumarCalorias = document.getElementById("sumar-calorias");
  let inputCalorias = document.getElementById("calorias");
  let btnAgregarCalorias = document.getElementById("agregar-calorias");
  let totalCalorias = document.getElementById("total-calorias");

  btnRestarCalorias.addEventListener("click", function () {  // FUNCION ANONIMA
    sumarCantidadCalorias(-1);
  });
  btnSumarCalorias.addEventListener("click", function () {  // FUNCION ANONIMA
    sumarCantidadCalorias(1);
  });
  btnAgregarCalorias.addEventListener("click", function () { // FUNCION ANONIMA
    sumarCantidadCalorias(parseInt(inputCalorias.value));
  }); 

  function sumarCantidadCalorias(cantidad) {
    calorias += cantidad;
    totalCalorias.innerHTML = calorias;
  }
});
