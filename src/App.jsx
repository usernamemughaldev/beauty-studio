import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Services from './components/Services';

import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
