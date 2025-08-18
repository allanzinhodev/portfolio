import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import pt from './locales/pt/translation.json';

console.log("i18n config loaded");

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt }
  },
  lng: 'pt', // idioma inicial
  fallbackLng: 'pt',
  interpolation: { escapeValue: false }
});

export default i18n;
