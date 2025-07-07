"use client";

import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import About from '../../src/components/About';

export default function AboutPage() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <About />
      </main>
      <Footer />
    </div>
  );
} 