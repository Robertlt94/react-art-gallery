import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import GalleryPage from './components/pages/GalleryPage/GalleryPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import DonatePage from './components/pages/DonatePage/DonatePage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import Header from './components/Header/Header';

function App() {
  const [message, setMessage] = useState('');
 
  return (
    <Router>
      <div>
        <Header message={ message } />

      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/gallery" element={<GalleryPage />} exact />
        <Route path="/gallery/:id" element={<GalleryPage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/donate" element={<DonatePage />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
      </Routes>
      </div>
    </Router>
  )
}

export default App;
