"use client";

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Catalog from '../src/components/Catalog';
import Projects from '../src/components/Projects';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Catalog />
        <Projects />
      </main>
      <Footer />
    </div>
  );
} 