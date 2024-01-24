# GymBoost - Tienda de Suplementos Deportivos

## Descripción
GymBoost es una tienda en línea especializada en la venta de suplementos deportivos para ayudar a los usuarios a alcanzar sus metas fitness. El proyecto consta de diversas carpetas para organizar los archivos relacionados con HTML, CSS, JavaScript, JSON e imágenes.

## Estructura de Carpetas
- **html:** Contiene archivos HTML para diferentes secciones como el índice, el carrito de compras y páginas específicas de productos.
- **css:** Almacena los estilos CSS para la apariencia visual de la tienda.
- **js:** Incluye archivos JavaScript para la funcionalidad interactiva, como la gestión del carrito y la carga dinámica de contenido.
- **json:** Contiene archivos JSON que podrían utilizarse para almacenar información sobre productos, precios, etc.
- **img:** Guarda las imágenes utilizadas en la tienda.



## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript
- Bootstrap (versión 5.3.2)

## Instrucciones de Ejecución
1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para acceder a la tienda web.

## Colaboradores
- [César Del Castillo Martín]

## Estructura para todos los archivos HTML

- **Encabezado**
  - Logotipo
  - Formulario de búsqueda
  - Menú desplegable
  - Ícono de carrito de compras

- **Pie de página**
  - Redes Sociales
  - Formulario boletín
  - Texto descriptivo
  
---

