// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../translate/en.json';
import translationAR from '../translate/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
