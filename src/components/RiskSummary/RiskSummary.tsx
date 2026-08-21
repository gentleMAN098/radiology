import { StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

import Card from "../ui/Card";

interface RiskSummaryProps {
  riskPercent: string;
  ratio: string;
  totalRiskText: string;
}

const RiskSummary = ({ riskPercent, ratio, totalRiskText }: RiskSummaryProps) => {
  const { colors } = useThemeColors();
  const { t } = useI18n();
  const rtlText = useRtlText();

  return (
    <Card style={styles.card}>
      <Text style={[styles.sectionLabel, { color: colors.mutedText }, rtlText]}>
        {t("report.riskSummary")}
      </Text>
      <Text style={[styles.largeNumber, { color: colors.primary }, rtlText]}>
        {riskPercent}
      </Text>
      <Text style={[styles.subtitle, { color: colors.text }, rtlText]}>
        {t("report.additionalRisk")}
      </Text>
      <View style={[styles.row, { borderColor: colors.border }]}>
        <Text style={[styles.rowLabel, { color: colors.mutedText }, rtlText]}>
          {t("report.ratio")}
        </Text>
        <Text style={[styles.rowValue, { color: colors.text }, rtlText]}>
          {ratio}
        </Text>
      </View>
      <View style={[styles.row, { borderColor: colors.border }]}>
        <Text style={[styles.rowLabel, { color: colors.mutedText }, rtlText]}>
          {t("report.totalRisk")}
        </Text>
        <Text style={[styles.totalRisk, { color: colors.text }, rtlText]}>
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
