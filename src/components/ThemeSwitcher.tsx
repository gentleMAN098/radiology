import { Pressable, StyleSheet, Text } from "react-native";
import { usePostHog } from "posthog-react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useThemePreference } from "@/src/theme/ThemeProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

const ThemeSwitcher = () => {
  const { colors } = useThemeColors();
  const { t } = useI18n();
  const rtlText = useRtlText();
  const { theme, toggleTheme } = useThemePreference();
  const posthog = usePostHog();

  const handleToggle = () => {
    posthog.capture("theme_changed", {
      new_theme: theme === "dark" ? "light" : "dark",
      previous_theme: theme,
    });
    toggleTheme();
  };

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: theme === "dark" }}
      accessibilityLabel={t("common.theme")}
      onPress={handleToggle}
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
      <Text style={[styles.label, { color: colors.text }, rtlText]}>
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
