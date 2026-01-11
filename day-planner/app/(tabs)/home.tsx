import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/src/shared/hooks/useTheme";

export default function HomeScreen() {
  const { t } = useTranslation("home");
  const {theme} = useTheme();
  return (
    <View style={{backgroundColor: theme.background}}>
      <Text style={{color: theme.text}}>{t("title")}</Text>
      <Text style={{color: theme.text}}>{t("empty")}</Text>
    </View>
  );
}
