document.addEventListener('DOMContentLoaded', function(){
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let nota = document.getElementById('nota');
    let btnCargarNota = document.getElementById('btn-cargar');
    let promedioNotas = document.getElementById('promedio-notas');

    let listaAlumnos = document.getElementById('alumnos');

    let notas = [];
    
    btnCargarNota.addEventListener('click', agregarNota);


    function agregarNota(){
        notas.push(parseInt(nota.value));

        crearListaNotas(); 
        calcularPromedio();
        limpiarFormulario();
    }

    function crearListaNotas(){
        let itemNota= "<li> Nombre y Apellido: "+nombre.value+" "+apellido.value+" - Nota: "+ nota.value+" </li>";
            
        listaAlumnos.innerHTML += itemNota;
    }

    function calcularPromedio(){
        let suma = 0;
        for (let i = 0; i < notas.length; i++) {
            suma += notas[i];
        }
        let prom = (suma/notas.length);
        promedioNotas.innerHTML = '' + prom;
    }

    function limpiarFormulario(){
        nombre.value='';
        apellido.value='';
        nota.value='';
    }
})