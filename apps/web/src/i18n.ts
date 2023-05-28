import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'

import enTranslation from './translations/en.json'
import deTranslation from './translations/de.json'

i18n
   .use(HttpBackend)
   .use(initReactI18next)
   .init({
      resources: {
         en: {
            translation: enTranslation,
         },
         de: {
            translation: deTranslation,
         },
      },
      fallbackLng: 'en',
      debug: true,
      interpolation: {
         escapeValue: false,
      },
      detection: {
         order: ['querystring'], // Verwende die Reihenfolge: Abfragezeichenfolge
         caches: [], // Deaktiviere den Cache
      },
   })

export default i18n
