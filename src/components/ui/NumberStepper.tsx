import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import { getMedicalColors } from "./theme";

interface NumberStepperProps {
  value: number;
  min?: number;
  onChange: (value: number) => void;
}

const NumberStepper = ({ value, min = 1, onChange }: NumberStepperProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction } = useI18n();

  return (
    <View style={[styles.container, { borderColor: colors.border, backgroundColor: colors.surface }]}>
      <Pressable
        accessibilityRole="button"
        disabled={value <= min}
        onPress={() => onChange(Math.max(min, value - 1))}
        style={styles.control}
      >
        <Text style={[styles.controlText, { color: colors.primary }]}>-</Text>
      </Pressable>
      <Text style={[styles.value, { color: colors.text, writingDirection: direction }]}>
        {value}
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => onChange(value + 1)}
        style={styles.control}
      >
        <Text style={[styles.controlText, { color: colors.primary }]}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    height: 56,
    justifyContent: "space-between",
  },
  control: {
    alignItems: "center",
    height: 56,
    justifyContent: "center",
    width: 64,
  },
  controlText: {
    fontSize: 28,
    fontWeight: "800",
  },
  value: {
    fontSize: 22,
    fontWeight: "900",
  },
});

export default NumberStepper;
