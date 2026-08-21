import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import Screen from "@/src/components/ui/Screen";
import { Text, View } from "react-native";

export default function Onboarding() {
  const { direction, t } = useI18n();
  const { colors } = useThemeColors();

  return (
    <Screen>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
        <LanguageSwitcher />
        <Text
          className="text-center text-2xl font-bold"
          style={{ color: colors.primary, direction, writingDirection: direction }}
        >
          {t("onboarding.title")}
        </Text>
        <Text
          className="text-center text-base"
          style={{ color: colors.mutedText, direction, writingDirection: direction }}
        >
          {t("onboarding.subtitle")}
        </Text>
      </View>
    </Screen>
  );
}
