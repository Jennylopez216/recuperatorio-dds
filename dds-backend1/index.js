const express = require("express");
// crear servidor
//importa la libreria EXPRESS y la asigna a una variable llamada express
const app = express();

//Permite que express procese cuerpos de solicitud en formato Json
app.use(express.json()); //esto es necesario para leer los datos JSON en las solicitudes

//importa el archivo de rutas 
const articulosfamiliasmockRouter = require("./routes/articulosfamiliasmock");
app.use(articulosfamiliasmockRouter);

//usar el router de rutas en la aplicacion
app.use(articulosfamiliasmockRouter); //Este método vincula el router que importaste a la aplicación Express. Esto permite que todas las rutas definidas en el archivo articulosfamiliasmock.js estén disponibles en la aplicación.

// controlar ruta
//Significa que cuando alguien accede a http://localhost:3000/(la ruta raíz),
// se ejecuta la función que está dentro de los paréntesis.
app.get("/", (req, res) => {
  res.send("Backend inicial dds-backend!");
});

// levantar servidor
const port = 3000; //numero de puerto en el que tu servidor web estara escuchando conexiones
app.listen(port, () => {//inicializa el servidor
    console.log(`sitio escuchando en el puerto ${port}`);
});


