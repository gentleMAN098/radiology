import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import { getMedicalColors } from "./theme";

interface SegmentOption<T extends string> {
  label: string;
  value: T;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

const SegmentedControl = <T extends string>({
  options,
  value,
  onChange,
}: SegmentedControlProps<T>) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction } = useI18n();

  return (
    <View style={[styles.container, { backgroundColor: colors.surfaceMuted, direction }]}>
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <Pressable
            key={option.value}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            onPress={() => onChange(option.value)}
            style={[
              styles.option,
              { backgroundColor: isActive ? colors.surface : "transparent" },
            ]}
          >
            <Text
              style={[
                styles.label,
                {
                  color: isActive ? colors.primary : colors.mutedText,
                  writingDirection: direction,
                },
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: "row",
    gap: 4,
    padding: 4,
  },
  option: {
    alignItems: "center",
    borderRadius: 7,
    flex: 1,
    minHeight: 48,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "800",
  },
});

export default SegmentedControl;
