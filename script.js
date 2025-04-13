const boton = document.getElementById("agregarBoton");
const lista = document.getElementById("miLista");

boton.addEventListener("click", function() {
    let elemento = prompt("Ingresa un elemento para la lista:");
    if (elemento) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = elemento;
        lista.appendChild(nuevoElemento);
    }
});