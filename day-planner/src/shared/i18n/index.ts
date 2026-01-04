import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHome from "./locales/en/home.json";
import enSettings from "./locales/en/settings.json";

import uaHome from "./locales/ua/home.json";
import uaSettings from "./locales/ua/settings.json";

import { FALLBACK_LANGUAGE } from "./config";

const resources = {
    en: {
        home: enHome,
        settings: enSettings,
    },
    ua: {
        home: uaHome,
        settings: uaSettings,
    },
};

const deviceLanguage =
    Localization.getLocales()[0]?.languageCode ?? FALLBACK_LANGUAGE;
i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: FALLBACK_LANGUAGE,
        ns: ["home", "settings"],
        defaultNS: "home",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;