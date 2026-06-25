export interface CtScanProtocol {
  id: number;
  nameFa: string;
  nameEn: string;
  effectiveDose: number;
}

export interface RiskCoefficient {
  age: number;
  male: number;
  female: number;
}

export type Gender = "male" | "female";

export interface RiskAssessmentInput {
  age: number;
  gender: Gender;
  scanId: number;
  scanCount: number;
}

export interface RiskReport {
  scanName: string;
  effectiveDose: number;
  totalDose: number;
  lar: number;
  riskRatio: number;
  baselineRisk: number;
  totalRisk: number;
  backgroundYears: number;
  chestXrayEquivalent: number;
  flightEquivalent: number;
}
