import { useLocalSearchParams } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { useEffect, useMemo, useRef, useState } from "react";

import { useI18n } from "@/i18n/I18nProvider";
import { CT_PROTOCOLS } from "@/src/data/protocols";
import { calculateRiskAssessment } from "@/src/domain/risk-engine/calculations";
import { MAX_AGE, MIN_AGE } from "@/src/domain/risk-engine/constants";
import { Gender } from "@/src/domain/risk-engine/types";

const LOADING_DELAY_MS = 300;
const DEFAULT_AGE = 40;

export const formatNumber = (
  value: number,
  locale: string,
  options?: Intl.NumberFormatOptions,
) => new Intl.NumberFormat(locale, options).format(value);

export const formatPercent = (value: number, locale: string) =>
  `${formatNumber(value, locale, {
    maximumFractionDigits: value < 1 ? 3 : 2,
    minimumFractionDigits: value < 1 ? 2 : 1,
  })}%`;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

// The report screen can be reached via deep link with an arbitrary/missing
// query string, so params are sanitized here rather than trusted directly —
// calculateRiskAssessment throws on invalid input, which would otherwise
// crash the screen during render.
const sanitizeAssessmentParams = (params: {
  age?: string;
  gender?: Gender;
  scanId?: string;
  scanCount?: string;
}) => {
  const parsedAge = Number(params.age);
  const age = Number.isFinite(parsedAge)
    ? clamp(parsedAge, MIN_AGE, MAX_AGE)
    : DEFAULT_AGE;

  const gender: Gender = params.gender === "female" ? "female" : "male";

  const parsedScanId = Number(params.scanId);
  const scanId = CT_PROTOCOLS.some((protocol) => protocol.id === parsedScanId)
    ? parsedScanId
    : CT_PROTOCOLS[0].id;

  const parsedScanCount = Number(params.scanCount);
  const scanCount =
    Number.isFinite(parsedScanCount) && parsedScanCount >= 1
      ? Math.round(parsedScanCount)
      : 1;

  return { age, gender, scanId, scanCount };
};

export const useReportData = () => {
  const { language, locale, t } = useI18n();
  const posthog = usePostHog();
  const params = useLocalSearchParams<{
    age?: string;
    gender?: Gender;
    scanId?: string;
    scanCount?: string;
  }>();
  const [loading, setLoading] = useState(true);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const assessmentInput = useMemo(
    () => sanitizeAssessmentParams(params),
    [params.age, params.gender, params.scanCount, params.scanId],
  );

  const report = useMemo(
    () => calculateRiskAssessment(assessmentInput),
    [assessmentInput],
  );

  useEffect(() => {
    if (loading || hasTrackedView.current) return;

    hasTrackedView.current = true;
    posthog.capture("report_viewed", {
      age: assessmentInput.age,
      gender: assessmentInput.gender,
      scan_id: assessmentInput.scanId,
      scan_count: assessmentInput.scanCount,
      lar: report.lar,
      risk_ratio: report.riskRatio,
    });
  }, [loading, posthog, assessmentInput, report]);

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

  return {
    loading,
    report,
    assessmentInput,
    scanName,
    riskPercent,
    ratio,
    totalRiskText,
    posthog,
  };
};
