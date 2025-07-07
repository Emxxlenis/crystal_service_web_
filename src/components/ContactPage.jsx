'use client';

import React from 'react';
import ContactForm from './ContactForm';
import { useLanguage } from '../context/LangContext';
import '../App.css';

const ContactPage = () => {
  const { language } = useLanguage();
  return (
    <section className="section contactpage-section">
      <h1 className="contactpage-title">{language === 'es' ? 'Contáctanos' : 'Contact Us'}</h1>
      <p className="contactpage-subtitle">
        {language === 'es'
          ? '¿Tienes un proyecto en mente o necesitas una cotización? Completa el formulario y nos pondremos en contacto contigo lo antes posible.'
          : 'Do you have a project in mind or need a quote? Fill out the form and we will contact you as soon as possible.'}
      </p>
      <ContactForm />
    </section>
  );
};

export default ContactPage; 