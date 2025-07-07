#!/usr/bin/env node

/**
 * Script de validación de traducciones
 * Ejecutar con: node scripts/validateTranslations.js
 */

const fs = require('fs');
const path = require('path');

// Cargar archivos de traducción
const esPath = path.join(__dirname, '../src/translations/es.json');
const enPath = path.join(__dirname, '../src/translations/en.json');

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Validation utilities
const validateTranslationKeys = (esTranslations, enTranslations) => {
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

  return { errors, warnings };
};

const findEmptyTranslations = (translations, language) => {
  const empty = [];

  const traverse = (obj, path = '') => {
    Object.keys(obj).forEach(key => {
      const fullPath = path ? `${path}.${key}` : key;
      const value = obj[key];

      if (typeof value === 'object' && value !== null) {
        traverse(value, fullPath);
      } else if (typeof value === 'string' && value.trim() === '') {
        empty.push(fullPath);
      }
    });
  };

  traverse(translations);
  return empty;
};

const findLongTranslations = (translations, maxLength = 200) => {
  const long = [];

  const traverse = (obj, path = '') => {
    Object.keys(obj).forEach(key => {
      const fullPath = path ? `${path}.${key}` : key;
      const value = obj[key];

      if (typeof value === 'object' && value !== null) {
        traverse(value, fullPath);
      } else if (typeof value === 'string' && value.length > maxLength) {
        long.push({
          key: fullPath,
          length: value.length,
          preview: value.substring(0, 50) + '...'
        });
      }
    });
  };

  traverse(translations);
  return long;
};

// Run validations
console.log('🔍 Validating translations...\n');

// 1. Validate key structure
const { errors, warnings } = validateTranslationKeys(es, en);

if (errors.length > 0) {
  console.log('❌ Errors found:');
  errors.forEach(error => console.log(`  - ${error}`));
  console.log('');
} else {
  console.log('✅ Key structure is valid');
}

if (warnings.length > 0) {
  console.log('⚠️  Warnings:');
  warnings.forEach(warning => console.log(`  - ${warning}`));
  console.log('');
}

// 2. Check for empty translations
const emptyEs = findEmptyTranslations(es, 'es');
const emptyEn = findEmptyTranslations(en, 'en');

if (emptyEs.length > 0) {
  console.log('❌ Empty translations in Spanish:');
  emptyEs.forEach(key => console.log(`  - ${key}`));
  console.log('');
}

if (emptyEn.length > 0) {
  console.log('❌ Empty translations in English:');
  emptyEn.forEach(key => console.log(`  - ${key}`));
  console.log('');
}

// 3. Check for very long translations
const longEs = findLongTranslations(es, 200);
const longEn = findLongTranslations(en, 200);

if (longEs.length > 0) {
  console.log('⚠️  Very long translations in Spanish:');
  longEs.forEach(item => console.log(`  - ${item.key} (${item.length} chars): ${item.preview}`));
  console.log('');
}

if (longEn.length > 0) {
  console.log('⚠️  Very long translations in English:');
  longEn.forEach(item => console.log(`  - ${item.key} (${item.length} chars): ${item.preview}`));
  console.log('');
}

// 4. Statistics
const countKeys = (obj) => {
  let count = 0;
  const traverse = (o) => {
    Object.keys(o).forEach(key => {
      count++;
      if (typeof o[key] === 'object' && o[key] !== null) {
        traverse(o[key]);
      }
    });
  };
  traverse(obj);
  return count;
};

const esCount = countKeys(es);
const enCount = countKeys(en);

console.log('📊 Statistics:');
console.log(`  - Keys in Spanish: ${esCount}`);
console.log(`  - Keys in English: ${enCount}`);
console.log(`  - Difference: ${Math.abs(esCount - enCount)}`);

// 5. Summary
const totalIssues = errors.length + emptyEs.length + emptyEn.length;

if (totalIssues === 0) {
  console.log('\n🎉 All translations are correct!');
  process.exit(0);
} else {
  console.log(`\n❌ Found ${totalIssues} issues that need attention.`);
  process.exit(1);
} 