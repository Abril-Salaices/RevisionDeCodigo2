//var ya no se utiliza, #form no esta en el documento html, es .formulario
const formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {

  e.preventDefault(); //para evitar que se recargue la pagina, pero estaba incompleto
  
  const n = formulario.elements[0].value;
  const e = formulario.elements[1].value;
  let na = formulario.elements[2].value;

  /*esta parte del codigo se cambio por una forma mas directa de obtener los valores del formulario
  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)
*/
//validar el nombre
  if (nombre.length === 0) {
   formulario.elements[0].classList.add("error"); //se modifica la validacion del nombre y se agrega ;
  }
  if (edad < 18 || edad > 120) {
   formulario.elements[1].classList.add("error");//se modifica la validacion de edad y se agrega ;
   return;
  }
//si los datos son validos se agrega invitado
if (nombre.length > 0 && edad >= 18 && edad <= 120) {
  agregarInvitado(nombre, edad, nacionalidad);//Se ajustó la condición que valida la edad para incluir a personas de 18 y 120 años (>= 18 && <= 120)
}
}
/*este boton no es necesesario aqui
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
*/

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

const lista = document.getElementById("lista-de-invitados");
//crear div para cada invitado
const elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista");//added no es correcto, deberia ser add
lista.appendChild(elementoLista);
/*Esta parte del codigo esta repetida no es necesaria aqui
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
*/
//funcion para crear elemento
//se cambian los nombres y los tipos de variables
function crearElemento(descripcion, valor) {
const span = document.createElement("span");
const input= document.createElement("input")
const br = document.createElement("br")
span.textContent = descripcion + ": ";
input.value = valor ;

elementoLista.appendChild(span);
elementoLista.appendChild(input);
elementoLista.appendChild(br);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

//boton para eliminar invitado
const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);;

//accion al hacer click en eliminar
 botonBorrar.onclick = function() {
elementoLista.remove();
  };
}