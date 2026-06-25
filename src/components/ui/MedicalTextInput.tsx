import { StyleSheet, TextInput, TextInputProps, useColorScheme } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import { getMedicalColors } from "./theme";

const MedicalTextInput = (props: TextInputProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL } = useI18n();

  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.mutedText}
      style={[
        styles.input,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          color: colors.text,
          textAlign: isRTL ? "right" : "left",
          writingDirection: direction,
        },
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 18,
    fontWeight: "700",
    minHeight: 56,
    paddingHorizontal: 16,
  },
});

export default MedicalTextInput;
