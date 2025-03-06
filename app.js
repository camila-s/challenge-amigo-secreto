// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para agregar amigos 
let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
      alert("Por favor, inserte un nombre.");
      return; // Salir de la función si el campo está vacío
      }

    if (!amigos.includes(nombre)) {
     amigos.push(nombre); // Agregar al array
     actualizarLista(); // Mostrar en la interfaz
     } else {
     alert("Ese amigo ya está en la lista.");
     }

 input.value = ""; // Limpiar el campo de entrada
 }

function actualizarLista() {
 let lista = document.getElementById("listaAmigos");
 lista.innerHTML = ""; // Limpiar la lista antes de actualizar

 amigos.forEach(nombre => {let li = document.createElement("li"); li.textContent = nombre; lista.appendChild(li);});
 //for (let i = 0; i < amigos.length; i++) {
    //let li = document.createElement("li");
    //lista.appendChild(li); // Agregar cada nombre como <li>     
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${amigoSeleccionado} ha sido seleccionado!</li>`;

}
//implementar una funcion para agregar amigos