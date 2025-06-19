// Lista de colores permitidos
const colores = ["green", "blue", "red"];

// Función que selecciona un color aleatorio
function colorAleatorio(elemento) {
  const colores = ["green", "blue", "red"];
  const indice = Math.floor(Math.random() * colores.length);
  elemento.style.color = colores[indice];
}
