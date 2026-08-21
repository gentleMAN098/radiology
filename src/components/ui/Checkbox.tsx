import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useI18n } from "@/i18n/I18nProvider";
import { getMedicalColors } from "./theme";

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  accessibilityLabel?: string;
}

const Checkbox = ({
  checked,
  onChange,
  label,
  accessibilityLabel,
}: CheckboxProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL } = useI18n();

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={accessibilityLabel ?? label}
      onPress={() => onChange(!checked)}
      style={[styles.row, { flexDirection: isRTL ? "row-reverse" : "row" }]}
    >
      <View
        style={[
          styles.box,
          {
            borderColor: checked ? colors.primary : colors.border,
            backgroundColor: checked ? colors.primary : "transparent",
          },
        ]}
      >
        {checked && (
          <Text style={[styles.check, { color: colors.primaryText }]}>✓</Text>
        )}
      </View>
      <Text
        style={[
          styles.label,
          {
            color: colors.text,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
            flex: 1,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: { alignItems: "flex-start", gap: 12 },
  box: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  check: { fontSize: 14, fontWeight: "900" },
  label: { fontSize: 14, lineHeight: 20, fontWeight: "600" },
});

export default Checkbox;
