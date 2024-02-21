import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import HTTPApi from 'i18next-http-backend';


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HTTPApi)
    .init({
        // lng: document.querySelector('html').lang,
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        },
        react: {
            useSuspense: false
        }
    })

export default i18next