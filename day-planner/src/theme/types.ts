export type ThemeMode = "light" | "dark" | "system";

export type AppTheme = {
    background: string;
    text: string;
    card: string;
    primary: string;
};

export type ThemeContextValue = {
    theme: AppTheme;
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}