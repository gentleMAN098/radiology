import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

interface FieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const Field = ({ label, error, children }: FieldProps) => {
  const { colors } = useThemeColors();
  const rtlText = useRtlText();

  return (
    <View style={styles.field}>
      <Text style={[styles.label, { color: colors.text }, rtlText]}>
        {label}
      </Text>
      {children}
      {!!error && (
        <Text style={[styles.error, { color: colors.danger }, rtlText]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    gap: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "800",
  },
  error: {
    fontSize: 13,
    fontWeight: "600",
  },
});

export default Field;
