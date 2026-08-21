import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";

interface CardProps extends PropsWithChildren {
  style?: ViewStyle;
}

const Card = ({ children, style }: CardProps) => {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 18,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 2,
  },
});

export default Card;
