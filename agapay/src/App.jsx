import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import AppRoutes from './Routes'; 
import SideBarResponder from './components/SideBarResponder';
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <AppRoutes />
      <SideBarResponder />

    </>
  );
};

export default App;
