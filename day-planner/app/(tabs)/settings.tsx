import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
    const { t } = useTranslation("settings");
    return (
        <View>
            <Text>{t("title")}</Text>
        </View>
    );
}