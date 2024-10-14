
const { Sequelize, DataTypes, Op } = require('sequelize');
const express = require ("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Ruta en la que se escucha
app.get("/", (req, res) => {
    res.send("Backend inicial dds-backend!");
  });

const sequelize = new Sequelize('sqlite::memory:');

//definir la constante libro
const Libro = sequelize.define('Libro',{
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editorial: DataTypes.STRING,
    año_publicacion: DataTypes.INTEGER
})


async function inicializarBaseDeDatos() {
    await sequelize.sync({ force: true });
    await Libro.bulkCreate([
        { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", editorial: "Realismo mágico", año_publicacion: 1967 },
        { id: 2, titulo: "1984", autor: "George Orwell", editorial: "Distopía", año_publicacion:1949 },
        { id: 3, titulo: "El señor de los anillos", autor: "J.R.R. Tolkien",editorial: "Fantasía épica", año_publicacion: 1954 },
        { id: 4, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", editorial: "Novela satírica", año_publicacion: 1605},
        { id: 5, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", editorial: "Fantasía", año_publicacion: 1997},
        { id: 6, titulo: "Orgullo y prejuicio", autor: "Jane Austen", editorial: "Novela romántica", año_publicacion: 1813 },
        { id: 7, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", editorial: "Novela romántica", año_publicacion: 1985 },
        { id: 8, titulo: "Moby Dick", autor: "Herman Melville", editorial: "Novela de aventuras", año_publicacion: 1851},
        { id: 9, titulo: "La Odisea", autor: "Homero", editorial: "Epopeya", año_publicacion: 2003},
        { id: 10, titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", editorial: "Novela filosófica", año_publicacion: 1890 }
    ]);
}

//desarrolle su servidor backend aqui\

//Crear un endpoint que reciba un titulo y devuelva los libros que coincidan con dicho parametro en su raiz.
app.get('/api/libros', async(req,res) =>{
    try{
        if(req.query.titulo){
            const libros = await Libro.findAll({
                where : {
                    titulo: { [Op.like]: `${req.query.titulo}%` } //Buscar por prefijo de titulo
                }
            });
            return res.json (libros); //devolver libros filtrados
        }
        const libros = await Libro.findAll(); //si no pasa ningun titulo, devolver todos los libros
        res.json(libros);//devolver todos los libros
    } catch (err){
        res.status(500).send({message: "error al recuperar los libros"})//si ocurre un error devolver un estado 500 con un msj de error
    }
})

//iniciar la base de datos y luego levantar el servidor
inicializarBaseDeDatos().then(() => {
    const port = 3000;
    app.listen(port, () => 
        console.log(`sitio escuchado en el puerto ${port}`));
}); 


