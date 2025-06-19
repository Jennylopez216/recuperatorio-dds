import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import ListadoPresidentes from "./PresidentesListado";

const Presidentes = () => {
  const { register, handleSubmit } = useForm();
  const [lista, setLista] = useState([]);  // Inicializamos como un array vacío

  // Cargar todos los datos al inicio
  useEffect(() => {
    const cargarPresidentes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/presidentes");
        setLista(response.data);
      } catch (error) {
        console.error("Error al cargar los presidentes:", error);
      }
    };
    cargarPresidentes();
  }, []);

  // Manejar la búsqueda
  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:4000/api/presidentes", {
        params: data,
      });
      setLista(response.data);
    } catch (error) {
      console.error("Error al buscar presidentes:", error);
    }
  };

  return (
    <div className="container">
      <h1>Presidentes</h1>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                {...register("Nombre")}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
      {/* Mostrar la tabla desde el inicio */}
      <ListadoPresidentes lista={lista} />
    </div>
  );
};

export default Presidentes;
