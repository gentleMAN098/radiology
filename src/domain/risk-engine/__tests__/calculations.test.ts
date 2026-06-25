import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { calculateLAR, calculateRiskAssessment, calculateRiskRatio } from "../calculations.ts";
import { interpolateRiskCoefficient } from "../interpolation.ts";

describe("risk engine", () => {
  it("interpolates BEIR coefficients between age bands", () => {
    const coefficient = interpolateRiskCoefficient(34, "male");

    assert.equal(coefficient, 670.8);
  });

  it("uses age 80 coefficients when age is above 80", () => {
    assert.equal(interpolateRiskCoefficient(95, "female"), 214);
  });

  it("calculates LAR using the isolated medical formula", () => {
    assert.equal(calculateLAR(14, 648), 0.09072);
  });

  it("converts LAR percentage into a 1 in X risk ratio", () => {
    assert.equal(calculateRiskRatio(0.015), 6667);
  });

  it("builds a complete risk report", () => {
    const report = calculateRiskAssessment({
      age: 40,
      gender: "male",
      scanId: 11,
      scanCount: 1,
    });

    assert.equal(report.effectiveDose, 14);
    assert.equal(report.totalDose, 14);
    assert.equal(report.lar, 0.09072);
    assert.equal(report.riskRatio, 1102);
    assert.equal(report.baselineRisk, 41.6);
    assert.equal(report.totalRisk, 41.69072);
    assert.equal(report.backgroundYears, 14 / 3);
    assert.equal(report.chestXrayEquivalent, 140);
    assert.equal(Math.round(report.flightEquivalent), 467);
  });
});
