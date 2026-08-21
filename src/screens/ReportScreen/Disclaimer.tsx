import { StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useThemeColors } from "@/src/hooks/useThemeColors";

const Disclaimer = () => {
  const { colors } = useThemeColors();
  const { t } = useI18n();
  const rtlText = useRtlText();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }, rtlText]}>
        {t("content.doseRisk.disclaimerTitle")}
      </Text>
      <Text style={[styles.body, { color: colors.mutedText }, rtlText]}>
        {t("content.doseRisk.disclaimerBody")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  body: {
    fontSize: 14,
    lineHeight: 21,
  },
});

export default Disclaimer;
