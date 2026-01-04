import i18n from "i18next";

export const changeLanguage = async (lang: "en" | "ua") =>{
    await i18n.changeLanguage(lang);
};