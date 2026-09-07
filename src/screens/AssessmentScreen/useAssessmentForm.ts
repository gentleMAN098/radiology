import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

import { CT_PROTOCOLS } from "@/src/data/protocols";
import { Gender } from "@/src/domain/risk-engine/types";

const CALCULATION_DELAY_MS = 350;
const INITIAL_AGE = 40;
const INITIAL_GENDER: Gender = "male";

export const useAssessmentForm = () => {
  const { reset } = useLocalSearchParams<{ reset?: string }>();

  const [step, setStep] = useState(1);
  const [age, setAge] = useState(INITIAL_AGE);
  const [gender, setGender] = useState<Gender>(INITIAL_GENDER);
  const [scanId, setScanId] = useState(CT_PROTOCOLS[0].id);
  const [scanCount, setScanCount] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);

  const [guideVisible, setGuideVisible] = useState(false);
  const [doseRiskVisible, setDoseRiskVisible] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    if (reset !== "1") return;

    setStep(1);
    setAge(INITIAL_AGE);
    setGender(INITIAL_GENDER);
    setScanId(CT_PROTOCOLS[0].id);
    setScanCount(1);
    setIsCalculating(false);
    setGuideVisible(false);
    setDoseRiskVisible(false);
    setTermsVisible(false);
    setAgreedToTerms(false);
    router.setParams({ reset: "" });
  }, [reset]);

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
