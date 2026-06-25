import type { RiskCoefficient } from "../domain/risk-engine/types.ts";

export const BEIR_TABLE: RiskCoefficient[] = [
  { age: 0, male: 2563, female: 4777 },
  { age: 5, male: 1816, female: 3377 },
  { age: 10, male: 1445, female: 2611 },
  { age: 15, male: 1182, female: 2064 },
  { age: 20, male: 977, female: 1646 },
  { age: 30, male: 686, female: 1065 },
  { age: 40, male: 648, female: 886 },
  { age: 50, male: 591, female: 740 },
  { age: 60, male: 489, female: 586 },
  { age: 70, male: 343, female: 409 },
  { age: 80, male: 174, female: 214 },
];
