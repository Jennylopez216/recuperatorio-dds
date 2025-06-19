import React from "react";

const ListadoEnfermeros = ({ lista }) => {
  // Si la lista está vacía o es undefined, mostramos un mensaje
  if (!lista || lista.length === 0) {
    return <div>No hay enfermeros disponibles.</div>;
  }

  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Antiguedad</th>
            <th>Fecha Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {/* Usamos .map() para iterar sobre los enfermeros y renderizar sus datos */}
          {lista.map((item) => (
            <tr key={item.IdEnfermero}>
              <td>{item.IdEnfermero}</td>
              <td>{item.NombreCompleto}</td>
              <td>{item.Especialidad}</td>
              <td>{item.Antiguedad}</td>
              <td>{item.FechaIngreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoEnfermeros;

