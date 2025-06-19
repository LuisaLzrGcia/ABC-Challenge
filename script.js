// Lista de colores permitidos
const colores = ["green", "blue", "red"];

// Función que selecciona un color aleatorio
function obtenerColorAleatorio() {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}

// Selecciona todos los elementos h5 y les agrega un evento de clic
document.querySelectorAll("h5").forEach((etiqueta) => {
  etiqueta.addEventListener("click", () => {
    etiqueta.style.color = obtenerColorAleatorio();
  });
});
