import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import VehicleList from './components/VehicleList';
import VehicleDetail from './components/VehicleDetail';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <div className="app">
      {!isAuthenticated && <AuthForm onLogin={handleLogin} />}
      {isAuthenticated && (
        <>
          <VehicleList onVehicleClick={handleVehicleClick} />
          {selectedVehicle && <VehicleDetail vehicle={selectedVehicle} />}
        </>
      )}
    </div>
  );
};

export default App;
