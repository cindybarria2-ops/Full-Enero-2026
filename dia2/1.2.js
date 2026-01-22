console.log('Ejercicio 1.2 \n')


var prompt = require('prompt-sync')();

function saludar() {
  const nombre = prompt('Por favor ingresa tu nombre: ');
  console.log('Hola ' + nombre);
}

saludar();