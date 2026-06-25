import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { Text, View } from "react-native";

export default function Onboarding() {
  const { direction, t } = useI18n();

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white px-6">
      <LanguageSwitcher />
      <Text
        className="text-center text-2xl font-bold text-blue-500"
        style={{ direction, writingDirection: direction }}
      >
        {t("onboarding.title")}
      </Text>
      <Text
        className="text-center text-base text-black/60"
        style={{ direction, writingDirection: direction }}
      >
        {t("onboarding.subtitle")}
      </Text>
    </View>
  );
}
