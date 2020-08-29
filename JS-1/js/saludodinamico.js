"use strict"; 

let btn = document.querySelector("#btn");
btn.addEventListener("click", saludar);

function saludarEnDOM() {
    let nombre = document.querySelector("#nombre"); //1. capturo el elemento input con el id
    nombre.value; //2. tomo el valor que se ingresa en el input
    document.querySelector("#saludo").innerHTML=nombre;//3. capturo el contenido del elemento y le pego el nombre
}

function saludar(){
    alert("Hola Chancho");
    let consejo = document.querySelector("#consejo"); //1. tomo el elemento con el id
    consejo.innerHTML = "Te Amoo!!"; //2.capturo el CONTENIDO del elemento que tome antes y le cambio el contenido
}

