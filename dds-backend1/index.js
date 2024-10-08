const express = require("express");

// crear servidor
//importa la libreria EXPRESS y la asigna a una variable llamada express
const app = express();

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
