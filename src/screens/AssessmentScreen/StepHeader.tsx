import { Pressable, StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";

interface StepHeaderProps {
  step: number;
  totalSteps: number;
  onBack: () => void;
}

const StepHeader = ({ step, totalSteps, onBack }: StepHeaderProps) => {
  const { colors } = useThemeColors();
  const { isRTL, t } = useI18n();

  return (
    <View
      style={[styles.headerRow, { flexDirection: isRTL ? "row-reverse" : "row" }]}
    >
      <Pressable
        onPress={onBack}
        style={[styles.backButton, { borderColor: colors.border }]}
      >
        <Text style={{ color: colors.primary, fontWeight: "700" }}>
          {t("common.back")}
        </Text>
      </Pressable>
      <Text style={[styles.stepIndicator, { color: colors.mutedText }]}>
        {step} / {totalSteps}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    alignItems: "center",
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
    fontWeight: "600",
  },
});

export default StepHeader;
