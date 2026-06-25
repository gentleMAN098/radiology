import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import AgeWheelPicker from "@/src/components/WheelPicker/AgeWheelPicker";
import WheelPicker from "@/src/components/WheelPicker/WheelPicker";
import Field from "@/src/components/ui/Field";
import MedicalButton from "@/src/components/ui/MedicalButton";
import NumberStepper from "@/src/components/ui/NumberStepper";
import Screen from "@/src/components/ui/Screen";
import SegmentedControl from "@/src/components/ui/SegmentedControl";
import { getMedicalColors } from "@/src/components/ui/theme";
import { CT_PROTOCOLS } from "@/src/data/protocols";
import { Gender } from "@/src/domain/risk-engine/types";

const AssessmentScreen = () => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, t } = useI18n();
  const [age, setAge] = useState(40);
  const [gender, setGender] = useState<Gender>("male");
  const [scanId, setScanId] = useState(CT_PROTOCOLS[0].id);
  const [scanCount, setScanCount] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);

  const canCalculate = age >= 1 && age <= 120 && scanCount >= 1;

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

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <View style={styles.titleBlock}>
          <Text
            style={[
              styles.appName,
              {
                color: colors.primary,
                textAlign: isRTL ? "right" : "left",
                writingDirection: direction,
              },
            ]}
          >
            {t("common.ctRiskAppName")}
          </Text>
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
                textAlign: isRTL ? "right" : "left",
                writingDirection: direction,
              },
            ]}
          >
            {t("assessment.title")}
          </Text>
        </View>

        {/* Actions Bar with border */}
        <View style={[styles.actionsBar, { borderBottomColor: colors.border }]}>
          <View
            style={[
              styles.actionsContainer,
              {
                flexDirection: isRTL ? "row-reverse" : "row",
                justifyContent: isRTL ? "flex-end" : "flex-start",
              },
            ]}
          >
            <View style={styles.actionItem}>
              <ThemeSwitcher />
            </View>
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <View style={styles.actionItem}>
              <LanguageSwitcher />
            </View>
          </View>
        </View>
      </View>

      <Text
        style={[
          styles.subtitle,
          {
            color: colors.mutedText,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {t("assessment.subtitle")}
      </Text>

      <View style={styles.form}>
        <Field label={t("assessment.age")}>
          <AgeWheelPicker value={age} onChange={setAge} />
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

        <MedicalButton
          disabled={!canCalculate || isCalculating}
          label={
            isCalculating
              ? t("assessment.calculating")
              : t("assessment.calculate")
          }
          onPress={handleCalculate}
        />
      </View>

      <Text
        style={[
          styles.disclaimer,
          {
            color: colors.mutedText,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {t("assessment.disclaimer")}
      </Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    gap: 16,
    marginBottom: 8,
  },
  titleBlock: {
    gap: 4,
  },
  appName: {
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 39,
  },
  actionsBar: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginTop: 4,
  },
  actionsContainer: {
    alignItems: "center",
    gap: 12,
  },
  actionItem: {
    flexShrink: 0,
  },
  divider: {
    width: 1,
    height: 28,
    opacity: 0.3,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 25,
    marginBottom: 16,
  },
  form: {
    gap: 18,
  },
  disclaimer: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,
    marginTop: 8,
  },
});

export default AssessmentScreen;
