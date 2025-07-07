'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import { formatNumber, formatDate, formatCurrency } from '../utils/translationUtils';

const TranslationExample = () => {
  const { language, t } = useLanguage();

  // Ejemplo de interpolación de variables
  const userName = 'Juan Pérez';
  const projectCount = 42;
  const projectDate = new Date('2024-06-15');
  const projectCost = 1500.75;

  return (
    <div className="translation-example">
      <h2>Ejemplo de Sistema de Traducción Avanzado</h2>
      
      {/* Traducción básica */}
      <div className="example-section">
        <h3>Traducción Básica</h3>
        <p>{t('navigation.home')}</p>
        <p>{t('contact.title')}</p>
      </div>

      {/* Interpolación de variables */}
      <div className="example-section">
        <h3>Interpolación de Variables</h3>
        <p>
          {t('contact.messages.welcome', { 
            name: userName, 
            count: projectCount 
          })}
        </p>
        <p>
          {t('contact.messages.projectInfo', { 
            date: formatDate(projectDate, language),
            cost: formatCurrency(projectCost, language)
          })}
        </p>
      </div>

      {/* Formateo de números y fechas */}
      <div className="example-section">
        <h3>Formateo Localizado</h3>
        <p>Número: {formatNumber(1234.56, language)}</p>
        <p>Fecha: {formatDate(projectDate, language)}</p>
        <p>Moneda: {formatCurrency(projectCost, language)}</p>
      </div>

      {/* Información del sistema */}
      <div className="example-section">
        <h3>Información del Sistema</h3>
        <p>Idioma actual: {language}</p>
        <p>Idioma del navegador: {navigator.language}</p>
        <p>Idioma guardado: {localStorage.getItem('language') || 'No guardado'}</p>
      </div>

      {/* Ejemplo de uso en desarrollo */}
      <div className="example-section">
        <h3>Debug en Desarrollo</h3>
        <p>
          {process.env.NODE_ENV === 'development' && (
            <small>
              💡 En desarrollo, las claves faltantes se muestran en la consola
            </small>
          )}
        </p>
      </div>
    </div>
  );
};

export default TranslationExample; 