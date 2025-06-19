import React from "react";

const ListadoPresidentes = ({ lista }) => {
  // Si la lista está vacía o es undefined, mostramos un mensaje
  if (!lista || lista.length === 0) {
    return <div>No hay presidentes disponibles.</div>;
  }

  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha presidencia</th>
            <th>Pais</th>
            <th>Duracion mandato años</th>
          </tr>
        </thead>
        <tbody>
          {/* Usamos .map() para iterar sobre los enfermeros y renderizar sus datos */}
          {lista.map((item) => (
            <tr key={item.IdPresidente}>
              <td>{item.IdPresidente}</td>
              <td>{item.Nombre}</td>
              <td>{item.FechaPresidecia}</td>
              <td>{item.Pais}</td>
              <td>{item.DuracionMandatoAños}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPresidentes;

