import { StyleSheet, Text, View } from "react-native";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import Field from "@/src/components/ui/Field";
import InfoButton from "@/src/components/ui/InfoButton";
import MedicalButton from "@/src/components/ui/MedicalButton";
import InfoModal from "@/src/components/ui/Modal";
import { useContentTranslations } from "@/src/hooks/hooks";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useThemeColors } from "@/src/hooks/useThemeColors";

interface StepWelcomeProps {
  guideVisible: boolean;
  onOpenGuide: () => void;
  onCloseGuide: () => void;
  onNext: () => void;
}

const StepWelcome = ({
  guideVisible,
  onOpenGuide,
  onCloseGuide,
  onNext,
}: StepWelcomeProps) => {
  const { colors } = useThemeColors();
  const { isRTL, t } = useI18n();
  const rtlText = useRtlText();
  const content = useContentTranslations();

  return (
    <View style={styles.stepContainer}>
      <View style={styles.headerContainer}>
        <Text style={[styles.appName, { color: colors.primary }, rtlText]}>
          {t("common.ctRiskAppName")}
        </Text>
        <View
          style={[
            styles.titleContainer,
            { flexDirection: isRTL ? "row-reverse" : "row" },
          ]}
        >
          <Text style={[styles.title, { color: colors.text }, rtlText]}>
            {t("assessment.aboutTitle")}
          </Text>
          <InfoButton
            accessibilityLabel={t("assessment.aboutDescription")}
            onPress={onOpenGuide}
          />
        </View>
      </View>
      <Text style={[styles.description, { color: colors.text }, rtlText]}>
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
        <MedicalButton label={t("common.next")} onPress={onNext} />
      </View>
      <InfoModal
        visible={guideVisible}
        onClose={onCloseGuide}
        title={content.guide.title}
        // intro={content.guide.intro}
        sections={content.guide.sections}
        references={content.guide.references}
        referencesLabel={content.guide.referenceLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  headerContainer: {
    gap: 8,
    marginBottom: 16,
  },
  appName: {
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "500",
    marginBottom: 24,
  },
  settingsBox: {
    gap: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
  footer: {
    marginTop: "auto",
    paddingTop: 20,
  },
});

export default StepWelcome;
