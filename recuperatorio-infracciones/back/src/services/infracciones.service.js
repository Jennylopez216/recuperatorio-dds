
import sequelize from "../models/database.js"


const create = async (infraccion) => {
    try {
        const resultado = await sequelize.models.Infracciones.create({
            Dni: infraccion.Dni,
            Fecha: infraccion.Fecha,
            Importe: infraccion.Importe,
            Lugar: infraccion.Lugar
        });

        console.log(resultado);

        return {
            Id: resultado.null 
        };
    } catch (error) {
        throw new Error(`Error al crear la infracción: ${error.message}`);
    }
}
export default {
    create,
}