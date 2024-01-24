$(document).ready(function () {
    const cartasContainer = $("#row1");
    const carruselContainer = $('.carousel-inner');
    let cartasData;

    function cargarCarrusel() {
        $.getJSON('../json/imgcarrusel.json')
            .done((carrusel) => {
                carruselContainer.empty();
                carrusel.forEach((img, index) => {
                    const carruselHTML = `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img.imagen}" class="d-block w-100" alt="...">
                        </div>`;
                    carruselContainer.append(carruselHTML);
                });
            })
            .fail((error) => {
                console.error('Error al cargar el archivo JSON para carrusel:', error);
            });
    }

    function obtenerRutaImagen(anchoVentana, carta) {
        return anchoVentana < 768 ? carta.imagesmall : carta.imagen;
    }

    function cargarCartas() {
        if (cartasContainer.length > 0) {
            cartasContainer.empty();
            const anchoVentana = $(window).width();

            cartasData.forEach((carta) => {
                const rutaImagen = obtenerRutaImagen(anchoVentana, carta);

                const cartaHtml = `
                    <div class="col-lg-4 col-md-12">
                        <div class="card text-center border border-primary shadow-0">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="${rutaImagen}" class="img-fluid carta-imagen" />
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                                </a>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${carta.cardTitle}</h5>
                                <p class="card-text">${carta.cardText}</p>
                                <p class="card-text">Precio: $${carta.precio}</p>
                                <button type="button" class="btn btn-primary agregar-al-carrito" data-title="${carta.cardTitle}">
                                    ${carta.buttonText}
                                </button>
                            </div>
                            <div class="card-footer">${carta.cardFooter}</div>
                        </div>
                    </div>`;

                cartasContainer.append(cartaHtml);
            });

            $('.agregar-al-carrito').on('click', function () {
                const cardTitle = $(this).data('title');
                const selectedProduct = cartasData.find(producto => producto.cardTitle === cardTitle);
                agregarAlCarrito(selectedProduct);
            });
        }
    }

    function agregarAlCarrito(producto) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    cargarCarrusel();

    $.getJSON('../json/cartas.json')
        .done((data) => {
            cartasData = data;
            cargarCartas();
        })
        .fail((error) => {
            console.error('Error al cargar el archivo JSON para cartas:', error);
        });

    $(window).resize(() => {
        cargarCartas();
    });
});
