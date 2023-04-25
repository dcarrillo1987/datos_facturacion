// Variables
const botonesInsertar = document.querySelectorAll('.btn-insertar');
const botonesEliminar = document.querySelectorAll('.btn-eliminar');
const myElement = document.querySelector('#my-element');
const fechaActual = new Date().toJSON().slice(0, 10);

// Eventos
if (botonesInsertar) {
  const botonesArray = Array.from(botonesInsertar);
  botonesArray.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      if (!confirm('¿Está seguro de ingresar la información?')) {
        evento.preventDefault();
      }
    });
  })
}

if (botonesEliminar) {
  const botonesArray = Array.from(botonesEliminar);
  botonesArray.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      if (!confirm('¿Está seguro de eliminar la información?')) {
        evento.preventDefault();
      }
    });
  })
}

if (myElement) {
  myElement.value = 'algún valor';
}

// Funciones
function obtenerFechaCompleta() {
  const fechaCompleta = new Date();
  const year = fechaCompleta.getFullYear();
  let month = fechaCompleta.getMonth() + 1;
  let day = fechaCompleta.getDate();
  let hours = fechaCompleta.getHours();
  let minutes = fechaCompleta.getMinutes();
  let seconds = fechaCompleta.getSeconds();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Ejecución
document.getElementById("FechaActual").value = fechaActual;
document.write(obtenerFechaCompleta());

var url = window.location.href;

// Comprobar si la URL coincide con la página en la que se desea mostrar la ventana emergente
if (url == "http://172.16.120.10:8000/noticias") {
    // Mostrar la ventana emergente
    alert("¡Bienvenido a la página deseada!");
}

document.getElementById("oficio").addEventListener("keypress", function(event) {
  if (event.key === "/") {
    event.preventDefault();
  }
});

function imprimirTabla() {
  // Crea la ventana emergente
  var win = window.open('', 'Imprimir Tabla', 'height=500,width=800');

  // Agrega el contenido HTML a la ventana emergente
  var table = document.getElementById('tabla1'); // Cambia 'my-table' al ID de tu tabla
  var html = table.outerHTML;
  win.document.body.innerHTML = html;

  // Imprime la ventana emergente
  win.print();
}

// Obtener el campo de entrada
const inputField = document.getElementById('turno');

// Agregar un evento para detectar cuando se escribe en el campo
inputField.addEventListener('input', function() {
  // Convertir el texto a mayúsculas
  const text = inputField.value.toUpperCase();
  // Asignar el texto en mayúsculas al campo de entrada
  inputField.value = text;
});
