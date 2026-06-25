import { BEIR_TABLE } from "../../data/beirTable.ts";

import { MAX_BEIR_AGE, MIN_AGE } from "./constants.ts";
import type { Gender } from "./types.ts";

export const interpolateRiskCoefficient = (
  age: number,
  gender: Gender,
): number => {
  const boundedAge = Math.max(MIN_AGE, Math.min(age, MAX_BEIR_AGE));

  const exactMatch = BEIR_TABLE.find((row) => row.age === boundedAge);
  if (exactMatch) return exactMatch[gender];

  const lower = [...BEIR_TABLE]
    .reverse()
    .find((row) => row.age < boundedAge);
  const upper = BEIR_TABLE.find((row) => row.age > boundedAge);

  if (!lower || !upper) {
    return BEIR_TABLE[BEIR_TABLE.length - 1][gender];
  }

  const value1 = lower[gender];
  const value2 = upper[gender];

  return (
    value1 +
    ((boundedAge - lower.age) * (value2 - value1)) / (upper.age - lower.age)
  );
};
