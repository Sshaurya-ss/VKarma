import React from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Concepts from './components/Concepts';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <Expertise />
      <Concepts />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
