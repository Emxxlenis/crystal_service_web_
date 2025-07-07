"use client";

import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import PrivacyPolicy from '../../src/components/PrivacyPolicy';

export default function PrivacidadPage() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
} 