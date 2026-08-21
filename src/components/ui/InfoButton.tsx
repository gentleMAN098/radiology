import { Pressable, StyleSheet, Text, useColorScheme } from "react-native";
import { getMedicalColors } from "./theme";

interface InfoButtonProps {
  onPress: () => void;
  accessibilityLabel: string;
}

const InfoButton = ({ onPress, accessibilityLabel }: InfoButtonProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      hitSlop={8}
      style={[
        styles.button,
        { borderColor: colors.border, backgroundColor: colors.surface },
      ]}
    >
      <Text style={[styles.icon, { color: colors.primary }]}>ⓘ</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { fontSize: 16, fontWeight: "900" },
});

export default InfoButton;