## Archivos HTML:
# Index
 -*Carrusel realizado con BootStrap*
    ![image](https://github.com/cesar18012/GymBoost/assets/122441597/ba771932-29c4-4a5c-bf19-f1812e2773f2)
    
 -*Cartas de recomendaciones*
  - Consta de un contenedor para guardar las cartas y desde el id row1 pintamos las cartas desde el Jquery
    ![image](https://github.com/cesar18012/GymBoost/assets/122441597/ea97b490-b1ca-4580-8be2-685a666fe13f)

# Carrito
 -*Productos Seleccionados*
  En el id lista-carrito pintamos los porductos seleccionados y el id total-container pintamos la suma del precio de los productos
  
 ![image](https://github.com/cesar18012/GymBoost/assets/122441597/141b5ec5-227b-4817-a060-248d2bf3f11c)

# Productos (Proteina, Vitaminas, Creatina, Snacks): Son todos iguales
-*Desplegable de productos*
Tenemos un dropdown que es un desplegable de bootstrap en el que pintamos los tipos de porductos que tenemos en el json.

-*Cartas*
Pintamos los porductos que tenemos en nuestro json.

![image](https://github.com/cesar18012/GymBoost/assets/122441597/7fdc0d05-cbc9-4f87-8768-9e7ad63ac89d)

##  Explicación archivos JS:
## Carrito

# Funcionalidad 
Este script jQuery utiliza `$(document).ready()` para asegurarse de que el código se ejecute después de que el DOM esté completamente cargado. Su principal función es gestionar la visualización y funcionalidad del carrito de compras en la página `carrito.html`.

# Elementos Manipulados
- **carritoContainer**: El contenedor del carrito en la página, identificado como `$("#lista-carrito")`.
- **totalContainer**: El contenedor del total del carrito, identificado como `$("#total")`.

# Funciones Principales
- **cargarCarrito()**: Carga y muestra los productos almacenados en el carrito desde el almacenamiento local. Calcula el total del carrito y actualiza la interfaz de usuario en consecuencia. También maneja la lógica para eliminar productos del carrito.
  
- **eliminarDelCarrito(productId)**: Elimina un producto específico del carrito según el índice proporcionado. Actualiza el carrito en el almacenamiento local y vuelve a cargar la interfaz del carrito.

# Almacenamiento Local
El script utiliza `localStorage` para almacenar y recuperar la información del carrito, asegurando que los datos persistan incluso después de recargar la página.

# Eventos
- Se utiliza el evento `click` en los botones "Eliminar" dentro de la lista de productos en el carrito para invocar la función `eliminarDelCarrito(productId)`.

# Uso
Este código se integra en la página `carrito.html` para gestionar de manera dinámica la presentación y manipulación de productos en el carrito de compras.

![image](https://github.com/cesar18012/GymBoost/assets/122441597/dd5b006f-7fa5-4f94-9640-9659c6780d26)

## Inicio

# Funcionalidad
Este script jQuery se ejecuta cuando el documento está completamente cargado y se encarga de dinámicamente cargar cartas de productos y configurar un carrusel de imágenes en una página web.

# Elementos Clave
- **cartasContainer**: Contenedor HTML (`<div>`) identificado como `#row1` que almacena y muestra las cartas de productos.

- **carruselContainer**: Contenedor HTML (`<div>`) con la clase `.carousel-inner` donde se insertan dinámicamente las imágenes del carrusel.

- **cartasData**: Variable que almacena los datos de las cartas de productos.

# Funciones Principales
1. **cargarCarrusel()**: Utiliza Ajax para cargar datos desde un archivo JSON (`imgcarrusel.json`) y configura dinámicamente el carrusel de imágenes.

2. **obtenerRutaImagen(anchoVentana, carta)**: Función que devuelve la ruta de la imagen (normal o pequeña) dependiendo del ancho de la ventana.

3. **cargarCartas()**: Llena dinámicamente el contenedor de cartas (`cartasContainer`) con datos de productos. También gestiona la interacción del usuario, como el clic en "Agregar al Carrito".

4. **agregarAlCarrito(producto)**: Agrega un producto seleccionado al carrito almacenado en el almacenamiento local.

# Almacenamiento Local
- El código utiliza `localStorage` para almacenar temporalmente productos seleccionados en el carrito.

# Uso
Este código es esencial para la funcionalidad de la página web, proporcionando una experiencia interactiva al mostrar productos y permitir a los usuarios agregarlos al carrito de compras.

## Productos (Proteina, Vitaminas, Creatina, Snacks)

# Funcionalidad
Este script jQuery se ejecuta cuando el documento está completamente cargado y se encarga de cargar dinámicamente productos desde un archivo JSON. Permite filtrar los productos por categoría, agregar productos al carrito de compras y visualizar el carrito actualizado.

# Elementos Clave
- **carrito**: Arreglo que representa el carrito de compras y se inicializa como vacío.

# Funciones Principales
1. **cargarDatosDesdeJSON()**: Carga datos desde el archivo JSON (`proteina.json`) y llena el menú desplegable con opciones dinámicamente. Además, llama a la función `renderizarProductos` para mostrar inicialmente todos los productos.

2. **renderizarProductos(productos)**: Toma una lista de productos y los muestra en la página. Permite filtrar productos por categoría seleccionada en el menú desplegable.

3. **agregarAlCarrito(producto)**: Agrega un producto al carrito. Verifica si el producto ya está en el carrito y ajusta la cantidad en consecuencia.

4. **cargarCarrito()**: Función que puede ser personalizada para cargar y actualizar la visualización del carrito en la interfaz.

# Uso
Este código es esencial para la funcionalidad de la página web, permitiendo a los usuarios explorar productos, filtrar por categoría y agregar productos al carrito de compras.

---

# Estructura para  los archivos JSON

## Ejemplo de Producto
Cada objeto en el conjunto de datos representa un producto. Aquí tienes un ejemplo desglosado:

{
 id: Identificación única del producto (ej., "Vitamina C").
 
imagen: Ruta de la imagen principal del producto.

imagesmall: Ruta de la imagen pequeña del producto.

cardTitle: Título de la tarjeta del producto.

descripcion: Descripción del producto.

boton: Etiqueta del botón de acción (ej., "Agregar al carrito").

precio: Precio del producto.
}

---
¡Gracias por utilizar GymBoost! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.
