import { Text, View, Button } from "react-native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export default function SettingsScreen() {
    const { t } = useTranslation("settings");
    return (
        <View>
            <Text>{t("title")}</Text>
            <Button title="UA" onPress={() => changeLanguage("ua")} />
            <Button title="EN" onPress={() => changeLanguage("en")} />
        </View>
    );
}