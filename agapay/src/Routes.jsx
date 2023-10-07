import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, EmergencyResources, SafetyReminders, About } from './components';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emergency-resources" element={<EmergencyResources />} />
      <Route path="/safety-reminders" element={<SafetyReminders />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;