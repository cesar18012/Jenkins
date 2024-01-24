$(document).ready(function () {
  // Carrito de compras (inicialmente vacío)
  var carrito = [];

  // Cargar datos desde el archivo JSON
  $.getJSON('../json/proteina.json', function (data) {
    // Filtrar productos únicos por id
    var uniqueProducts = [...new Map(data.map(producto => [producto.id, producto])).values()];

    // Llenar el menú desplegable con opciones dinámicamente
    $('#dropdownMenuLink').append(uniqueProducts.map(producto => `<option value="${producto.id}">${producto.id}</option>`));

    // Llamar a la función de renderizado para mostrar todas las opciones inicialmente
    renderizarProductos(data);

    // Manejar el cambio en el menú desplegable
    $('#dropdownMenuLink').change(function () {
      // Obtener el valor seleccionado
      var selectedProductId = $(this).val();

      // Filtrar los productos correspondientes por id
      var selectedProducts = selectedProductId !== "seleccionar" ? data.filter(producto => producto.id === selectedProductId) : data;

      // Limpiar el contenedor de productos
      $('#productos-container').empty();

      // Llamar a la función de renderizado para mostrar el producto seleccionado
      renderizarProductos(selectedProducts);
    });

    // Manejar clic en el botón "Añadir al carrito"
    $(document).on('click', '.btn-add-to-cart', function () {
      var cardTitle = $(this).data('title');
      var selectedProduct = data.find(producto => producto.cardTitle === cardTitle);

      // Agregar el producto al carrito
      agregarAlCarrito(selectedProduct);

      // Actualizar la visualización del carrito
      cargarCarrito();
    });
  });

  // Función de renderizado que toma una lista de productos y los muestra en la página
  function renderizarProductos(productos) {
    var windowWidth = $(window).width();
    var isSmallScreen = windowWidth < 768;

    $.each(productos, function (index, product) {
      // Utilizar clases de Bootstrap para la responsividad de la imagen
      var imageClasses = `img-fluid d-block mx-auto mb-3${isSmallScreen ? ' img-small' : ''}`;

      // Obtener la ruta de la imagen según el ancho de la ventana
      var imageSrc = isSmallScreen ? product.imagesmall : product.imagen;

      var cardHtml = `
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="card rounded shadow-sm border-3">
            <div class="card-body p-4">
              <img src="${imageSrc}" alt="" class="${imageClasses}">
              <h5><a href="#" class="text-dark">${product.cardTitle}</a></h5>
              <p class="small text-muted font-italic">${product.descripcion}</p>
              <p class="font-italic">Precio: ${product.precio}</p>
              <button class="btn btn-primary btn-add-to-cart" data-title="${product.cardTitle}">Añadir al carrito</button>
            </div>
          </div>
        </div>`;

      // Agregar la carta del producto al contenedor
      $('#productos-container').append(cardHtml);
    });
  }

  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto) {
    // Obtener el carrito actual desde el almacenamiento local
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    var productoExistente = carrito.find(item => item.cardTitle === producto.cardTitle);

    if (productoExistente) {
      // Si el producto ya está en el carrito, simplemente aumentamos la cantidad en uno
      productoExistente.cantidad += 1;
    } else {
      // Si el producto no está en el carrito, lo agregamos a la lista con cantidad 1
      producto.cantidad = 1;
      carrito.push(producto);
    }

    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  // Función para cargar y actualizar la visualización del carrito

});
