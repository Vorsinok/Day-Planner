import { StyleSheet } from "react-native";
import { colors } from "@/src/shared/constants/color";

export type ThemeType = typeof colors.light;

export const createCalendarStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.background,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },

    nav: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.text,
    },

    title: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.text,
    },

    weekRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },

    weekText: {
      width: "14.28%",
      textAlign: "center",
      fontWeight: "500",
      color: theme.text,
      opacity: 0.7,
    },

    day: {
      width: "14.28%",
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      borderRadius: 10,
      backgroundColor: theme.card,
    },

    otherMonth: {
      opacity: 0.3,
    },

    selectedDay: {
      backgroundColor: colors.primary,
    },

    dayText: {
      fontSize: 16,
      color: theme.text,
    },

    selectedContainer: {
      marginTop: 16,
      padding: 12,
      borderRadius: 12,
      backgroundColor: theme.card,
    },

    selectedText: {
      fontSize: 16,
      fontWeight: "500",
      color: theme.text,
    },
  });
