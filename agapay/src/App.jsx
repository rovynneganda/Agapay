import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import AppRoutes from './Routes'; 

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
