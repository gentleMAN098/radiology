import { StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import BenchmarkCard from "@/src/components/BenchmarkCard/BenchmarkCard";
import { RiskReport } from "@/src/domain/risk-engine/types";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { formatBackgroundRadiation } from "@/lib/utils";

import { formatNumber } from "./useReportData";

interface BenchmarksSectionProps {
  report: RiskReport;
}

const BenchmarksSection = ({ report }: BenchmarksSectionProps) => {
  const { colors } = useThemeColors();
  const { t, language, locale } = useI18n();
  const rtlText = useRtlText();

  return (
    <>
      <Text style={[styles.sectionTitle, { color: colors.text }, rtlText]}>
        {t("report.benchmarks")}
      </Text>
      <View style={styles.benchmarkGrid}>
        <BenchmarkCard
          title={t("report.backgroundRadiation")}
          value={t("report.backgroundEquivalentValue", {
            value: formatBackgroundRadiation(
              report.backgroundYears,
              language,
              locale,
            ),
          })}
          animationType="radiation"
          accent="blue"
        />
        <BenchmarkCard
          accent="green"
          title={t("report.chestXrays")}
          value={t("report.chestXrayEquivalent", {
            count: formatNumber(report.chestXrayEquivalent, locale, {
              maximumFractionDigits: 0,
            }),
          })}
          animationType="xray"
        />
        <BenchmarkCard
          accent="amber"
          title={t("report.flights")}
          value={t("report.flightEquivalent", {
            count: formatNumber(report.flightEquivalent, locale, {
              maximumFractionDigits: 0,
            }),
          })}
          animationType="airplane"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
  },
  benchmarkGrid: {
    flexDirection: "column",
    gap: 12,
  },
});

export default BenchmarksSection;
