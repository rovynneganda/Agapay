import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, EmergencyResources, About } from './components/User';
import ContactUs from './components/User/ContactUs';
import ResponderDashboard from './components/Responder/Dashboard';
import ResponderRecords from './components/Responder/Records';
import ResponderReports from './components/Responder/Reports';
import ResponderUserSettings from './components/Responder/UserSettings';
import AdminDashboard from './components/Admin/Dashboard';
import AdminRecords from './components/Admin/Records';
import CreateAccount from './components/Admin/CreateAccount';
import CreateAlert from './components/Admin/CreateAlert';
import CreateAnnouncement from './components/Admin/CreateAnnouncement';
import SafetyGuidelines from './components/User/SafetyGuidelines';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nearby-services" element={<EmergencyResources />} />
      <Route path="/about" element={<About />} />
      <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/responder" element={<ResponderDashboard />}/>
      <Route path="/responder/records" element={<ResponderRecords />}/>
      <Route path="/responder/reports" element={<ResponderReports />}/>
      <Route path="/responder/usersettings" element={<ResponderUserSettings />}/>
      <Route path="/admin" element={<AdminDashboard />}/>
      <Route path="/admin/records" element={<AdminRecords />}/>
      <Route path="/admin/createaccount" element={<CreateAccount />}/>
      <Route path="/admin/createalert" element={<CreateAlert />}/>
      <Route path="/admin/createannouncement" element={<CreateAnnouncement />}/>
    </Routes>
  );
};

export default AppRoutes;