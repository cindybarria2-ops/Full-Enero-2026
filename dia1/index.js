var prompt = require('prompt');

/* ======== Nivel 1 ======== */
console.log('Ejercicio 1.1 \n')
console.log("Cindy Barria \n");
console.log('Ejercicio 1.2 \n')
let number = 100 * 100;
console.log(number)
console.log('Ejercicio 1.3 \n')
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(`El numero entre 50 y 500 es ${randomNumber(50, 500)} \n`);

function cuadradoLleno() {
    console.log('Ejercicio 2.1 \n')
    let linea = "";

    for (let i = 0; i < 5; i++) {
        linea = "";
        for (let j = 0; j < 5; j++) {
            linea += "*";
        }
        console.log(linea);
    }
}

cuadradoLleno();

function cuadradoHueco() {
    console.log('Ejercicio 2.2 \n')
    let linea = "";

    for (let i = 0; i < 5; i++) {
        linea = "";
        for (let j = 0; j < 5; j++) {
            if (i === 0 || i === 4 || j === 0 || j === 4) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

cuadradoHueco();

function trianguloIzquierda() {
    console.log('Ejercicio 2.3 \n')

    for (let i = 1; i <= 5; i++) {
      let linea = "";
        for (let j = 1; j <= 5; j++) {
            if (j<=i) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

trianguloIzquierda();

function trianguloDerecha() {
    console.log('Ejercicio 2.4 \n')

    for (let i = 1; i <= 5; i++) {
      let linea = "";
        for (let j = 1; j <= 5; j++) {
            if (j>=i) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

trianguloDerecha();

console.log("Ejercicio 3-1");


