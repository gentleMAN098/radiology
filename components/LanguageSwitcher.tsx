import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { usePostHog } from "posthog-react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { Language } from "@/i18n/translations";
import { getMedicalColors } from "@/src/components/ui/theme";

const LANGUAGES: Language[] = ["en", "fa"];

const LanguageSwitcher = () => {
  const { language, setLanguage, t, direction } = useI18n();
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const posthog = usePostHog();

  return (
    <View
      accessibilityLabel={t("common.language")}
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          direction,
        },
      ]}
    >
      {LANGUAGES.map((item) => {
        const isActive = language === item;

        return (
          <Pressable
            key={item}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            onPress={() => {
              if (!isActive) {
                posthog.capture("language_changed", {
                  new_language: item,
                  previous_language: language,
                });
              }
              setLanguage(item);
            }}
            style={[
              styles.option,
              { backgroundColor: isActive ? colors.primary : "transparent" },
            ]}
          >
            <Text
              style={[
                styles.label,
                { color: isActive ? colors.primaryText : colors.mutedText },
              ]}
            >
              {item.toUpperCase()}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    padding: 4,
  },
  option: {
    alignItems: "center",
    borderRadius: 7,
    minWidth: 48,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "900",
  },
});

export default LanguageSwitcher;
