import { router } from "expo-router";

import { useI18n } from "@/i18n/I18nProvider";
import ReportCard from "@/src/components/ReportCard/ReportCard";
import RiskSummary from "@/src/components/RiskSummary/RiskSummary";
import MedicalButton from "@/src/components/ui/MedicalButton";
import Screen from "@/src/components/ui/Screen";

import BenchmarksSection from "./BenchmarksSection";
import ReportHeader from "./ReportHeader";
import ReportLoadingState from "./ReportLoadingState";
import { formatNumber, useReportData } from "./useReportData";
import { Text } from "@react-navigation/elements";

const ReportScreen = () => {
  const { t, locale } = useI18n();
  const {
    loading,
    report,
    assessmentInput,
    scanName,
    riskPercent,
    ratio,
    totalRiskText,
    posthog,
  } = useReportData();

  if (loading) {
    return (
      <Screen scrollable={true}>
        <ReportLoadingState />
      </Screen>
    );
  }

  return (
    <Screen scrollable={true}>
      <ReportHeader />
      <RiskSummary
        riskPercent={riskPercent}
        ratio={ratio}
        totalRiskText={totalRiskText}
      />
      <ReportCard
        rows={[
          {
            label: t("assessment.protocol"),
            value: scanName ?? report.scanName,
          },
          {
            label: t("report.effectiveDose"),
            value: `${formatNumber(report.effectiveDose, locale, { maximumFractionDigits: 1 })} ${t("assessment.doseUnit")}`,
          },
          {
            label: t("report.totalDose"),
            value: `${formatNumber(report.totalDose, locale, { maximumFractionDigits: 1 })} ${t("assessment.doseUnit")}`,
          },
          {
            label: t("assessment.numberOfScans"),
            value: t("report.scanCount", {
              count: formatNumber(assessmentInput.scanCount, locale),
            }),
          },
        ]}
      />
      <BenchmarksSection report={report} />
      <Text
        style={{
          marginTop: 24,
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        {t("content.doseRisk.disclaimerTitle")}
      </Text>
      <Text
        style={{
          marginTop: 8,
          fontSize: 14,
          lineHeight: 21,
        }}
      >
        {t("content.doseRisk.disclaimerBody")}
      </Text>
      <MedicalButton
        label={t("report.recalculate")}
        onPress={() => {
          posthog.capture("report_recalculated", {
            age: assessmentInput.age,
            gender: assessmentInput.gender,
            scan_id: assessmentInput.scanId,
            scan_count: assessmentInput.scanCount,
          });
          router.back();
        }}
      />
    </Screen>
  );
};

export default ReportScreen;
