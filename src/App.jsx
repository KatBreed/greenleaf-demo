import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
