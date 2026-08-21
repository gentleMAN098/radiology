import { Pressable, StyleSheet, Text, View } from "react-native";
import { useI18n } from "@/i18n/I18nProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

interface NumberStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const NumberStepper = ({
  value,
  min = 1,
  max = Infinity,
  onChange,
}: NumberStepperProps) => {
  const { colors } = useThemeColors();
  const { isRTL } = useI18n();
  const rtlText = useRtlText();

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.border,
          backgroundColor: colors.surface,
          flexDirection: isRTL ? "row-reverse" : "row",
        },
      ]}
    >
      <Pressable
        accessibilityRole="button"
        disabled={value <= min}
        onPress={() => onChange(Math.max(min, value - 1))}
        style={styles.control}
      >
        <Text style={[styles.controlText, { color: colors.primary }]}>-</Text>
      </Pressable>
      <Text style={[styles.value, { color: colors.text }, rtlText]}>
        {value}
      </Text>
      <Pressable
        accessibilityRole="button"
        disabled={value >= max}
        onPress={() => onChange(Math.min(max, value + 1))}
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
    height: 56,
    justifyContent: "space-between",
  },
  control: {
    alignItems: "center",
    height: 56,
    justifyContent: "center",
    width: 64,
  },
  controlText: { fontSize: 28, fontWeight: "800" },
  value: { fontSize: 22, fontWeight: "900" },
});

export default NumberStepper;
