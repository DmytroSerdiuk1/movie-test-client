import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationUA from "./locales/ua.json";
import translationDE from "./locales/de.json";

i18next.use(initReactI18next).init({
  resources: {
    en: translationEN,
    ua: translationUA,
    de: translationDE,
  },
  fallbackLng: localStorage.getItem("i18nextLng") || "en",
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});

export default i18next;
