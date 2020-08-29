document.addEventListener("DOMContentLoaded", function () {

    let inputNota = document.querySelector("#nota");  

    document.querySelector("#btn-agregarNota").addEventListener('click', agregarNota);

    document.querySelector("#btn-calcularPromedio").addEventListener('click', calcularPromedio);

    let notas = [];
    
    //let promedio = document.querySelector("#promedio");


    function agregarNota(){
        notas.push(parseInt(inputNota.value));
        inputNota.value = " ";

        crearListaNotas();
    }

    function calcularPromedio(){
        let suma = 0;
        for (let i = 0; i < notas.length; i++) {
            suma += notas[i];
        }
        let prom = (suma/notas.length);
        promedio.innerHTML = '' + prom;
    }


    function crearListaNotas(){
        let listaNotas = '';

        for (let i = 0; i < notas.length; i++) {
            listaNotas += "<li> Nota "+(i+1)+": "+ notas[i] +"</li>";
        }
        
        document.querySelector('#lista-notas').innerHTML = listaNotas;
    }
    
})

