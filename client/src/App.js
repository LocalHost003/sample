import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmergencyForm from './pages/EmergencyForm';
// src/App.js

import HelplinePage from './pages/Helpline'; // ✅ correct path



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<EmergencyForm />} />
        <Route path="/helpline/:type" element={<HelplinePage />} />

      
      
      </Routes>
    </Router>
  );
}

export default App;
