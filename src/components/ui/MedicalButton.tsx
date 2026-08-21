import { Pressable, StyleSheet, Text } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

interface MedicalButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const MedicalButton = ({ label, onPress, disabled }: MedicalButtonProps) => {
  const { colors } = useThemeColors();
  const rtlText = useRtlText();

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
      <Text style={[styles.label, { color: colors.primaryText }, rtlText]}>
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
