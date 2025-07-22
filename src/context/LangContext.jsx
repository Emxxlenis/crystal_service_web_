'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import es from '../translations/es.json';
import en from '../translations/en.json';

const LanguageContext = createContext();

const translations = {
  es,
  en
};

/**
 * LanguageContext provides internationalization (i18n) support for the application.
 * Includes translation utilities, language switching, and translation validation.
 */
// Validate translation file structure consistency (development only)
// Warns if translation keys are missing or mismatched
const validateTranslations = () => {
  const esKeys = Object.keys(es);
  const enKeys = Object.keys(en);
  
  if (esKeys.length !== enKeys.length) {
    console.warn('Translation files have different number of keys');
  }
  // Warn if any English translation is missing
  esKeys.forEach(key => {
    if (!enKeys.includes(key)) {
      console.warn(`Missing English translation for key: ${key}`);
    }
  });
};

// Run validation only in development
if (process.env.NODE_ENV === 'development') {
  validateTranslations();
}

/**
 * LanguageProvider wraps the app and provides language state and translation functions.
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect browser language as fallback and persist user preference
    const browserLang = navigator.language?.startsWith('en') ? 'en' : 'es';
    const savedLang = localStorage.getItem('language');
    setLanguage(savedLang || browserLang);
    setMounted(true);
  }, []);

  // Translation function with support for nested keys and variable interpolation
  // Returns the translated string or the key if not found
  const t = (key, variables = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    // Traverse nested translation structure
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Log missing keys in development
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Translation key not found: ${key} for language: ${language}`);
        }
        return key; // Fallback to key if not found
      }
    }
    // Interpolate variables if present
    if (typeof value === 'string' && Object.keys(variables).length > 0) {
      return Object.keys(variables).reduce((str, varKey) => {
        return str.replace(new RegExp(`{{${varKey}}}`, 'g'), variables[varKey]);
      }, value);
    }
    return value || key;
  };

  // Toggle between supported languages
  // Persists user preference in localStorage
  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    if (mounted) {
      localStorage.setItem('language', newLang);
    }
  };

  // Set language explicitly (with validation)
  const setLanguageExplicit = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      if (mounted) {
        localStorage.setItem('language', lang);
      }
    } else {
      console.warn(`Language ${lang} not supported`);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      setLanguage: setLanguageExplicit,
      t,
      isRTL: false, // For future RTL language support
      availableLanguages: Object.keys(translations)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * useLanguage custom hook to access language context.
 * @returns {object} Language context value
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * useTranslationDebug custom hook for translation debugging in development.
 * Warns about missing translations.
 * @returns {object} Debug translation utilities
 */
export const useTranslationDebug = () => {
  const { language, t } = useLanguage();
  
  if (process.env.NODE_ENV === 'development') {
    return {
      language,
      t: (key, variables) => {
        const result = t(key, variables);
        if (result === key) {
          console.warn(`Missing translation: ${key} in ${language}`);
        }
        return result;
      }
    };
  }
  
  return { language, t };
};
