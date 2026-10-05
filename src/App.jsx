import React from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Concepts from './components/Concepts';
import Testimonials from './components/Testimonials';
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
      <Footer />
    </>
  );
}

export default App;
