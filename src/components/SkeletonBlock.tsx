import { StyleSheet, useColorScheme, View } from "react-native";

import { getMedicalColors } from "./ui/theme";

interface SkeletonBlockProps {
  height: number;
}

const SkeletonBlock = ({ height }: SkeletonBlockProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);

  return <View style={[styles.block, { backgroundColor: colors.skeleton, height }]} />;
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 8,
    opacity: 0.85,
  },
});

export default SkeletonBlock;
