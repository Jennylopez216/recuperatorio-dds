import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import ListadoEnfermeros from "./ListadoEnfermeros";

const Enfermeros = () => {
  const { register, handleSubmit } = useForm();
  const [lista, setLista] = useState([]);  // Inicializamos como un array vacío

  // Cargar todos los datos al inicio
  useEffect(() => {
    const cargarEnfermeros = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/enfermeros");
        setLista(response.data);
      } catch (error) {
        console.error("Error al cargar los enfermeros:", error);
      }
    };
    cargarEnfermeros();
  }, []);

  // Manejar la búsqueda
  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:4000/api/enfermeros", {
        params: data,
      });
      setLista(response.data);
    } catch (error) {
      console.error("Error al buscar enfermeros:", error);
    }
  };

  return (
    <div className="container">
      <h1>Enfermeros</h1>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                {...register("NombreCompleto")}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
      {/* Mostrar la tabla desde el inicio */}
      <ListadoEnfermeros lista={lista} />
    </div>
  );
};

export default Enfermeros;
