console.log("HoLIIIIS");
//VARIABLES
//Definir variables, hay tres tipos de crear variables 

var varPrueba1 = "soy una var que ya no debe usarse " // esta no se usa 

let varLet = "hola, usenme cuando quieran reasignar" 

const varConstante = "soy una constante,mi valor no cambia"

//IMPRIMIR

console.log(`varlet 8: ${varLet}`)
varLet = 5;
console.log(`varlet 10: ${varLet}`) 
//varConstante = false;
console.log(`varConstante: ${varConstante}`)
const miVector = []
console.log(`miVector`, miVector)
//miVector= [] error
miVector.push(4)
console.log(`miVector`, miVector)

//OBJETOS
const miObjeto1 = {
        edad: 34,
        nombre: "mili"
    }

const miObjeto2 = {
        edad: 22,
        nombre: "valen",    
    }

miObjeto1[`profesion`] = `jugador profesional de lol`
miObjeto2.profesion = `arquero`

console.log(`31`, [] == false)
//console.log(`31`, [] === false)

if (miObjeto1 === miObjeto2){
    console.log("Tiene la misma edad")
}
else 
    console.log("NO SON IGUALES")

if (miObjeto2.edad >= miObjeto1.edad)
    console.log(`${miObjeto2.nombre} es mayor, ${miObjeto2[`profesion`]}`)





//Ciclo For

miVector.push(miObjeto1);
miVector.push(miObjeto2);


let variableSinValor;
console.log(`variableSinValor`, variableSinValor)
for(let i=0; i< miVector.length; i++){
    console.info(miVector[i])
}

for (const persona of miVector) {console.info(persona.nombre)}

//DEFINIR FUNCIONES 

function esMayorQueKevin(persona){
    const minion = {
        edad: 763,
        nombre: "Kevin"
    }
    if(persona.edad> minion.edad)
        console.log(`${persona.nombre} es mayor que kevin`)
    else
        console.log(`${persona.nombre} No es mayor que kevin`)
}
const obj3 = {}
esMayorQueKevin(miObjeto1);
//esMayorQueKevin(); //explota
esMayorQueKevin(obj3);

//const esMayorQueKevinArrow
const esMAyorQueKevinArrow =(persona) => {
    const minion = {
        edad: 763,
        nombre: "Kevin"
    }
    if(persona.edad> minion.edad)
        console.log(`${persona.nombre} es mayor que Kevin`)
    else
        console.log(`${persona.nombre} No es mayor que Kevin`)
}
esMAyorQueKevinArrow(miObjeto2);
//esMAyorQueKevinArrow(); //explota
esMAyorQueKevinArrow(obj3);
