import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import AboutUs from './components/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>   
 {/* Wrap your app with BrowserRouter */}
 <Navbar/>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        {/* ... other routes */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
