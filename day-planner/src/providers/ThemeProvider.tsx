import React, { PropsWithChildren, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeContext } from "../theme/context";
import { AppTheme } from "../theme/types";
import { darkTheme, lightTheme } from "../theme/themes";
import { useThemeStore } from "../shared/store/theme.store";

export function ThemeProvider({ children }: PropsWithChildren) {
    const systemScheme = useColorScheme();
    const mode = useThemeStore((s) => s.mode);
    const setStoreMode = useThemeStore((s) => s.setMode);

    const [theme, setTheme] = useState<AppTheme>(
        mode === "dark" ? darkTheme : mode === "light" ? lightTheme : systemScheme === "dark" ? darkTheme : lightTheme
    );

    useMemo(() => {
        if (mode === "system") {
            setTheme(systemScheme === "dark" ? darkTheme : lightTheme);
        } else {
            setTheme(mode === "dark" ? darkTheme : lightTheme);
        }
    }, [mode, systemScheme]);

    return (
        <ThemeContext.Provider value={{ theme, mode, setMode: setStoreMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
