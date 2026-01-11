import { Text, View, Button, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { useTheme } from "@/src/shared/hooks/useTheme";

export default function SettingsScreen() {
    const { t } = useTranslation("settings");
    const { mode, setMode } = useTheme();
    return (
        <View>
            <Text>{t("title")}</Text>
            <Button title="UA" onPress={() => changeLanguage("ua")} />
            <Button title="EN" onPress={() => changeLanguage("en")} />
            {(['system', 'light', 'dark'] as const).map(m => (
                <Pressable key={m} onPress={() => setMode(m)}>
                    <Text style={{ opacity: mode === m ? 1 : 0.5 }}>
                        {m}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}