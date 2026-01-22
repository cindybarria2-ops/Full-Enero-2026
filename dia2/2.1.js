function contieneS(texto) {
  return texto.toLowerCase().includes('s');
}

console.log(contieneS('Hola Mundo')); // false
console.log(contieneS('Silla')); // true    