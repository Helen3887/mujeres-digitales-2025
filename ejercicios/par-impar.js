
const numero="187";

if (isNaN(numero)) {
    console.log("Entrada invalida, no es un numero");
    return;
} else if(numero % 2 === 0){
    console.log("Es par")
} else {
    console.log("Es impar")
}
