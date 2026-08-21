import { StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import AgeInputStepper from "@/src/components/ui/AgeNumberStepper";
import Field from "@/src/components/ui/Field";
import MedicalButton from "@/src/components/ui/MedicalButton";
import SegmentedControl from "@/src/components/ui/SegmentedControl";
import { Gender } from "@/src/domain/risk-engine/types";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useThemeColors } from "@/src/hooks/useThemeColors";

import StepHeader from "./StepHeader";

interface StepPatientInfoProps {
  age: number;
  onAgeChange: (age: number) => void;
  gender: Gender;
  onGenderChange: (gender: Gender) => void;
  onBack: () => void;
  onNext: () => void;
}

const StepPatientInfo = ({
  age,
  onAgeChange,
  gender,
  onGenderChange,
  onBack,
  onNext,
}: StepPatientInfoProps) => {
  const { colors } = useThemeColors();
  const { t } = useI18n();
  const rtlText = useRtlText();

  return (
    <View style={styles.stepContainer}>
      <StepHeader step={2} totalSteps={3} onBack={onBack} />

      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: colors.text }, rtlText]}>
          {t("assessment.step2Title")}
        </Text>
      </View>

      <View style={styles.form}>
        <Field label={t("assessment.age")}>
          <AgeInputStepper value={age} min={1} max={120} onChange={onAgeChange} />
        </Field>

        <Field label={t("assessment.gender")}>
          <SegmentedControl<Gender>
            value={gender}
            onChange={onGenderChange}
            options={[
              { label: t("assessment.male"), value: "male" },
              { label: t("assessment.female"), value: "female" },
            ]}
          />
        </Field>
      </View>

      <View style={styles.footer}>
        <MedicalButton label={t("common.next")} onPress={onNext} />
      </View>
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

export default StepPatientInfo;
