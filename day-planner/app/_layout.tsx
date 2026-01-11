import { Stack } from "expo-router";
import "@/src/shared/i18n"
import { ThemeProvider } from "@/src/providers/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
