var prompt = require('prompt');
function saludar(nombre) {
  console.log("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
  prompt.start();

  prompt.get(['nombre'], function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    callback(result.nombre);
  });
}

procesarEntradaUsuario(saludar);