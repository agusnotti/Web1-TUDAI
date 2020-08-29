"use strict";
document.addEventListener('DOMContentLoaded', iniciarPagina);

function iniciarPagina(){
  let contador = 0;

  function contar() {
    contador++;
    document.getElementById("cantidad-clicks").innerHTML = contador;
  }

  document.getElementById("btn-contador").addEventListener("click", contar);
}

