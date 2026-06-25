import { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { getMedicalColors } from "../ui/theme";

interface AgeInputStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const AgeInputStepper = ({
  value,
  min = 1,
  max = 120,
  onChange,
}: AgeInputStepperProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction } = useI18n();

  const [text, setText] = useState(String(value));

  useEffect(() => {
    setText(String(value));
  }, [value]);

  const handleChangeText = (input: string) => {
    const sanitized = input.replace(/[^0-9]/g, "");

    setText(sanitized);

    if (sanitized === "") return;

    const num = Number(sanitized);

    if (!Number.isNaN(num)) {
      onChange(Math.min(max, Math.max(min, num)));
    }
  };

  const handleBlur = () => {
    const num = Number(text);

    if (Number.isNaN(num) || text === "") {
      setText(String(value));
      return;
    }

    const clamped = Math.min(max, Math.max(min, num));

    setText(String(clamped));
    onChange(clamped);
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.border,
          backgroundColor: colors.surface,
        },
      ]}
    >
      <Pressable
        accessibilityRole="button"
        disabled={value <= min}
        onPress={() => onChange(Math.max(min, value - 1))}
        style={styles.control}
      >
        <Text style={[styles.controlText, { color: colors.primary }]}>−</Text>
      </Pressable>

      <TextInput
        value={text}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        keyboardType="number-pad"
        maxLength={3}
        style={[
          styles.input,
          {
            color: colors.text,
            writingDirection: direction,
          },
        ]}
      />

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
    flexDirection: "row",
    height: 56,
  },
  control: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: "100%",
  },
  controlText: {
    fontSize: 28,
    fontWeight: "800",
  },
  input: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "900",
    height: "100%",
  },
});

export default AgeInputStepper;
