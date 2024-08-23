import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AboutUs from './components/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx';

const router = createBrowserRouter([
  {

    path: "/",
    element: <App />,
  },
  {
    path:"about-us",
    element:<AboutUs />,
  },
  {
    path:"contact-us",
    element:<ContactUs />,
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
