'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import es from '../translations/es.json';
import en from '../translations/en.json';

const LanguageContext = createContext();

const translations = {
  es,
  en
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    setLanguage(savedLang || 'es');
    setMounted(true);
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if not found
      }
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    if (mounted) {
      localStorage.setItem('language', newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
