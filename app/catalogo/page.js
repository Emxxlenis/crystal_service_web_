"use client";

import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FullCatalog from '../../src/components/FullCatalog';

export default function CatalogoPage() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <FullCatalog />
      </main>
      <Footer />
    </div>
  );
} 