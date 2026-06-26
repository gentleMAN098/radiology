import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, useColorScheme, View, Pressable } from "react-native";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import WheelPicker from "@/src/components/WheelPicker/WheelPicker";
import Field from "@/src/components/ui/Field";
import MedicalButton from "@/src/components/ui/MedicalButton";
import NumberStepper from "@/src/components/ui/NumberStepper";
import Screen from "@/src/components/ui/Screen";
import SegmentedControl from "@/src/components/ui/SegmentedControl";
import { getMedicalColors } from "@/src/components/ui/theme";
import { CT_PROTOCOLS } from "@/src/data/protocols";
import { Gender } from "@/src/domain/risk-engine/types";
import AgeInputStepper from "@/src/components/ui/AgeNumberStepper";

const AssessmentScreen = () => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, t } = useI18n();

  const [step, setStep] = useState(1);
  const [age, setAge] = useState(40);
  const [gender, setGender] = useState<Gender>("male");
  const [scanId, setScanId] = useState(CT_PROTOCOLS[0].id);
  const [scanCount, setScanCount] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);

  const canCalculate = age >= 1 && age <= 120 && scanCount >= 1;

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
    }, 350);
  };

  const renderStep = () => {
    const headerAlignment = isRTL ? "right" : "left";
    const rowDirection = isRTL ? "row-reverse" : "row";

    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.headerContainer}>
              <Text style={[styles.appName, { color: colors.primary, textAlign: headerAlignment }]}>
                {t("common.ctRiskAppName")}
              </Text>
              <Text style={[styles.title, { color: colors.text, textAlign: headerAlignment }]}>
                {t("assessment.aboutTitle")}
              </Text>
            </View>

            <Text style={[styles.description, { color: colors.text, textAlign: headerAlignment }]}>
              {t("assessment.aboutDescription")}
            </Text>

            <View style={styles.settingsBox}>
              <Field label={t("common.theme")}>
                <ThemeSwitcher />
              </Field>
              <Field label={t("common.language")}>
                <LanguageSwitcher />
              </Field>
            </View>

            <View style={styles.footer}>
              <MedicalButton label={t("common.next")} onPress={handleNext} />
            </View>
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <View style={[styles.headerRow, { flexDirection: rowDirection }]}>
              <Pressable onPress={handleBack} style={[styles.backButton, { borderColor: colors.border }]}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>{t("common.back")}</Text>
              </Pressable>
              <Text style={[styles.stepIndicator, { color: colors.mutedText }]}>2 / 3</Text>
            </View>

            <View style={styles.headerContainer}>
              <Text style={[styles.title, { color: colors.text, textAlign: headerAlignment }]}>
                {t("assessment.step2Title")}
              </Text>
            </View>

            <View style={styles.form}>
              <Field label={t("assessment.age")}>
                <AgeInputStepper value={age} min={1} max={120} onChange={setAge} />
              </Field>

              <Field label={t("assessment.gender")}>
                <SegmentedControl<Gender>
                  value={gender}
                  onChange={setGender}
                  options={[
                    { label: t("assessment.male"), value: "male" },
                    { label: t("assessment.female"), value: "female" },
                  ]}
                />
              </Field>
            </View>

            <View style={styles.footer}>
              <MedicalButton label={t("common.next")} onPress={handleNext} />
            </View>
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <View style={[styles.headerRow, { flexDirection: rowDirection }]}>
              <Pressable onPress={handleBack} style={[styles.backButton, { borderColor: colors.border }]}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>{t("common.back")}</Text>
              </Pressable>
              <Text style={[styles.stepIndicator, { color: colors.mutedText }]}>3 / 3</Text>
            </View>

            <View style={styles.headerContainer}>
              <Text style={[styles.title, { color: colors.text, textAlign: headerAlignment }]}>
                {t("assessment.step3Title")}
              </Text>
            </View>

            <View style={styles.form}>
              <Field label={t("assessment.protocol")}>
                <WheelPicker
                  protocols={CT_PROTOCOLS}
                  selectedId={scanId}
                  onChange={setScanId}
                />
              </Field>

              <Field
                label={t("assessment.numberOfScans")}
                error={scanCount < 1 ? t("assessment.scansError") : undefined}
              >
                <NumberStepper value={scanCount} min={1} onChange={setScanCount} />
              </Field>
            </View>

            <View style={styles.footer}>
              <MedicalButton
                disabled={!canCalculate || isCalculating}
                label={isCalculating ? t("assessment.calculating") : t("assessment.calculate")}
                onPress={handleCalculate}
              />
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <Screen>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
          <View style={[styles.progressIndicator, { backgroundColor: colors.primary, width: `${(step / 3) * 100}%` }]} />
        </View>
      </View>
      {renderStep()}
    </Screen>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    marginBottom: 20,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressIndicator: {
    height: '100%',
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    gap: 8,
    marginBottom: 16,
  },
  headerRow: {
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
  },
  stepIndicator: {
    fontSize: 14,
    fontWeight: '600',
  },
  appName: {
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '500',
    marginBottom: 24,
  },
  settingsBox: {
    gap: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  form: {
    gap: 24,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 20,
  },
});

export default AssessmentScreen;
