// Obtengo el formulario y el div donde mostraré mensajes
const form = document.getElementById("formJugador");
const mensaje = document.getElementById("mensaje");

// Arreglo con las posiciones válidas
const posiciones = ["base", "escolta", "alero", "ala-pivot", "pivot"];

// Evento que se ejecuta cuando se envía el formulario
form.addEventListener("submit", function (e) {
  // Evito que la página se recargue
  e.preventDefault();

  // Obtengo los valores ingresados
  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const posicion = document.getElementById("posicion").value;

  // Muestro el contenedor de mensajes
  mensaje.style.display = "block";

  // Validación de campos vacíos o inválidos
  if (nombre === "" || isNaN(edad) || isNaN(altura) || posicion === "") {
    mostrarMensaje("⚠ Complete todos los campos correctamente.", false);
    return;
  }

  // Validación de edad mínima
  if (edad <= 15) {
    mostrarMensaje("Edad mínima requerida: 16 años.", false);
    return;
  }

  // Validación de altura mínima
  if (altura < 160) {
    mostrarMensaje("Altura mínima requerida: 160 cm.", false);
    return;
  }

  // Validación de posición válida
  if (!posiciones.includes(posicion)) {
    mostrarMensaje("Posición inválida.", false);
    return;
  }

  // Clasificación por categoría usando operador ternario
  const categoria = edad <= 18 ? "Juvenil" : "Adulto";

  // Si todo está correcto, muestro mensaje de éxito
  mostrarMensaje(
    `Inscripción exitosa<br>
         Jugador: ${nombre}<br>
         Categoría: ${categoria}`,
    true,
  );
});

// Función para mostrar mensajes dinámicos
function mostrarMensaje(texto, exito) {
  mensaje.innerHTML = texto;

  // Cambio el color dependiendo si es error o éxito
  mensaje.style.backgroundColor = exito ? "#1f5f3a" : "#5f1f1f";
}
