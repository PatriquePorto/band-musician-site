import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from './locales/en-US/translation.json'
import ptTranslations from './locales/pt-BR/translation.json'

i18next.use(initReactI18next).init({
    resources: {
        en: {
           ...enTranslations
        },
        pt: {
           ...ptTranslations
        }
    },
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});