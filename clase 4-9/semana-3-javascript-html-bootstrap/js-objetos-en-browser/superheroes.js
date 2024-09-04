console.log("Hola")
const poderes = [

    {
        nombre: "Superfuerza",
        id: 1
    }
    ,
    {
        nombre: "estrategia",
        id: 2
    }
    ,
    {
        nombre: "velocidad",
        id: 3
    }
    ,
    {
        nombre: "Superoido",
        id: 4
    }
]
const superheroes =[
     {
        id: 1,
        nombre: "Superman",
        poder: poderes [0] ,
        activo: true
    }
    ,
    {
        id: 2,
        nombre: "Batman",
        poder: poderes [1] ,
        activo: false
    }
]

function agregarFila(s, tabla){
    const fila = `<tr>
    <td scope="row">${s.id}</td>
    <td>${s.nombre}</td>
    <td>${s.poder.nombre}</td>
    <td>${s.activo}</td>
</tr>`;
const newRowHTML = tabla.insertRow //creando una nueva fila en la tabla 
(tabla.rows.length) 
newRowHTML.innerHTML = fila //en ese html, inserta el tr que hice anteriormente
}


function agregarSupers() {
    const tabla = document.getElementById
    ("datos")
    for (let s of superheroes) {
        agregarFila(s,tabla)
    }
}

const filtrar = (nombreFiltrado) =>{
    const filtrado = superheroes.find((s)=>{return s.nombre === nombreFiltrado})

    if (filtrado){
        const tabla = document.getElementById("datos")
        agregarFila(filtrado,tabla)
    }


}
//Lo que hace es escuchar un evento y ejecutar una funcion cuando el evento suceda
document.addEventListener
('DOMContentLoaded', (event)=>{
    agregarSupers();

    const botonFiltrar = document.getElementById
    ('btnFiltrar')
    botonFiltrar.addEventListener
    ('click', (e)=>{
        const texto = document.getElementById('textoafiltrar').value.trim() // TRIM por si pone espacio de mas el usuario
        filtrar(texto)
    })
})