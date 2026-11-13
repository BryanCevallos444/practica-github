// saludo.js - función básica de saludo
function saludar(nombre = "mundo") {
  return `¡Hola, ${nombre}!`;
}

console.log(saludar());
console.log(saludar("Bryan"));

module.exports = { saludar };
