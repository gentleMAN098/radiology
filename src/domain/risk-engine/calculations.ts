import { CT_PROTOCOLS } from "../../data/protocols.ts";

import {
  calculateBackgroundYears,
  calculateChestXrayEquivalent,
  calculateFlightEquivalent,
} from "./benchmarks.ts";
import {
  BASELINE_LIFETIME_CANCER_RISK,
  MAX_AGE,
  MIN_AGE,
} from "./constants.ts";
import { interpolateRiskCoefficient } from "./interpolation.ts";
import type { CtScanProtocol, RiskAssessmentInput, RiskReport } from "./types.ts";

const validateRiskInput = (input: RiskAssessmentInput) => {
  if (!Number.isFinite(input.age) || input.age < MIN_AGE || input.age > MAX_AGE) {
    throw new Error(`Age must be between ${MIN_AGE} and ${MAX_AGE}.`);
  }

  if (!Number.isInteger(input.scanCount) || input.scanCount < 1) {
    throw new Error("Scan count must be at least 1.");
  }

  if (input.gender !== "male" && input.gender !== "female") {
    throw new Error("Gender must be male or female.");
  }
};

export const calculateLAR = (ed: number, coefficient: number): number =>
  (ed * coefficient) / 100000;

export const calculateRiskRatio = (lar: number): number => {
  if (lar <= 0) return Number.POSITIVE_INFINITY;

  return Math.round(1 / (lar / 100));
};

export const calculateRiskAssessment = (
  input: RiskAssessmentInput,
  protocols: CtScanProtocol[] = CT_PROTOCOLS,
): RiskReport => {
  validateRiskInput(input);

  const protocol = protocols.find((item) => item.id === input.scanId);
  if (!protocol) {
    throw new Error("CT scan protocol was not found.");
  }

  const totalDose = protocol.effectiveDose * input.scanCount;
  const coefficient = interpolateRiskCoefficient(input.age, input.gender);
  const lar = calculateLAR(totalDose, coefficient);
  const baselineRisk = BASELINE_LIFETIME_CANCER_RISK[input.gender];

  return {
    scanName: protocol.nameEn,
    effectiveDose: protocol.effectiveDose,
    totalDose,
    lar,
    riskRatio: calculateRiskRatio(lar),
    baselineRisk,
    totalRisk: baselineRisk + lar,
    backgroundYears: calculateBackgroundYears(totalDose),
    chestXrayEquivalent: calculateChestXrayEquivalent(totalDose),
    flightEquivalent: calculateFlightEquivalent(totalDose),
  };
};
