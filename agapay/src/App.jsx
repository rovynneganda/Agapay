import React from 'react';
import './index.css';
import { Navbar } from './components/User';
import AppRoutes from './Routes'; 
import SideBarResponder from './components/Responder/SideBar';
import AdminSideBar from './components/Admin/AdminSideBar';
const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      {/* <SideBarResponder /> */}
      {/* <AdminSideBar /> */}
    </>
  );
};

export default App;
