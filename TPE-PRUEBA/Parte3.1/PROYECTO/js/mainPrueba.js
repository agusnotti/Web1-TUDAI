document.addEventListener("DOMContentLoaded", function () {
  /*--------------------------------------------  PARTIAL RENDER ------------------------------*/

  let container = document.querySelector("#use-ajax");

  let btnsNav = document.querySelectorAll("ul.nav-izquierdo > li > a");
  btnsNav.forEach((e) => e.addEventListener("click", renderPage));

  let btnsBreadcrumb, btnsCategorias, btnsProductos;

  addEvents();

  callAjax("html/home.html");

  function callAjax(url) {
    let mensajeCargando = "Loading...";
    let mensajeError = "Error - Failed URL!";
    let mensajeErrorConexion = "Connection error";

    let pMensaje = document.createElement("p");

    pMensaje.innerHTML = mensajeCargando;
    container.appendChild(pMensaje);

    fetch(url)
      .then(function (response) {
        if (response.ok) {
          response.text().then(processText);
        } else {
          pMensaje.innerHTML = mensajeError;
          container.appendChild(pMensaje);
        }
      })
      .catch(function (response) {
        pMensaje.innerHTML = mensajeErrorConexion;
        container.appendChild(pMensaje);
      });
  }

  function renderPage(event) {
    event.preventDefault();
    let url = this.getAttribute("href"); // this --> hace referencia al elemento al que le asigno el evento

    callAjax(url);
  }

  function processText(t) {
    document.querySelector("#use-ajax").innerHTML = t;
    addEvents();

    if (document.getElementById("formulario-contacto")) {
      //si encuentra en la pagina este elemento....
      addEventsHome();
    }
    if (document.getElementById("nombre-tabla")) {
      //si encuentra en la pagina este elemento....
      addEventsTabla();
    }
  }

  function addEvents() {
    btnsBreadcrumb = document.querySelectorAll("ul.breadcrumb > li > a");
    btnsCategorias = document.querySelectorAll(".container-imagenes a");
    btnsProductos = document.querySelectorAll(".container-imagenes a");
    btnsBreadcrumb.forEach((e) => e.addEventListener("click", renderPage));
    btnsCategorias.forEach((e) => e.addEventListener("click", renderPage));
    btnsProductos.forEach((e) => e.addEventListener("click", renderPage));
  }

  // ------------------------------------     HOME HTML    ------------------------------------------
  let input;
  let captcha;
  let inputUsuario;

  function addEventsHome() {
    document
      .getElementById("formulario-contacto")
      .addEventListener("submit", validar);
    document
      .getElementById("nombreformulario")
      .addEventListener("keydown", bloquearEspacio);
    document
      .getElementById("apellidoformulario")
      .addEventListener("keydown", bloquearEspacio);
    document
      .getElementById("codAreaformulario")
      .addEventListener("keydown", bloquearEspacio);
    document
      .getElementById("telefonoformulario")
      .addEventListener("keydown", bloquearEspacio);
    document
      .getElementById("correoformulario")
      .addEventListener("keydown", bloquearEspacio);
    document
      .querySelector(".btn-filtros-mobile")
      .addEventListener("click", toggleFiltros);
    document
      .querySelector(".btn-aplicar-filtros")
      .addEventListener("click", toggleFiltros);
    document
      .querySelector(".ver-mas")
      .addEventListener("click", mostrarInformacion);
    document
      .querySelector(".ver-menos")
      .addEventListener("click", mostrarInformacion);

    // Captcha Limitado a 4 valores
    input = document.getElementById("input-captcha");

    input.addEventListener("input", function () {
      if (this.value.length > 4) this.value = this.value.slice(0, 4);
    });

    // Validación del captcha
    captcha = document.querySelector("#captcha-codigo");
    captcha.innerHTML = Math.round(Math.random() * 9000 + 1000);
    inputUsuario = document.querySelector("#input-captcha");
  }

  function toggleFiltros() {
    document.querySelector(".container-filtros").classList.toggle("show");
  }

  function mostrarInformacion() {
    document.querySelector(".ver-mas").classList.toggle("mobile-hidden");
    document
      .querySelector("#parrafo-adicional")
      .classList.toggle("mobile-hidden");
    document.querySelector(".ver-menos").classList.toggle("mobile-hidden");
  }

  //Prevenir el uso de barra espaciadora
  function bloquearEspacio() {
    if (event.keyCode == 32) {
      event.returnValue = false;
      return false;
    }
  }

  function validar() {
    event.preventDefault();
    let textocaptcha = document.querySelector("#captcha-mensaje");
    if (captcha.innerHTML === inputUsuario.value) {
      mensajeCaptcha.classList.remove("validacion-captcha");
      mensajeCaptcha.classList.add("validacion-captcha-correcto");
      mensajeCaptcha.classList.remove("validacion-captcha-incorrecto");
      textocaptcha.innerHTML = "Captcha Correcto";
    } else {
      mensajeCaptcha.classList.remove("validacion-captcha");
      mensajeCaptcha.classList.add("validacion-captcha-incorrecto");
      mensajeCaptcha.classList.remove("validacion-captcha-correcto");
      textocaptcha.innerHTML = "Captcha Incorrecto";
    }
  }

  //-------------------------------     FUNCIONALIDAD TABLA     --------------------------------------

  let baseURL = "https://web-unicen.herokuapp.com/api/groups/";
  let groupID = "044-Aceto-Notti";
  let collectionID = "productos";

  let nombreProducto;
  let descripcionProducto;
  let tamanioProducto;
  let precioProducto;
  let table;
  let cantidadProductos = 0;
  let cantcolores = 0;
  let colores = [
    "color-resaltado-1",
    "color-resaltado-2",
    "color-resaltado-3",
    "color-resaltado-4",
    "color-resaltado-5",
  ];

  //ARREGLO DE PRODUCTOS
  let tabla = [
    {
      nombre: "Aceite de Bergamota",
      descripcion: "Gotas de felicidad",
      tamanio: "15 ml",
      precio: "500",
    },
    {
      nombre: "Aceite de Eucalipto",
      descripcion: "Beneficios respiratorios",
      tamanio: "10 ml",
      precio: "320",
    },
    {
      nombre: "Aceite de Geranio",
      descripcion: "Mujer plena",
      tamanio: "25 ml",
      precio: "700",
    },
  ];

  // CREA EL ARREGLO PARA CARGAR PRODUCTOS RANDOM
  let tablacompleta = [
    {
      nombre: "Aceite de Bergamota",
      descripcion: "Gotas de felicidad",
      tamanio: "15 ml",
      precio: "500",
    },
    {
      nombre: "Aceite de Eucalipto",
      descripcion: "Beneficios respiratorios",
      tamanio: "10 ml",
      precio: "320",
    },
    {
      nombre: "Aceite de Geranio",
      descripcion: "Mujer plena",
      tamanio: "25 ml",
      precio: "700",
    },
    {
      nombre: "Aceite de Lavanda",
      descripcion: "Relajación",
      tamanio: "20 ml",
      precio: "700",
    },
    {
      nombre: "Aceite de Limón",
      descripcion: "Inspiración",
      tamanio: "15 ml",
      precio: "600",
    },
    {
      nombre: "Aceite de Manzanilla",
      descripcion: "Reconfortante Natural",
      tamanio: "15 ml",
      precio: "400",
    },
  ];

  let producto = {
    "thing": {
      "nombre": "",
      "descripcion": "",
      "tamanio": "",
      "precio": "",
    },
  };


  // LLAMADA AJAX GET DATOS
  function getDatos() {
    fetch(baseURL + groupID + "/" + collectionID)
    .then(function (r) {
      if (!r.ok) {
        console.log("ERROR!!");
      }
      return r.json();
    })
    .then(function (json) {
      for (let elem of json.productos) {
        if (elem.thing != null) {
          crearFilaTabla(elem.thing, elem._id);
        }
      }  

      cantidadProductos = json.productos.length;
      mostrarInformacionOfertas(cantidadProductos);

    })
    .catch(function (e) {
      console.log(e);
    });
  }


  // LLAMADA AJAX POST DATOS
  function postDatos(producto) {
    fetch(baseURL + groupID + "/" + collectionID,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      }
    )
    .then(function (r) {
      if (!r.ok) {
        console.log("ERROR!!");
      }
      return r.json();
    })
    .then(function (json) {
      crearFilaTabla(json.information.thing, json.information._id);
      cantidadProductos++;
      mostrarInformacionOfertas(cantidadProductos);
      limpiarCamposFormulario();
    })
    .catch(function (e) {
      console.log(e);
    });
  }

  //ASIGNA EVENTOS DE LA TABLA
  function addEventsTabla() {
    nombreProducto = document.getElementById("nombre-tabla");
    descripcionProducto = document.getElementById("descripcion-tabla");
    tamanioProducto = document.getElementById("tamaño-tabla");
    precioProducto = document.getElementById("precio-tabla");
    table = document.getElementById("body-tabla");

    setInterval(resaltado, 80); // CAMBIA COLORES EN UN INTERVALO

    //LLAMADA A LA FUNCION PARA OBTENER DATOS
    getDatos();  
    
    //ASIGNA EVENTO A BOTON 'AGREGAR PRODUCTO'
    document.getElementById("btn-agregar-tabla").addEventListener("click", agregarProductoATabla);

    //VACIAR TABLA AL APRETAR EL BOTON 'VACIAR TABLA'
    document.getElementById("btn-vaciar-tabla").addEventListener("click", vaciarTabla);
        

    // //AGRAGAR VARIOS PRODUCTOS AL APRETAR EL BOTON 'AGREGAR VARIOS'
    document.getElementById("btn-agregar-varios-tabla").addEventListener("click", agregarVariosTabla);
  }


  function vaciarTabla(){
    fetch(baseURL + groupID + "/" + collectionID)
    .then(function (r) {
      if (!r.ok) {
        console.log("ERROR!!");
      }
      return r.json();
    })
    .then(function (json) {
      for (let elem of json.productos) {
        if (elem.thing != null) {
          deleteDatos(elem._id);
        }
      }
    })
    .catch(function (e) {
      console.log(e);
    });

  }


  //CARGA LA TABLA AL APRETAR EL BOTON 'AGREGAR PRODUCTO'
  function agregarProductoATabla(event) {
    event.preventDefault();

    let nuevoproducto = crearProducto(nombreProducto.value, descripcionProducto.value, tamanioProducto.value, precioProducto.value);

    postDatos(nuevoproducto);    
  }


  function agregarVariosTabla() {
    let random = Math.round(Math.random() * 2 + 2);

    for (i = 0; i <= random; i++) {
      let randomnombre = Math.round(Math.random() * 5);
      let randomtamanio = Math.round(Math.random() * 5);
      let randomprecio = Math.round(Math.random() * 5);

      let nuevoproducto = crearProducto(tablacompleta[randomnombre].nombre, tablacompleta[randomnombre].descripcion, tablacompleta[randomtamanio].tamanio, tablacompleta[randomprecio].precio)
     
      postDatos(nuevoproducto); 
    }
  }


  //CREA PRODUCTO ASIGNANDO VALORES INGRESADOS POR USUARIO
  function crearProducto(nombre, descripcion, tamanio, precio ) {
    producto.thing.nombre = nombre;
    producto.thing.descripcion = descripcion;
    producto.thing.tamanio = tamanio;
    producto.thing.precio = precio;

    return producto;
  }  


  //FUNCION PARA LIMPIAR LOS INPUTS DEL FORMULARIO DE PRODUCTOS
  function limpiarCamposFormulario() {
    nombreProducto.value = "";
    descripcion = descripcionProducto.value = "";
    tamanioProducto.value = "";
    precioProducto.value = "";
  }


  // FUNCION PARA CREAR FILA LA TABLA DE TABLA
  function crearFilaTabla(producto, id) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let tdboton = document.createElement("td");
    let btnBorrar = document.createElement("button");
    let btnEdit = document.createElement("button");
    addEventDelete(btnBorrar);
    addEventsEditar(btnEdit);

    td1.innerText = producto.nombre;
    td2.innerText = producto.descripcion;
    td3.innerText = producto.tamanio;
    td4.innerText = "$ " + producto.precio;

    tr.id = id;
    btnBorrar.innerHTML = '<i class="fas fa-times"></i>';
    btnEdit.innerHTML = '<i class="fas fa-edit"></i>';
    btnBorrar.classList.add("btn-tabla-borrar");
    btnEdit.classList.add("btn-tabla-borrar");
    tdboton.appendChild(btnBorrar);
    tdboton.appendChild(btnEdit);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(tdboton);

    //AGREGA RESALTADO A LAS OFERTAS
    resaltarOfertas(producto.precio, tr);

    table.appendChild(tr);
  }

  function resaltarOfertas(precio, tr){
    if (precio <= 500) {
      tr.classList.add("intermitente");
      tr.classList.add(colores[colores.length - 1]);
    }
  }

  function addEventDelete(btn){
    //ASIGNA EVENTO BOTON BORRAR FILA
      btn.addEventListener("click", function (event) {
        let id = this.parentNode.parentNode.id;
        deleteDatos(id);
      });
  } 

  //OBTENGO UN SOLO DATO POR ID
  function getDato(id){
    fetch(baseURL + groupID + "/" + collectionID+ "/" + id)
    .then(function (r) {
      if (!r.ok) {
        console.log("ERROR!!");
      }
      return r.json();
    })
    .then(function (json) {
      console.log(json);
      
      nombreProducto.value = json.information.thing.nombre;
      descripcionProducto.value = json.information.thing.descripcion;
      tamanioProducto.value = json.information.thing.tamanio;
      precioProducto.value = json.information.thing.precio;

    })
    .catch(function (e) {
      console.log(e);
    });
  }

  function addEventsEditar(btn){
    //ASIGNA EVENTO BOTON EDITAR DATOS FILA
    btn.addEventListener("click", function (event) {
      let id = this.parentNode.parentNode.id;
      getDato(id);

      let btnConfEdicion = document.createElement("button");
      btnConfEdicion.innerText = "Confirmar Edición";
      
      let btnCancelEdicion = document.createElement("button");
      btnCancelEdicion.innerText = "Cancelar Edicion";

      btnCancelEdicion.classList.add("btn-form-productos");
      btnCancelEdicion.classList.add("btnCancelarEdicion");
      btnConfEdicion.classList.add("btn-form-productos");
      btnConfEdicion.classList.add("btnConfirmarEdicion");

      let formProducto = document.querySelector('.formulario-agregar-producto');

      document.getElementById("btn-agregar-tabla").classList.add("oculto");
      document.getElementById("btn-agregar-varios-tabla").classList.add("oculto");
      document.getElementById("btn-vaciar-tabla").classList.add("oculto");

      formProducto.appendChild(btnConfEdicion);
      formProducto.appendChild(btnCancelEdicion);

      
      //SE PUEDE MODULARIZAR
      btnConfEdicion.addEventListener('click', function(event){
        event.preventDefault(); 
        
        let nuevoProducto = crearProducto(nombreProducto.value, descripcionProducto.value, tamanioProducto.value, precioProducto.value);
        console.log(nuevoProducto);
        
        putDatos(nuevoProducto, id);
      })

      //SE PUEDE MODULARIZAR
      btnCancelEdicion.addEventListener('click', function(event){
        event.preventDefault(); 
        document.getElementById("btn-agregar-tabla").classList.remove("oculto");
        document.getElementById("btn-agregar-varios-tabla").classList.remove("oculto");
        document.getElementById("btn-vaciar-tabla").classList.remove("oculto");
        document.querySelector(".btnConfirmarEdicion").remove();
        document.querySelector(".btnCancelarEdicion").remove();
        limpiarCamposFormulario();
      })
    })
  }


  function putDatos(producto, id){
    fetch(baseURL + groupID + "/" + collectionID+ "/" + id, {
      "method": "PUT",
      "mode": "cors",
      "headers": { "Content-Type": "application/json" },
      "body": JSON.stringify(producto)
    })
      .then(response => {
        if (!response.ok) {
          console.log("ERROR- No se pudo editar el dato");
        }

        document.getElementById("btn-agregar-tabla").classList.remove("oculto");
        document.getElementById("btn-agregar-varios-tabla").classList.remove("oculto");
        document.getElementById("btn-vaciar-tabla").classList.remove("oculto");
        document.querySelector(".btnConfirmarEdicion").remove();
        document.querySelector(".btnCancelarEdicion").remove();
        
        limpiarCamposFormulario();

        return response.json();
      })
      .then(json => {
        actualizarFila(producto, id);
      })
      .catch(e => {
        console.log(e);
      })
  }

  //VER 
  function actualizarFila(producto, id){
    let fila = document.getElementById(id);

    fila.childNodes[0].innerHTML = producto.thing.nombre;
    fila.childNodes[1].innerHTML = producto.thing.descripcion;
    fila.childNodes[2].innerHTML = producto.thing.tamanio;
    fila.childNodes[3].innerHTML = "$ "+producto.thing.precio;

    resaltarOfertas(fila.childNodes[3].innerHTML, fila);
  }

  //LLAMADA AJAX DELETE
  function deleteDatos(id) {    
    fetch(baseURL + groupID + "/" + collectionID + "/" + id, {
      method: "DELETE"
    })
    .then(function (r) {
      return r.json();
    })
    .then(function (json) {
      let fila = document.getElementById(id);
      fila.remove();
      cantidadProductos--;
      mostrarInformacionOfertas(cantidadProductos);
    })
    .catch(function (e) {
      console.log(e);
    });
  }
  
  
  // PARRAFO INFORMACION OFERTAS
  function mostrarInformacionOfertas(cantidadProductos){
    if (cantidadProductos == 0) {
      document.querySelector(".ofertas").classList.add("oculto");
    } else {
      document.querySelector(".ofertas").classList.remove("oculto");
    }
  } 


  //FUNCION PARA RESALTAR LAS OFERTA
  function resaltado() {
    let intermitentes = document.getElementsByClassName("intermitente");
    let i = 0;
    for (i = 0; i < intermitentes.length; i++) {
      if (cantcolores == 0) {
        intermitentes[i].classList.add(colores[cantcolores]);
        intermitentes[i].classList.remove(colores[colores.length - 1]);
      } else {
        intermitentes[i].classList.add(colores[cantcolores]);
        intermitentes[i].classList.remove(colores[cantcolores - 1]);
      }
    }
    cantcolores = (cantcolores + 1) % colores.length;
  } 
});
