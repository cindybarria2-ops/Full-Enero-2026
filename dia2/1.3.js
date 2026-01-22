var prompt = require('prompt');
prompt.start();

console.log('Ejercicio 1.3 \n')

function multiplicar(){
prompt.get(['number'], function (err, result){
  let numberValue = result.number;
  console.log(`Tabla de multiplicar de 1 al 10 del ${numberValue}`)
  for (let i = 1; i <= 10; i++) {
  console.log(`El resultado de ${numberValue} * ${i} = ${result.number * i}`)
}

})
}

multiplicar();