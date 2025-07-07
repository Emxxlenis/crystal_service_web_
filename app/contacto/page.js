"use client";

import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import ContactPage from '../../src/components/ContactPage';

export default function ContactoPage() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
} 