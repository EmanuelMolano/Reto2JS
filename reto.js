var enteros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var dato = 11;
var resultado = mayorArray(enteros, dato);


function mayorArray(enteros, dato) {
  for (let i = 0; i < enteros.length; i++) {
    if (enteros[i] === dato.toString()) {
      return enteros[i];
    }
  }
  return null;
}

console.log(resultado);


for (let i = 0; i < enteros.length; i++) {
  console.log(enteros[i]);
}

let i = 0;
while (i < enteros.length) {
  console.log(enteros[i]);
  i++;
}

let j = 0;
let impares = 0;
do {
  if (enteros[j] % 2 !== 0) {
    impares++;
  }
  j++;
} while (j < enteros.length);

console.log("El número de impares es: " + impares);

