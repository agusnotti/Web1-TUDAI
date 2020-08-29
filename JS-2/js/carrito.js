document.addEventListener('DOMContentLoaded', function (){

    let items = []; // ARREGLO VACIO
    let precios = [];
    function agregarAlCarrito(){
        let item = document.querySelector('#item').value;
        let precio = document.querySelector('#precio').value;
        
        items.push(item);
        precios.push(parseInt(precio));
        
        actualizarCarrito();
        
    }

    function actualizarCarrito(){
        let total = 0;
        let listaCompras = '';

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const precio = precios[i];
            listaCompras += "<li>"+ item +"</li>";
            total += precio;
        }
        document.querySelector('#total').innerHTML = total;
        document.querySelector('#lista-compras').innerHTML = listaCompras;


    }

    document.querySelector('#btn-agregar-a-carrito').addEventListener('click', agregarAlCarrito);

})