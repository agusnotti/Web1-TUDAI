"use strict";

let botonDado = document.querySelector("#btn-dados").addEventListener("click", tirarDados);

function getDiceNumber(){
    let dado = Math.floor((Math.random()*6)+1);

    return dado;
}

function tirarDados(){

    let dado1 = getDiceNumber();
    document.querySelector("#imagen1").src = "img/dado"+dado1+".png";
    
    let dado2 = getDiceNumber();
    document.querySelector("#imagen2").src = "img/dado"+dado2+".png";
    
    let suma = dado1 + dado2;
    
    if(suma === 8){
        document.querySelector("#resultado").innerHTML= "dio 8!!";
        document.querySelector("#imagen-resultado").src = "img/homero.jpg"
    }else{
        document.querySelector("#resultado").innerHTML=suma;
    }

}


/* let sumaFor=0;
for (let i = 0; i < 1000; i++) {
    let dadoFor = getDiceNumber();
    sumaFor+=dadoFor;    
}

console.log(sumaFor); */


