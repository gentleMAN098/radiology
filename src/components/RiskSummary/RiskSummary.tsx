import { StyleSheet, Text, useColorScheme, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import Card from "../ui/Card";
import { getMedicalColors } from "../ui/theme";

interface RiskSummaryProps {
  riskPercent: string;
  ratio: string;
  totalRiskText: string;
}

const RiskSummary = ({ riskPercent, ratio, totalRiskText }: RiskSummaryProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, t } = useI18n();

  return (
    <Card style={styles.card}>
      <Text
        style={[
          styles.sectionLabel,
          {
            color: colors.mutedText,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {t("report.riskSummary")}
      </Text>
      <Text
        style={[
          styles.largeNumber,
          {
            color: colors.primary,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {riskPercent}
      </Text>
      <Text
        style={[
          styles.subtitle,
          {
            color: colors.text,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {t("report.additionalRisk")}
      </Text>
      <View style={[styles.row, { borderColor: colors.border }]}>
        <Text style={[styles.rowLabel, { color: colors.mutedText, writingDirection: direction }]}>
          {t("report.ratio")}
        </Text>
        <Text style={[styles.rowValue, { color: colors.text, writingDirection: direction }]}>
          {ratio}
        </Text>
      </View>
      <View style={[styles.row, { borderColor: colors.border }]}>
        <Text style={[styles.rowLabel, { color: colors.mutedText, writingDirection: direction }]}>
          {t("report.totalRisk")}
        </Text>
        <Text
          style={[
            styles.totalRisk,
            {
              color: colors.text,
              textAlign: isRTL ? "right" : "left",
              writingDirection: direction,
            },
          ]}
        >
          {totalRiskText}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 12,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  largeNumber: {
    fontSize: 58,
    fontWeight: "900",
    lineHeight: 64,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "800",
  },
  row: {
    borderTopWidth: 1,
    gap: 6,
    paddingTop: 14,
  },
  rowLabel: {
    fontSize: 13,
    fontWeight: "800",
  },
  rowValue: {
    fontSize: 22,
    fontWeight: "900",
  },
  totalRisk: {
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 23,
  },
});

export default RiskSummary;
