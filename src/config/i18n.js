import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nextReactNative from 'i18next-react-native-language-detector';
import { initReactI18next } from 'react-i18next';
import { WEB_ENV } from '.';

i18n
  .use(WEB_ENV ? LanguageDetector : i18nextReactNative)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          search: 'Search',
        },
      },
      de: {
        translations: {
          search: 'Suchen',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
