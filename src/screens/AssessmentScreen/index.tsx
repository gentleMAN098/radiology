import Screen from "@/src/components/ui/Screen";

import ProgressBar from "./ProgressBar";
import StepPatientInfo from "./StepPatientInfo";
import StepScanSelection from "./StepScanSelection";
import StepWelcome from "./StepWelcome";
import { useAssessmentForm } from "./useAssessmentForm";

const TOTAL_STEPS = 3;

const AssessmentScreen = () => {
  const form = useAssessmentForm();

  return (
    <Screen>
      <ProgressBar step={form.step} totalSteps={TOTAL_STEPS} />

      {form.step === 1 && (
        <StepWelcome
          guideVisible={form.guideVisible}
          onOpenGuide={() => form.setGuideVisible(true)}
          onCloseGuide={() => form.setGuideVisible(false)}
          onNext={form.handleNext}
        />
      )}

      {form.step === 2 && (
        <StepPatientInfo
          age={form.age}
          onAgeChange={form.setAge}
          gender={form.gender}
          onGenderChange={form.setGender}
          onBack={form.handleBack}
          onNext={form.handleNext}
        />
      )}

      {form.step === 3 && (
        <StepScanSelection
          scanId={form.scanId}
          onScanIdChange={form.setScanId}
          scanCount={form.scanCount}
          onScanCountChange={form.setScanCount}
          agreedToTerms={form.agreedToTerms}
          onAgreedToTermsChange={form.setAgreedToTerms}
          isCalculating={form.isCalculating}
          canCalculate={form.canCalculate}
          onCalculate={form.handleCalculate}
          onBack={form.handleBack}
          doseRiskVisible={form.doseRiskVisible}
          onOpenDoseRisk={() => form.setDoseRiskVisible(true)}
          onCloseDoseRisk={() => form.setDoseRiskVisible(false)}
          termsVisible={form.termsVisible}
          onOpenTerms={() => form.setTermsVisible(true)}
          onCloseTerms={() => form.setTermsVisible(false)}
        />
      )}
    </Screen>
  );
};

export default AssessmentScreen;
