import { StyleSheet, View } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";

interface SkeletonBlockProps {
  height: number;
}

const SkeletonBlock = ({ height }: SkeletonBlockProps) => {
  const { colors } = useThemeColors();

  return <View style={[styles.block, { backgroundColor: colors.skeleton, height }]} />;
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 8,
    opacity: 0.85,
  },
});

export default SkeletonBlock;
