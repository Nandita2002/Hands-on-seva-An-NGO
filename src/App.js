import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ImpactStories from './components/ImpactStories';
import Activities from './components/Activities';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impact-stories" element={<ImpactStories />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<div>Donation Page</div>} /> {/* Placeholder for donation page */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;