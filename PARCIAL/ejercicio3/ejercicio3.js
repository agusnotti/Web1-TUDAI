document.addEventListener('DOMContentLoaded', function(){

    let cantInvitados = document.getElementById("cant-invitados");

    let casamiento = {
        novios: "juan y pepe",
        invitados: [
            { nombre: "agustina", apellido: "notti", dni: "35775065" } 
        ]
    };

    agregarInvitado();
    actualizarCantidadInvitados();
    imprimirListaInvitados();

    //AGREGAR NUEVO INVITADO
    function agregarInvitado(){
        let nuevoInvitado = { nombre: "juan", apellido: "perez", dni: "11111111" };
        casamiento.invitados.push(nuevoInvitado);
    }
       
    //IMPRIMO LISTA INVITADOS
    function imprimirListaInvitados(){
        for (let i = 0; i < casamiento.invitados.length; i++) {
            console.log(casamiento.invitados[i].nombre+" , "+casamiento.invitados[i].apellido+" , "+casamiento.invitados[i].dni );       
        }
    }

    //MUESTRO CANTIDAD INVITADOS
    function actualizarCantidadInvitados(){
        cantInvitados.innerHTML = casamiento.invitados.length;
    }

})