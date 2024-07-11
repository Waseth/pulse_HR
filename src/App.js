// paste the code here
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard component
import LandingPage from './components/LandingPage';
import About from './components/About';
import WorkplaceGuidelines from './components/WorkplaceGuidelines';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LoginPage" element={<LoginPage setFirstName={setFirstName} firstName={firstName} />} />
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard firstName={firstName} />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/WorkplaceGuidelines" element={<WorkplaceGuidelines />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
