import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from "./pages/Services";
import ContactUs from './pages/ContactUs';
import SubmitCV from './pages/SubmitCV';
import StudentForm from './pages/StudentForm';
import Login from "./pages/Login";
import Register from "./pages/Register";
import WebDevelopment from './pages/services/WebDevelopment';
import UIUX from './pages/services/UIUX';
import PlacementTraining from './pages/services/PlacementTraining';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/submit-cv" element={<SubmitCV />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ui-ux" element={<UIUX />} />
        <Route path="/services/placement-training" element={<PlacementTraining />} />
        <Route path="/student-form" element={<StudentForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
