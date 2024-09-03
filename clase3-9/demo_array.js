let miArray = [3,4,5];
console.log("Mi arreglo", miArray)
console.log("Longitud", miArray.length)
console.log("Agregar elemento en la ultima posicion:", miArray.push(20))
console.log("Mi arreglo", miArray)
console.log("Remover elemento", miArray.pop());
console.log("Mi arreglo", miArray);
console.log("Verificar el tipo usando typeof:", typeof miArray)

console.log("Verificar el tipo usando constructor:", miArray.constructor.toString().indexOf("Array")>-1)

//Verificar para otro tipo de variable:
let numero = 204
console.log("Mi arreglo: ", numero)
console.log("Tipo:", typeof numero)
console.log("Verificar constructor:", numero.constructor.toString().indexOf("Array")>-1)

