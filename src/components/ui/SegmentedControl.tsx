import { Pressable, StyleSheet, Text, View } from "react-native";
import { useI18n } from "@/i18n/I18nProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

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
  const { colors } = useThemeColors();
  const { isRTL } = useI18n();
  const rtlText = useRtlText();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surfaceMuted,
          flexDirection: isRTL ? "row-reverse" : "row",
        },
      ]}
    >
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
                { color: isActive ? colors.primary : colors.mutedText },
                rtlText,
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
  container: { borderRadius: 8, gap: 4, padding: 4 },
  option: {
    alignItems: "center",
    borderRadius: 7,
    flex: 1,
    minHeight: 48,
    justifyContent: "center",
  },
  label: { fontSize: 16, fontWeight: "800" },
});

export default SegmentedControl;
