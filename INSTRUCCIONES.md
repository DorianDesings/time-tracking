- PASO OBLIGATORIO: Realiza una petición asíncrona con fetch y saca los datos por consola.

# OPCIONES DISPONIBLES

- Para obtener los datos de cada objeto puedes hacerlo con text-content o con un data-, ésta es la opción que os recomiendo, imagináos que es multi-idioma, el text-content no es una fuente de datos fiable.

- Cualquiera de los tres caminos que os propongo necesita tener una opción por defecto para mostrar datos al cargar la web, no podéis escribir los datos en el HTML ni modificar el archivo data.json

- Puedes crear la tarjeta desde 0 desde JavaScript
- Puedes dejar la tarjeta vacía en el HTML y a través de un Id rellenar el contenido con los datos
- Puedes poner un Id a cada parte que quieres modificar y cambiar el contenido manualmente

- A partir de aquí sólo faltan dos pasos, el primero es conseguir que se cambie el contenido cada vez que hacemos click en uno de los elementos de la lista de filtrado, "daily", "weekly" o "monthly" empieza creando ese evento en el padre (card-list) y muestra por consola el resultado del filtrado, una vez lo tengas, sólo tendrás que cambiar el text content de cada una de las tarjetas, te recomiendo usar un querySelectorAll y utilizar un bucle para sustituir el contenido.
