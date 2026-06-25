import { ReactNode } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import { getMedicalColors } from "./theme";

interface FieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const Field = ({ label, error, children }: FieldProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL } = useI18n();

  return (
    <View style={styles.field}>
      <Text
        style={[
          styles.label,
          {
            color: colors.text,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {label}
      </Text>
      {children}
      {!!error && (
        <Text
          style={[
            styles.error,
            {
              color: colors.danger,
              textAlign: isRTL ? "right" : "left",
              writingDirection: direction,
            },
          ]}
        >
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
