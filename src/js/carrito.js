$(document).ready(function () {
    // Obtén el contenedor del carrito en la página carrito.html
    var carritoContainer = $("#lista-carrito");
    var totalContainer = $("#total");

    function cargarCarrito() {
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoContainer.empty(); // Limpiar el contenedor antes de volver a cargar los productos
    
        var total = 0; // Variable para calcular el total del carrito
    
        $.each(carrito, function (index, producto) {

            if (producto && producto.imagesmall) {
                var productoHtml = `
                    <div class="producto-en-carrito">
                        <p><img src="${producto.imagesmall}">  - ${producto.cardTitle} - Precio: $${producto.precio}</p>
                        <button class="btn btn-danger eliminar-del-carrito" data-id="${index}">Eliminar</button>
                    </div>`;
                carritoContainer.append(productoHtml);
    
                // Suma el precio del producto al total
                total += parseFloat(producto.precio);
            }
        });
    
        // Actualiza el total en la página
        totalContainer.text(total.toFixed(2));
    
        // Agregar evento para el botón de eliminar
        $('.eliminar-del-carrito').on('click', function () {
            var productId = $(this).data('id');
            eliminarDelCarrito(productId);
        });
    }

    function eliminarDelCarrito(productId) {
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        // Elimina el producto del carrito según el índice
        carrito.splice(productId, 1);
    
        // Guarda el carrito actualizado en el almacenamiento local
        localStorage.setItem('carrito', JSON.stringify(carrito));
    
        // Actualiza la visualización del carrito
        cargarCarrito();
    }

    // Cargar el carrito al cargar la página
    cargarCarrito();


});
