import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import Navbar from './Components/Navbarcomp/Navbar';
import Home from './Components/Homecomp/Home';
import Services from './Components/Servicecomp/Services';
import Contact from './Components/Contactcomp/Contact';
import Skills from './Components/Skillscomp/Skills';
import Footer from './Components/Footercomp/Footer';
// import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Aboutme from './Components/Aboutcomp/Aboutme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>

    <App />
    <Navbar />
    <Home />
    <Services />
    <Skills />
    <Contact />
    <Footer />

    {/* <Aboutme /> */}

    </Router>

  </React.StrictMode>

);

reportWebVitals();
