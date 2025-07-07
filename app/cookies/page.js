"use client";

import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import CookiesPolicy from '../../src/components/CookiesPolicy';

export default function CookiesPage() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <CookiesPolicy />
      </main>
      <Footer />
    </div>
  );
} 