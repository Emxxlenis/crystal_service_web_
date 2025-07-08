// Utility functions for the translation (i18n) system.
// Includes helpers for formatting, validation, and key management.

/**
 * Formats a number according to the selected language.
 * Uses Intl.NumberFormat for locale-aware formatting.
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
 * Formats a date according to the selected language.
 * Uses Intl.DateTimeFormat for locale-aware formatting.
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
 * Formats a currency value according to the selected language and currency code.
 */
export const formatCurrency = (amount, language = 'es', currency = 'USD') => {
  return new Intl.NumberFormat(language === 'es' ? 'es-PA' : 'en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

/**
 * Validates that all translation keys exist in both language files.
 * Returns a report of missing or extra keys.
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
 * Finds missing translations (empty strings) for a given language.
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
 * Sanitizes translation text for safe usage.
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
 * Checks if a translation key exists in the translations object (dot notation supported).
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