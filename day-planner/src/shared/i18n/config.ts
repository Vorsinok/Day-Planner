export const LANGUAGES= ["en", "ua"] as const;
export type Language = (typeof LANGUAGES)[number];

export const FALLBACK_LANGUAGE: Language = "en";