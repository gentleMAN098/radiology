// app/report.tsx (or src/app/report.tsx)
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import BenchmarkCard from "@/src/components/BenchmarkCard/BenchmarkCard";
import ReportCard from "@/src/components/ReportCard/ReportCard";
import RiskSummary from "@/src/components/RiskSummary/RiskSummary";
import SkeletonBlock from "@/src/components/SkeletonBlock";
import MedicalButton from "@/src/components/ui/MedicalButton";
import Screen from "@/src/components/ui/Screen";
import { getMedicalColors } from "@/src/components/ui/theme";
import { CT_PROTOCOLS } from "@/src/data/protocols";
import { calculateRiskAssessment } from "@/src/domain/risk-engine/calculations";
import { Gender } from "@/src/domain/risk-engine/types";

const formatNumber = (
  value: number,
  locale: string,
  options?: Intl.NumberFormatOptions,
) => new Intl.NumberFormat(locale, options).format(value);

const formatPercent = (value: number, locale: string) =>
  `${formatNumber(value, locale, {
    maximumFractionDigits: value < 1 ? 3 : 2,
    minimumFractionDigits: value < 1 ? 2 : 1,
  })}%`;

const ReportScreen = () => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, language, locale, t } = useI18n();
  const params = useLocalSearchParams<{
    age?: string;
    gender?: Gender;
    scanId?: string;
    scanCount?: string;
  }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);

    return () => clearTimeout(timer);
  }, []);

  const assessmentInput = useMemo(
    () =>
      ({
        age: Number(params.age ?? 40),
        gender: params.gender === "female" ? "female" : "male",
        scanId: Number(params.scanId ?? CT_PROTOCOLS[0].id),
        scanCount: Number(params.scanCount ?? 1),
      }) satisfies {
        age: number;
        gender: Gender;
        scanId: number;
        scanCount: number;
      },
    [params.age, params.gender, params.scanCount, params.scanId],
  );

  const report = useMemo(
    () => calculateRiskAssessment(assessmentInput),
    [assessmentInput],
  );
  const protocol = CT_PROTOCOLS.find(
    (item) => item.id === assessmentInput.scanId,
  );
  const scanName = language === "fa" ? protocol?.nameFa : protocol?.nameEn;

  const riskPercent = formatPercent(report.lar, locale);
  const ratio = t("report.riskRatio", {
    count: formatNumber(report.riskRatio, locale),
  });
  const baseline = formatPercent(report.baselineRisk, locale);
  const total = formatPercent(report.totalRisk, locale);
  const totalRiskText = t("report.totalRiskSentence", { baseline, total });

  if (loading) {
    return (
      <Screen>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
              textAlign: isRTL ? "right" : "left",
              writingDirection: direction,
            },
          ]}
        >
          {t("report.loading")}
        </Text>
        <SkeletonBlock height={240} />
        <SkeletonBlock height={130} />
        <SkeletonBlock height={130} />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.headerRow}>
        <View style={styles.titleBlock}>
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
                textAlign: isRTL ? "right" : "left",
                writingDirection: direction,
              },
            ]}
          >
            {t("report.title")}
          </Text>
          <Text
            style={[
              styles.subtitle,
              {
                color: colors.mutedText,
                textAlign: isRTL ? "right" : "left",
                writingDirection: direction,
              },
            ]}
          >
            {t("report.subtitle")}
          </Text>
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.back()}
          style={[styles.backButton, { borderColor: colors.border }]}
        >
          <Text
            style={[
              styles.backText,
              { color: colors.primary, writingDirection: direction },
            ]}
          >
            {t("common.back")}
          </Text>
        </Pressable>
      </View>

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

      <Text
        style={[
          styles.sectionTitle,
          {
            color: colors.text,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {t("report.benchmarks")}
      </Text>
      <View style={styles.benchmarkGrid}>
        <BenchmarkCard
          title={t("report.backgroundRadiation")}
          value={t("report.backgroundEquivalent", {
            count: formatNumber(report.backgroundYears, locale, {
              maximumFractionDigits: 1,
            }),
          })}
          animationType="radiation" // Using radiation animation
        />
        <BenchmarkCard
          accent="green"
          title={t("report.chestXrays")}
          value={t("report.chestXrayEquivalent", {
            count: formatNumber(report.chestXrayEquivalent, locale, {
              maximumFractionDigits: 0,
            }),
          })}
          animationType="xray" // Using xray animation
        />
        <BenchmarkCard
          accent="amber"
          title={t("report.flights")}
          value={t("report.flightEquivalent", {
            count: formatNumber(report.flightEquivalent, locale, {
              maximumFractionDigits: 0,
            }),
          })}
          animationType="airplane" // Using airplane animation
        />
      </View>

      <MedicalButton
        label={t("report.recalculate")}
        onPress={() => router.back()}
      />
    </Screen>
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
  },
  benchmarkGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});

export default ReportScreen;
