import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LangContext';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Catalog from './components/Catalog';
import FullCatalog from './components/FullCatalog';
import ScrollToTop from './components/ScrollToTop';
import ContactForm from './components/ContactForm';
import About from './components/About';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import CookiesPolicy from './components/CookiesPolicy';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Catalog />
                    <Projects />
                    <ContactForm />
                  </>
                } />
                <Route path="/catalogo" element={<FullCatalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/privacidad" element={<PrivacyPolicy />} />
                <Route path="/terminos" element={<TermsConditions />} />
                <Route path="/cookies" element={<CookiesPolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
