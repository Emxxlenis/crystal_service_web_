"use client";

import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import TermsConditions from '../../src/components/TermsConditions';

export default function TerminosPage() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <TermsConditions />
      </main>
      <Footer />
    </div>
  );
} 