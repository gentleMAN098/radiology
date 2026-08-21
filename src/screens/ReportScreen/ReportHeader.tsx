import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useThemeColors } from "@/src/hooks/useThemeColors";

const ReportHeader = () => {
  const { colors } = useThemeColors();
  const { t } = useI18n();
  const rtlText = useRtlText();

  return (
    <View style={styles.headerRow}>
      <View style={styles.titleBlock}>
        <Text style={[styles.title, { color: colors.text }, rtlText]}>
          {t("report.title")}
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedText }, rtlText]}>
          {t("report.subtitle")}
        </Text>
      </View>
      <Pressable
        accessibilityRole="button"
        onPress={() => router.back()}
        style={[styles.backButton, { borderColor: colors.border }]}
      >
        <Text style={[styles.backText, { color: colors.primary }, rtlText]}>
          {t("common.back")}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  titleBlock: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 23,
  },
  backButton: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  backText: {
    fontSize: 14,
    fontWeight: "900",
  },
});

export default ReportHeader;
