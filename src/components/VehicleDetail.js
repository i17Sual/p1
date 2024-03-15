import React from 'react';

import genericCarImage from '../assets/Frame 1.png'; // Ruta a la imagen genérica del automóvil

const VehicleDetail = ({ vehicle }) => {
  return (
    <div className="vehicle-detail">
      <h2>Detalles del vehículo</h2>
      <img src={genericCarImage} alt="Imagen genérica del vehículo" />
      <p>Kilometraje: {vehicle.mileage}</p>
      <p>Color: {vehicle.color}</p>
      <p>Referencia: {vehicle.reference}</p>
    </div>
  );
};

export default VehicleDetail;