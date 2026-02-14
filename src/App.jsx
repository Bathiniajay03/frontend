import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import PatientRegistration from './pages/PatientRegistration';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import MedicalRecords from './pages/MedicalRecords';
import DoctorProfile from './pages/DoctorProfile';
import { FaPhoneAlt } from 'react-icons/fa';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/register-patient" element={<PatientRegistration />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
          </Routes>
        </main>
        <a href="/contact" className="fab" title="Contact us"><FaPhoneAlt /></a>
      </div>
    </Router>
  );
}

export default App;