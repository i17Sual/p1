import React, { useState, useEffect } from 'react';

const VehicleList = ({ onVehicleClick }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Obtener los datos de los vehículos desde el backend
    fetch('http://localhost:3001/vehicles')
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  }, []);

  return (
    <div className="vehicle-list">
      <h2>Listado de vehículos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Línea</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} onClick={() => onVehicleClick(vehicle)}>
              <td>{vehicle.brand}</td>
              <td>{vehicle.line}</td>
              <td>{vehicle.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;