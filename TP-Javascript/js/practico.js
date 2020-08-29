"use strict";

/*1.	Muestre una alerta al cargar una página
        ●	Que sea un texto fijo
        ●	Que sean dos variables nombre y apellido concatenadas, mostrando en el mensaje: 
Nombre: (valor_nombre)  Apellido: (valor_apellido)
2.	Mostrar el mismo mensaje del punto uno, pero haciendo click desde un botón*/

let nombre= "Agustina";
let apellido="Notti";

document.querySelector("#btn").addEventListener("click", saludar);

function saludar(){
    alert("Hola!!!\nNOMBRE: "+nombre+"\nAPELLIDO: "+apellido);
}

/*3.	Crear 3 botones de distinto color. Agregar la funcionalidad para que se muestre en un párrafo 
un mensaje que avise cual de los botones fue el último cliqueado.*/

document.querySelector("#btn-rojo").addEventListener("click", escribirColorRojo);
document.querySelector("#btn-verde").addEventListener("click", escribirColorVerde);
document.querySelector("#btn-azul").addEventListener("click", escribirColorAzul);


function escribirColorRojo(){
    document.querySelector("#color-boton").innerHTML="ROJO";
}

function escribirColorVerde(){
    document.querySelector("#color-boton").innerHTML="VERDE";
}

function escribirColorAzul(){
    document.querySelector("#color-boton").innerHTML="AZUL";
}

/* document.querySelector("#btn-rojo").addEventListener("click", escribirColorRojo);
document.querySelector("#btn-verde").addEventListener("click", escribirColorVerde);
document.querySelector("#btn-azul").addEventListener("click", function () {
    escribirColor("Azul");
});

function escribirColorRojo(){
    escribirColor("Rojo")
}

function escribirColorVerde(){
    escribirColor("Verde")
}

function escribirColor(color){
    document.querySelector("#color-boton").innerHTML="Color " + color;
} */

/* document.querySelector("#btn-rojo").addEventListener("click", escribirColor2);
document.querySelector("#btn-verde").addEventListener("click", escribirColor2);
document.querySelector("#btn-azul").addEventListener("click", escribirColor2);
document.querySelector("#btn-otro").addEventListener("click", escribirColor2);


function escribirColor2(){
    let color = getColor(this.id);
    document.querySelector("#color-boton").innerHTML="Color " + color;
}

function getColor(id) {
    if("btn-rojo" == id){
        return "Rojo";
    } else if("btn-verde" == id){
        return "Verde";
    } else if("btn-azul" == id){
        return "Azul";
    } else {
        return "Otro";
    }
} */


/*4.	Cree una “Lista de Tareas” donde cada tarea se agrega desde un input de texto.*/

let inputTarea = document.querySelector('#agregarTareas');
let botonAgregar = document.querySelector('#btn-tarea').addEventListener("click", agregarTarea);
let listaTareas = document.querySelector('#listaTareas');

function agregarTarea(){
    event.preventDefault();
    
    listaTareas.innerHTML += `<li> ${inputTarea.value} </li>`;

    /* let nuevaTarea = document.createElement("li");     //create new element
    nuevaTarea.innerHTML = inputTarea.value;
    listaTareas.appendChild(nuevaTarea); //Append <li> to listaTareas */

    inputTarea.value="";
}

/*5.	Crear un formulario con Nombre, Apellido y un botón Enviar. Al presionar Enviar 
debe mostrar el nombre y apellido como título dentro de una página.*/

let nombre2 = document.querySelector('#nombre');
let apellido2 = document.querySelector('#apellido');
let titulo = document.querySelector('#nombreApellido');
let btn = document.querySelector('#btn-enviar').addEventListener('click', agregarTitulo);

function agregarTitulo(event) {  
    event.preventDefault();
    titulo.innerHTML = nombre2.value+" "+apellido2.value;
}

/*6.	Crear un botón que al hacer click cambie el color de fondo de un div y agregue borde de 3px rojo..*/

let contenedor = document.querySelector('#color');
let btnColor = document.querySelector('#btn-color').addEventListener('click', cambiarColor);
let color = true;

function cambiarColor() {
    if(color){
        contenedor.classList.add("color-div");
        color=false;
    } else {
        contenedor.classList.remove("color-div");
        color=true;
    }
}

/*7.	Crear una página que tenga un contenedor (div) con información y un botón. 
Cree una función Javascript que oculte o muestre el div que contiene la información.*/

let btnBorrar = document.querySelector('#btn-borrar').addEventListener('click', borrarDiv);
let oculto = true;

function borrarDiv() {
    if(oculto){
        contenedor.classList.add('oculto')
        oculto=false;
    } else {
        contenedor.classList.remove('oculto')
        oculto=true;
    }
}

/*9.	Crear una página en blanco, donde el usuario pueda clickear en cualquier lado y automáticamente 
se dibuje un DIV de color en esa posición exacta. Además, si el usuario hace click en uno de los divs creados, 
se debe mostrar un mensaje de alerta diciendo que “en esa posición ya existe un elemento”.*/

let click = document.querySelector('body').addEventListener('click', createDiv);

function createDiv(event) {
    let d = document.createElement('div'); 
    document.querySelector('body').appendChild(d);
    d.classList.add('nuevoDiv');
    d.style.position = 'absolute';
    d.style.left = event.pageX+'px'; 
    d.style.top = event.pageY+'px';
    
}
