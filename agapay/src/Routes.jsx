import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, EmergencyResources, SafetyReminders, About } from './components';
import DisasterInformation from './components/DisasterInformation';
import ContactUs from './components/ContactUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emergency-resources" element={<EmergencyResources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;