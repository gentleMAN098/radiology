import { Pressable, StyleSheet, Text, View } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useI18n } from "@/i18n/I18nProvider";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  closeLabel: string;
}

const ModalHeader = ({ title, onClose, closeLabel }: ModalHeaderProps) => {
  const { colors } = useThemeColors();
  const { isRTL } = useI18n();
  const rtlText = useRtlText();

  return (
    <View
      style={[
        styles.header,
        { borderColor: colors.border, flexDirection: isRTL ? "row-reverse" : "row" },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }, rtlText]} numberOfLines={2}>
        {title}
      </Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={closeLabel}
        onPress={onClose}
        hitSlop={10}
        style={[styles.closeButton, { backgroundColor: colors.surfaceMuted }]}
      >
        <Text style={{ color: colors.text, fontWeight: "900", fontSize: 16 }}>
          ✕
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 12,
  },
  title: { flex: 1, fontSize: 20, fontWeight: "900" },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModalHeader;
