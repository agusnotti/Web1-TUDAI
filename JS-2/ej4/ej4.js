/*4.Crear una lista de tareas leídas desde un input. Solo se debe permitir un máximo de 10 tareas. */ 

document.addEventListener('DOMContentLoaded', function(){

    'use strict';


    /*------------------------   EJERCICIO 4 y 6    ----------------------------------- */
    let tareas = [];
    let tarea = document.querySelector("#tarea");
    let btnAgregarTarea = document.querySelector("#btn-agregarTarea");
    let listaTarea = document.querySelector(".listaTareas");
    btnAgregarTarea.addEventListener('click', agregarTarea)

    
    function agregarTarea(){        
        let existe = false;
        for (let i = 0; i < tareas.length; i++) {
            if(tareas[i] === tarea.value){ //evaluo si la tarea que se esta agregando esta en el arreglo
                existe = true;
            }
        }
        
        if((tareas.length < 10) && (!existe)){
            tareas.push(tarea.value); //si la tarea no esta la agrego
            actualizarDom(); //actualiza el dom
        }
    }
    
    function actualizarDom(){
        listaTarea.innerHTML += '<li>'+tarea.value+'</li>'
        tarea.value = "";
    }


 /*------------------------   EJERCICIO 9    ----------------------------------- */

    let divArcoiris = document.querySelector(".arco-iris");
    let btnActivarArcoIris = document.querySelector("#btn-activar-arcoIris");
    let colores = ["color1", "color2", "color3", "color4", "color5"]
    btnActivarArcoIris.addEventListener('click', function(e) {
        setInterval(cambiarColor,500);
    })

    let cantidadColores = 0;
    function cambiarColor() {
        divArcoiris.classList.toggle(colores[cantidadColores]);
        if(cantidadColores === 4){
            cantidadColores = 0;
        }else{
            cantidadColores++;
        }
    }

    
})
