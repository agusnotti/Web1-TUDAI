"use strict"


document.getElementById("btn-prender-apagar").addEventListener("click", prenderApagar);

let apagada = true;

function prenderApagar(){
    if (apagada){
        //1.cambiar la foto de la lampara
        document.getElementById("img-lampara").src = "img/prendida.png";
        //2. cambiar el fondo de la pagina
        document.getElementById("fondo").classList.add("prendida");
        document.getElementById("fondo").classList.remove("apagada");
        document.getElementById("btn-prender-apagar").innerHTML = "APAGAR"
        //3. guardo el estado de la lampara
        apagada= false;
    } else {
        document.getElementById("img-lampara").src = "img/apagada.png";
        document.getElementById("fondo").classList.add("apagada");
        document.getElementById("fondo").classList.remove("prendida");
        document.getElementById("btn-prender-apagar").innerHTML = "PRENDER"
        apagada=true;
    }
}


