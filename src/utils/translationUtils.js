// Utilidades para el sistema de traducción

/**
 * Formatea números según el idioma
 * @param {number} number - Número a formatear
 * @param {string} language - Idioma ('es' | 'en')
 * @param {Object} options - Opciones de formateo
 * @returns {string} Número formateado
 */
export const formatNumber = (number, language = 'es', options = {}) => {
  const defaultOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options
  };

  return new Intl.NumberFormat(language === 'es' ? 'es-PA' : 'en-US', defaultOptions)
    .format(number);
};

/**
 * Formatea fechas según el idioma
 * @param {Date|string} date - Fecha a formatear
 * @param {string} language - Idioma ('es' | 'en')
 * @param {Object} options - Opciones de formateo
 * @returns {string} Fecha formateada
 */
export const formatDate = (date, language = 'es', options = {}) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };

  return new Intl.DateTimeFormat(language === 'es' ? 'es-PA' : 'en-US', defaultOptions)
    .format(dateObj);
};

/**
 * Formatea moneda según el idioma
 * @param {number} amount - Cantidad a formatear
 * @param {string} language - Idioma ('es' | 'en')
 * @param {string} currency - Código de moneda (default: 'USD')
 * @returns {string} Moneda formateada
 */
export const formatCurrency = (amount, language = 'es', currency = 'USD') => {
  return new Intl.NumberFormat(language === 'es' ? 'es-PA' : 'en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

/**
 * Validate that all translation keys exist in both languages
 * @param {Object} esTranslations - Spanish translations
 * @param {Object} enTranslations - English translations
 * @returns {Object} Validation result
 */
export const validateTranslationKeys = (esTranslations, enTranslations) => {
  const errors = [];
  const warnings = [];

  const checkKeys = (obj1, obj2, path = '') => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check for missing keys in obj2
    keys1.forEach(key => {
      const fullPath = path ? `${path}.${key}` : key;
      if (!(key in obj2)) {
        errors.push(`Missing key in English: ${fullPath}`);
      } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        checkKeys(obj1[key], obj2[key], fullPath);
      }
    });

    // Check for extra keys in obj2
    keys2.forEach(key => {
      const fullPath = path ? `${path}.${key}` : key;
      if (!(key in obj1)) {
        warnings.push(`Extra key in English: ${fullPath}`);
      }
    });
  };

  checkKeys(esTranslations, enTranslations);

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Generate a report of missing translations
 * @param {Object} translations - Translations object
 * @param {string} language - Language to check
 * @returns {Array} List of missing keys
 */
export const findMissingTranslations = (translations, language) => {
  const missing = [];

  const traverse = (obj, path = '') => {
    Object.keys(obj).forEach(key => {
      const fullPath = path ? `${path}.${key}` : key;
      const value = obj[key];

      if (typeof value === 'object' && value !== null) {
        traverse(value, fullPath);
      } else if (typeof value === 'string' && value.trim() === '') {
        missing.push(fullPath);
      }
    });
  };

  traverse(translations[language]);
  return missing;
};

/**
 * Sanitize text for translation usage
 * @param {string} text - Text to sanitize
 * @returns {string} Sanitized text
 */
export const sanitizeTranslationText = (text) => {
  if (typeof text !== 'string') return text;
  
  return text
    .trim()
    .replace(/\s+/g, ' ') // Multiple spaces to single space
    .replace(/\n\s*\n/g, '\n') // Multiple empty lines to single line
    .replace(/[^\w\s\-.,!?;:()]/g, ''); // Remove potentially dangerous special characters
};

/**
 * Check if a translation key exists
 * @param {Object} translations - Translations object
 * @param {string} key - Key to check (dot notation)
 * @returns {boolean} True if exists
 */
export const hasTranslationKey = (translations, key) => {
  const keys = key.split('.');
  let value = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return false;
    }
  }

  return value !== undefined && value !== null;
}; 