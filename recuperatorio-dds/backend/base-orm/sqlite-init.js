const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {
    // Validar que la variable de entorno esté definida
    if (!process.env.base) {
        throw new Error("La variable de entorno 'base' no está definida. Asegúrate de configurarla correctamente.");
    }

    try {
        // Abrir la base de datos; si no existe, se crea automáticamente
        await db.open(process.env.base);

        // Verificar si la tabla "Enfermeros" ya existe
        const sql = `
            SELECT count(*) as contar
            FROM sqlite_schema
            WHERE type = 'table' AND name = 'enfermeros'
        `;
        const res = await db.get(sql, []);
        const existe = res.contar > 0;

        if (!existe) {
            // Crear la tabla si no existe
            await db.run(`CREATE TABLE Enfermeros (
                IdEnfermero INTEGER PRIMARY KEY,
                NombreCompleto TEXT NOT NULL UNIQUE,
                Especialidad TEXT NOT NULL,
                Antiguedad INTEGER NOT NULL,
                FechaIngreso TEXT NOT NULL
            );`);
            console.log("Tabla 'Enfermeros' creada.");

            // Insertar datos iniciales en la tabla
            await db.run(`INSERT INTO Enfermeros (NombreCompleto, Especialidad, Antiguedad, FechaIngreso)
                VALUES
                ('MARIA PEREZ', 'ENFERMERIA GENERAL', 15, '2009-01-01'),
                ('JUAN GOMEZ', 'PEDIATRIA', 8, '2016-03-01'),
                ('ANA LOPEZ', 'NEONATOLOGIA', 10, '2014-07-01'),
                ('CARLOS RODRIGUEZ', 'CIRUGIA', 12, '2012-11-01'),
                ('ISABEL MARTINEZ', 'TRAUMATOLOGIA', 5, '2019-05-01'),
                ('PEDRO SANCHEZ', 'GERIATRIA', 20, '1994-08-01'),
                ('LORENA GARCIA', 'MEDICINA INTERNA', 18, '2006-04-01'),
                ('DAVID MUÑOZ', 'URGENCIAS', 13, '2011-09-01'),
                ('LUCIA RAMIREZ', 'ANESTESIOLOGIA', 7, '2017-02-01'),
                ('ALEJANDRO SANZ', 'SALUD MENTAL', 9, '2015-06-01'),
                ('RAQUEL ALONSO', 'DERMATOLOGIA', 16, '2008-12-01'),
                ('VERONICA GONZALEZ', 'OFTALMOLOGIA', 11, '2013-03-01'),
                ('MARTIN LOPEZ', 'OIDOS, NARIZ Y GARGANTA', 14, '2010-07-01'),
                ('SOFIA GARCIA', 'REHABILITACION', 6, '2018-01-01'),
                ('ALBERTO DIAZ', 'RADIOLOGIA', 19, '1995-05-01'),
                ('LAURA FERNANDEZ', 'ONCOLOGIA', 7, '2017-02-01'),
                ('ROBERTO LOPEZ', 'CARDIOLOGIA', 12, '2012-10-01'),
                ('MARIANA GOMEZ', 'NEUROLOGIA', 8, '2016-04-01'),
                ('ANDREA SANCHEZ', 'GINECOLOGIA', 15, '2009-02-01'),
                ('DAVID RUIZ', 'UROLOGIA', 10, '2014-08-01')
            ;`);
            console.log("Datos iniciales insertados en la tabla 'Enfermeros'.");
        } else {
            console.log("La tabla 'Enfermeros' ya existe.");
        }
    } catch (error) {
        console.error("Error al crear/verificar la base de datos:", error);
    } finally {
        // Asegurarse de cerrar la base de datos
        await db.close();
        console.log("Base de datos cerrada.");
    }
}

// Llamar a la función para verificar/crear la base de datos
CrearBaseSiNoExiste();

// Exportar la función para su reutilización en otros módulos
module.exports = CrearBaseSiNoExiste;
