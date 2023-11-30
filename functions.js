function esPar(number){
return number%2===0;
}

function filtrarPares(array) {
    return array.filter(esPar);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numeros);
console.log("Números pares filtrados:", numerosPares);