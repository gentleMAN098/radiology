import { useState } from "react";
import { router } from "expo-router";

import { CT_PROTOCOLS } from "@/src/data/protocols";
import { Gender } from "@/src/domain/risk-engine/types";

const CALCULATION_DELAY_MS = 350;

export const useAssessmentForm = () => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState(40);
  const [gender, setGender] = useState<Gender>("male");
  const [scanId, setScanId] = useState(CT_PROTOCOLS[0].id);
  const [scanCount, setScanCount] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);

  const [guideVisible, setGuideVisible] = useState(false);
  const [doseRiskVisible, setDoseRiskVisible] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const canCalculate =
    age >= 1 && age <= 120 && scanCount >= 1 && agreedToTerms;

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleCalculate = () => {
    if (!canCalculate) return;

    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      router.push({
        pathname: "/report",
        params: {
          age: String(age),
          gender,
          scanId: String(scanId),
          scanCount: String(scanCount),
        },
      });
    }, CALCULATION_DELAY_MS);
  };

  return {
    step,
    age,
    setAge,
    gender,
    setGender,
    scanId,
    setScanId,
    scanCount,
    setScanCount,
    isCalculating,
    canCalculate,
    handleNext,
    handleBack,
    handleCalculate,
    guideVisible,
    setGuideVisible,
    doseRiskVisible,
    setDoseRiskVisible,
    termsVisible,
    setTermsVisible,
    agreedToTerms,
    setAgreedToTerms,
  };
};
