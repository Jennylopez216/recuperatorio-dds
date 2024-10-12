const express = require('express');
const router = express.Router(); //Crea un nuevo objeto Router, que permite definir rutas manejadas 
                                //por Express. Utilizar un Router es útil para modularizar la aplicación 
                                //y organizar las rutas de manera más clara.

let arr_ArticulosFamiliasMock = [ //Define un array llamado arr_ArticulosFamiliasMock, que contiene una lista de objetos.
  {
    "IdArticuloFamilia": 1,
    "Nombre": "Accesorios"
  },
  {
    "IdArticuloFamilia": 2,
    "Nombre": "Audio"
  },
  {
    "IdArticuloFamilia": 3,
    "Nombre": "Celulares"
  },
  {
    "IdArticuloFamilia": 4,
    "Nombre": "Cuidado Personal"
  },
  {
    "IdArticuloFamilia": 5,
    "Nombre": "Dvd"
  },
  {
    "IdArticuloFamilia": 6,
    "Nombre": "Fotografia"
  },
  {
    "IdArticuloFamilia": 7,
    "Nombre": "Frio-Calor"
  },
  {
    "IdArticuloFamilia": 8,
    "Nombre": "Gps"
  },
  {
    "IdArticuloFamilia": 9,
    "Nombre": "Informatica"
  },
  {
    "IdArticuloFamilia": 10,
    "Nombre": "Led - Lcd"
  }
];

router.get('/api/articulosfamiliasmock', async function (req, res) {//async= asincrona 
  res.json(arr_ArticulosFamiliasMock); //enviar el array arr_ArticulosFamiliasMock como respuesta en formato JSON 
                                      //al cliente que hizo solicitud
});


router.get('/api/articulosfamiliasmock/:id', async function (req, res) { //ASYNC se utiliza cuando dentro de la funcion rea;izas operaciones asincronicas, como consultar una BDA o hace solicitud HTTP externa
  let articuloFamilia = arr_ArticulosFamiliasMock.find( //dentro de arr_ArticulosFamiliasMock busca un articulo que coincida con el ID
    (x) => x.IdArticuloFamilia == req.params.id //funcion que compara el IdArticuloFamilia de 
  );                                            //c/elemento del array con el valor del parametro id que viene en la URL
  if (articuloFamilia) res.json(articuloFamilia); // SI el arti. es encontrado, se encia como rta en formato JSON al cliente
  else res.status(404).json({ message: 'articulofamilia no encontrado' });//SINO el servidor responde con un estado HTTP 404
});


router.post('/api/articulosfamiliasmock/', (req, res) => {
  const { Nombre } = req.body; // Extrae el campo "Nombre" del cuerpo de la solicitud (JSON enviado por el cliente )
  let articuloFamilia = {
    Nombre, // Asigna el valor del nombre al nuevo objeto de articulo
    IdArticuloFamilia: Math.floor(Math.random()*100000), //Genera un ID aleatorio para el nuevo articulo
  };

  // aqui agregar a la coleccion
  arr_ArticulosFamiliasMock.push(articuloFamilia);

  res.status(201).json(articuloFamilia);
});

router.put('/api/articulosfamiliasmock/:id', (req, res) => {
  let articuloFamilia = arr_ArticulosFamiliasMock.find(
    (x) => x.IdArticuloFamilia == req.params.id
  );

  if (articuloFamilia) {
    const { Nombre } = req.body;
    articuloFamilia.Nombre = Nombre;
    res.json({ message: 'articulofamilia actualizado' });
  } else {
    res.status(404).json({ message: 'articulofamilia no encontrado' })
  }
});

router.delete('/api/articulosfamiliasmock/:id', (req, res) => { // Busca el artículo en el arreglo usando el id pasado como parámetro
  let articuloFamilia = arr_ArticulosFamiliasMock.find(
    (x) => x.IdArticuloFamilia == req.params.id
  );
  // Verifica si el artículo fue encontrado
  if (articuloFamilia){
    // Filtra el arreglo para eliminar el artículo encontrado
    arr_ArticulosFamiliasMock = arr_ArticulosFamiliasMock.filter(
      (x) => x.IdArticuloFamilia != req.params.id
    );
    res.json({message:"articulofamilia eliminado"}); // Responde con un mensaje de éxito
  }else{
    res.status(404).json({message: 'articuloFamilia no encontrado'}) // Si no se encuentra el artículo, responde con un error 404
  }
});




module.exports = router; //Exporta el objeto router para que pueda ser utilizado en otros módulos de la aplicación.


//este código define un endpoint API que devuelve un conjunto de datos de artículos familiares 
//en formato JSON cuando se accede a la ruta /api/articulosfamiliasmock. 
//Este tipo de configuración es común en aplicaciones web que requieren una API REST para interactuar con datos.


