import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation("home");
  return (
    <View>
      <Text>{t("title")}</Text>
      <Text>{t("empty")}</Text>
    </View>
  );
}
