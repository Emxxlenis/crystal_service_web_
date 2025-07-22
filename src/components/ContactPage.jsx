'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';
import { FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const { language } = useLanguage();
  // Traducciones simples para los textos
  const t = {
    title: language === 'es' ? 'Contáctanos' : 'Contact us',
    status: language === 'es' ? 'Todos los sistemas operativos' : 'All systems operational',
    chat: language === 'es' ? 'Chatea con nosotros' : 'Chat with us',
    chatDesc: language === 'es' ? 'Haz clic aquí para chatear con nosotros.' : 'Click here to start chatting with us.',
    call: language === 'es' ? 'Llámanos' : 'Give us a call',
    open: language === 'es' ? 'Disponible 24/7' : 'Open 24/7',
  };
  return (
    <section className="section contactpage-section" style={{paddingTop: '3rem'}}>
      <h1 className="contactpage-title" style={{marginBottom: '1.5rem'}}>{t.title}</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '1.5rem'}}>
        {/* Chat Card */}
        <div style={{background: 'var(--bg-secondary)', borderRadius: '16px', boxShadow: 'var(--shadow)', padding: '2.2rem 2.1rem', minWidth: 260, maxWidth: 320, flex: '1 1 260px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#25D366'}}>
            <FaWhatsapp size={38} />
          </div>
          <div style={{fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t.chat}</div>
          <div style={{fontSize: '1rem', marginBottom: '0.7rem'}}>
            <a href="https://wa.me/50764562658" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)', textDecoration: 'underline', fontWeight: 500}}>
              {t.chatDesc}
            </a>
          </div>
          <div style={{fontSize: '0.98rem', color: 'var(--text-secondary)'}}>{t.open}</div>
        </div>
        {/* Call Card */}
        <div style={{background: 'var(--bg-secondary)', borderRadius: '16px', boxShadow: 'var(--shadow)', padding: '2.2rem 2.1rem', minWidth: 260, maxWidth: 320, flex: '1 1 260px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-color)'}}>
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 21 18.91V21z"/></svg>
          </div>
          <div style={{fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t.call}</div>
          <div style={{fontSize: '1rem', marginBottom: '0.7rem'}}>
            <a href="tel:64562658" style={{color: 'var(--accent-color)', textDecoration: 'underline', fontWeight: 500}}>6456-2658</a>
            <span style={{margin: '0 0.3rem'}}>{language === 'es' ? 'o' : 'or'}</span>
            <a href="tel:63621210" style={{color: 'var(--accent-color)', textDecoration: 'underline', fontWeight: 500}}>6362-1210</a>
          </div>
          <div style={{fontSize: '0.98rem', color: 'var(--text-secondary)'}}>{t.open}</div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage; 