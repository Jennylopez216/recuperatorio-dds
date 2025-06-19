import express from "express";
import service from "./src/services/infracciones.service.js";

import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.get("/infracciones/:id", async (req, res) => {
    //completar...
})

app.post('/infracciones', async (req, res) => {
    try{
       const infId = await service.create(req.body)
    return res.json(infId);
    }catch(e){
        console.log(e)
        res.status(500).send({mensaje: 'Ha ocurrido un error interno.'})
    }
});

app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});
