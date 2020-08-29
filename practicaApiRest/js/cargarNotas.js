/*
Crear una aplicación web que permita:
● Cargar en un servicio mediante un formulario datos de alumnos de una asignatura.
Nombre, Apellido, DNI y 3 Notas de Exámenes.
● Contar los aprobados / desaprobados, y mostrar porcentaje de aprobación.
● Calcular y mostrar la Nota media de cada examen.
● Mostrar un listado de alumnos ordenado por apellido.
● Mostrar en una tabla todos los alumnos con sus datos y su respectivo promedio.
● Borrar alumnos localizados por nombre y apellido través de un input.
*/
//https://web-unicen.herokuapp.com/api/groups/ejercicioPractica/notas

document.addEventListener("DOMContentLoaded", function () {
  let url = "https://web-unicen.herokuapp.com/api/groups/ejercicioPractica/notas";

  let nombreAlumno = document.getElementById('nombre');
  let apellidoAlumno = document.getElementById('apellido');
  let dniAlumno = document.getElementById('dni');
  let nota1 = document.getElementById('nota-1');
  let nota2 = document.getElementById('nota-2');
  let nota3 = document.getElementById('nota-3');
  let btnAgregar = document.getElementById('btn-agregar');

  

  btnAgregar.addEventListener('click', function(){    
    agregarAlumno(url);
  });  

  let alumnos = [];
  getAlumnos(url);

  function getAlumnos(url) {
    fetch(url)
      .then(function (r) {
        return r.json();
      })
      .then(function (json) {
        for (let i = 0; i < json.notas.length; i++) {
          let nuevoAlumno = crearAlumno(
            json.notas[i].thing.nombre,
            json.notas[i].thing.apellido,
            json.notas[i].thing.dni,
            json.notas[i].thing.nota_1,
            json.notas[i].thing.nota_2,
            json.notas[i].thing.nota_3
          );

          actualizarTabla(nuevoAlumno);
        }
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  //AGREGAR ALUMNO DESDE FORMULARIO

  function agregarAlumno(url){ 
    event.preventDefault();

    let nuevoAlumno = crearAlumno(nombreAlumno.value, apellidoAlumno.value, dniAlumno.value, nota1.value, nota2.value, nota3.value);
    
    fetch(url, {
      'method': 'POST',
      'mode': 'cors',
      'headers': {
        'content-Type': 'application/json'
      },
      'body': JSON.stringify(nuevoAlumno)
    })
    .then(function(r){
      return r.json();
    })
    .then(function(json){
      actualizarTabla(nuevoAlumno);
      borrarInputs();
    })
    .catch(function(e){
      console.log(e);
    });
  }

  //ACTUALIZAR TABLA
  function actualizarTabla(nuevoAlumno){
    alumnos.push(nuevoAlumno);
    crearFilaTabla(nuevoAlumno);
  }

  //BORRAR INPUTS
  function borrarInputs(){
    nombreAlumno.value = "";
    apellidoAlumno.value = "";
    dniAlumno.value = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
  }


  //CREAR FILA TABLA
  function crearFilaTabla(alumno) {
    let filaTabla = document.createElement("tr");
    let tdNombre = document.createElement("td");
    let tdApellido = document.createElement("td");
    let tdDNI = document.createElement("td");
    let tdNota1 = document.createElement("td");
    let tdNota2 = document.createElement("td");
    let tdNota3 = document.createElement("td");
    let tdPromedio = document.createElement("td");
    let promedio = calcularPromedio(
      alumno.thing.nota_1,
      alumno.thing.nota_2,
      alumno.thing.nota_3
    );
    let tdBtns = document.createElement('td');
    let btnEdit = document.createElement('button');
    let btnDelete = document.createElement('button');    

    tdNombre.innerHTML = alumno.thing.nombre;
    tdApellido.innerHTML = alumno.thing.apellido;
    tdDNI.innerHTML = alumno.thing.dni;
    tdNota1.innerHTML = alumno.thing.nota_1;
    tdNota2.innerHTML = alumno.thing.nota_2;
    tdNota3.innerHTML = alumno.thing.nota_3;
    tdPromedio.innerHTML = promedio;
    btnEdit.innerHTML ='<i class="fas fa-edit"></i>';
    btnDelete.innerHTML ='<i class="far fa-trash-alt"></i>';
    
    btnEdit.classList.add('btns-tabla');
    btnEdit.classList.add('btn-edit');
    btnDelete.classList.add('btns-tabla');
    btnDelete.classList.add('btn-delete');
    
    tdBtns.appendChild(btnEdit);
    tdBtns.appendChild(btnDelete);

    filaTabla.appendChild(tdNombre);
    filaTabla.appendChild(tdApellido);
    filaTabla.appendChild(tdDNI);
    filaTabla.appendChild(tdNota1);
    filaTabla.appendChild(tdNota2);
    filaTabla.appendChild(tdNota3);
    filaTabla.appendChild(tdPromedio);
    filaTabla.appendChild(tdBtns);

    document.getElementById("tabla-notas").appendChild(filaTabla);
  }

  //CALCULAR PROMEDIO --> SE PUEDE MEJORAR PERO POR AHORA SIRVE
  function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

    return promedio;
  }

  //CREAR ALUMNO
  function crearAlumno(nombre, apellido, dni, nota1, nota2, nota3) {
    let alumno = {
      thing: {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        nota_1: nota1,
        nota_2: nota2,
        nota_3: nota3,
      },
    };
    return alumno;
  }
});
