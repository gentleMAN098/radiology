import { Pressable, StyleSheet, Text, useColorScheme } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import { getMedicalColors } from "./theme";

interface MedicalButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const MedicalButton = ({ label, onPress, disabled }: MedicalButtonProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction } = useI18n();

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: colors.primary, opacity: disabled ? 0.45 : pressed ? 0.82 : 1 },
      ]}
    >
      <Text style={[styles.label, { color: colors.primaryText, writingDirection: direction }]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 8,
    minHeight: 56,
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  label: {
    fontSize: 17,
    fontWeight: "800",
  },
});

export default MedicalButton;
