document.addEventListener("DOMContentLoaded", function () {


  /* --------   EJERCICIO 5  / GET DATOS ------- */

  let btnBorrar = document.querySelectorAll(".delete");
  getDatos();

  function getDatos() {
    fetch("https://web-unicen.herokuapp.com/api/groups/044-Aceto-Notti/productos/")
      .then(function (r) {
        return r.json();
      })
      .then(function (json) {
        let contenedor = document.querySelector("#result");
        contenedor.innerHTML = ""; //JSON.stringify(json)

        for (let elem of json.productos) {
          if (elem.thing != null) {
            contenedor.innerHTML += `<p>${elem.thing.nombre} - ${elem.thing.descripcion} - ${elem.thing.tamaño} - ${elem.thing.precio} <input id='${elem._id}' type='button' class='delete' value='Borrar'/> </p>`;
          }
        }
        addEventDelete(); /// asignar evento al boton creado
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  

  /* --------   EJERCICIO 6 / POST DATOS   ------- */

  let producto = document.querySelector("#producto");
  let btnEnviarDatos = document.querySelector("#btn-enviar");
  btnEnviarDatos.addEventListener("click", postDatos);

  let data = {
    "thing": {
      "producto": "",
    },
  };

  function postDatos() {
    data.thing.producto = producto.value;

    fetch("https://web-unicen.herokuapp.com/api/groups/044-Aceto-Notti/productos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (json) {
        //si quiero hacer algo despues del post, va aca
        getDatos();
      })
      .catch(function (e) {
        console.log(e);
      });
  }
  
  /* --------   EJERCICIO  7 / DELETE DATOS   ------- */

  function addEventDelete() {
    btnBorrar = document.querySelectorAll(".delete");
    btnBorrar.forEach((e) => e.addEventListener('click', deleteDatos));
  }


  function deleteDatos(event) {
      event.preventDefault();
      
    let id = this.id;
    fetch("https://web-unicen.herokuapp.com/api/groups/044-Aceto-Notti/productos/"+id, {
      method: "DELETE"
    })
    .then(function (r) {
      return r.json();
    })
    .then(function (json) {
      //si quiero hacer algo despues del delete, va aca
      getDatos();
    })
    .catch(function (e) {
      console.log(e);
    });
  }

  /* --------   EJERCICIO  8 / PUT DATOS   ------- */
    /*Realice la modificación de alguno de los datos del servicio a través de un formulario
  donde especifique el ID y el nombre nuevo. Muestre en la página el dato antiguo, el dato
  nuevo y verifique que fue modificado. */


  

  

});
