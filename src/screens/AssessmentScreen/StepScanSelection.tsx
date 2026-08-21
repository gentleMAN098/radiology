import { StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import Card from "@/src/components/ui/Card";
import Checkbox from "@/src/components/ui/Checkbox";
import Field from "@/src/components/ui/Field";
import InfoButton from "@/src/components/ui/InfoButton";
import MedicalButton from "@/src/components/ui/MedicalButton";
import InfoModal from "@/src/components/ui/Modal";
import NumberStepper from "@/src/components/ui/NumberStepper";
import WheelPicker from "@/src/components/WheelPicker/WheelPicker";
import { CT_PROTOCOLS } from "@/src/data/protocols";
import { useContentTranslations } from "@/src/hooks/hooks";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useThemeColors } from "@/src/hooks/useThemeColors";

import StepHeader from "./StepHeader";

interface StepScanSelectionProps {
  scanId: number;
  onScanIdChange: (id: number) => void;
  scanCount: number;
  onScanCountChange: (count: number) => void;
  agreedToTerms: boolean;
  onAgreedToTermsChange: (value: boolean) => void;
  isCalculating: boolean;
  canCalculate: boolean;
  onCalculate: () => void;
  onBack: () => void;
  doseRiskVisible: boolean;
  onOpenDoseRisk: () => void;
  onCloseDoseRisk: () => void;
  termsVisible: boolean;
  onOpenTerms: () => void;
  onCloseTerms: () => void;
}

const StepScanSelection = ({
  scanId,
  onScanIdChange,
  scanCount,
  onScanCountChange,
  agreedToTerms,
  onAgreedToTermsChange,
  isCalculating,
  canCalculate,
  onCalculate,
  onBack,
  doseRiskVisible,
  onOpenDoseRisk,
  onCloseDoseRisk,
  termsVisible,
  onOpenTerms,
  onCloseTerms,
}: StepScanSelectionProps) => {
  const { colors } = useThemeColors();
  const { isRTL, t } = useI18n();
  const rtlText = useRtlText();
  const content = useContentTranslations();

  return (
    <View style={styles.stepContainer}>
      <StepHeader step={3} totalSteps={3} onBack={onBack} />

      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: colors.text }, rtlText]}>
          {t("assessment.step3Title")}
        </Text>
        <InfoButton
          accessibilityLabel={content.doseRisk.title}
          onPress={onOpenDoseRisk}
        />
      </View>

      <View style={styles.form}>
        <Field label={t("assessment.protocol")}>
          <WheelPicker
            protocols={CT_PROTOCOLS}
            selectedId={scanId}
            onChange={onScanIdChange}
          />
        </Field>

        <Field
          label={t("assessment.numberOfScans")}
          error={scanCount < 1 ? t("assessment.scansError") : undefined}
        >
          <NumberStepper value={scanCount} min={1} onChange={onScanCountChange} />
        </Field>
      </View>
      <Card style={{ gap: 12 }}>
        <View
          style={{
            flexDirection: isRTL ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.text, fontWeight: "800", fontSize: 15 }}>
            {content.terms.title}
          </Text>
          <InfoButton accessibilityLabel={content.terms.title} onPress={onOpenTerms} />
        </View>
        <Checkbox
          checked={agreedToTerms}
          onChange={onAgreedToTermsChange}
          label={content.terms.checkboxLabel}
        />
      </Card>

      <View style={styles.footer}>
        <MedicalButton
          disabled={!canCalculate || isCalculating}
          label={
            isCalculating ? t("assessment.calculating") : t("assessment.calculate")
          }
          onPress={onCalculate}
        />
      </View>

      <InfoModal
        visible={doseRiskVisible}
        onClose={onCloseDoseRisk}
        title={content.doseRisk.title}
        sections={content.doseRisk.sections}
      />
      <InfoModal
        visible={termsVisible}
        onClose={onCloseTerms}
        title={content.terms.title}
        sections={content.terms.sections}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerContainer: {
    gap: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  form: {
    gap: 24,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 20,
  },
});

export default StepScanSelection;
