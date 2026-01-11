import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeMode } from "@/src/theme/types";

const STORAGE_KEY = "theme-mode";

type ThemeState = {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
    mode: "system",
    setMode: async (mode) => {
        await AsyncStorage.setItem(STORAGE_KEY, mode);
        set({ mode });
    },
}))