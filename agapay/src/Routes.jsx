import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, EmergencyResources, SafetyReminders, About } from './components';
import DisasterInformation from './components/DisasterInformation';
import ContactUs from './components/ContactUs';
import ResponderDashboard from './components/ResponderDashboard';
import ResponderRecords from './components/ResponderRecords';
import ResponderReports from './components/ResponderReports';
import ResponderUserSettings from './components/ResponderUserSettings';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emergency-resources" element={<EmergencyResources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/responder" element={<ResponderDashboard />}/>
      <Route path="/responder/records" element={<ResponderRecords />}/>
      <Route path="/responder/reports" element={<ResponderReports />}/>
      <Route path="/responder/usersettings" element={<ResponderUserSettings />}/>
    </Routes>
  );
};

export default AppRoutes;