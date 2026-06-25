import { Pressable, StyleSheet, Text, useColorScheme } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useThemePreference } from "@/src/theme/ThemeProvider";

import { getMedicalColors } from "./ui/theme";

const ThemeSwitcher = () => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, t } = useI18n();
  const { theme, toggleTheme } = useThemePreference();

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: theme === "dark" }}
      accessibilityLabel={t("common.theme")}
      onPress={toggleTheme}
      style={[
        styles.button,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <Text style={[styles.icon, { color: colors.primary }]}>
        {theme === "dark" ? "☾" : "☀"}
      </Text>
      <Text style={[styles.label, { color: colors.text, writingDirection: direction }]}>
        {theme === "dark" ? t("common.dark") : t("common.light")}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 6,
    minHeight: 40,
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 17,
    fontWeight: "900",
  },
  label: {
    fontSize: 13,
    fontWeight: "900",
  },
});

export default ThemeSwitcher;
