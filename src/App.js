import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        {/* <Route path="/gallery" element={<Gallery />} exact /> */}
        {/* <Route path="/gallery/:id" element={<Art />} exact /> */}
        {/* <Route path="/about" element={<AboutPage />} exact />
        <Route path="/donate" element={<HomePage />} exact />
        <Route path="/contact" element={<HomePage />} exact /> */}
      </Routes>
    </Router>
  )
}

export default App;
