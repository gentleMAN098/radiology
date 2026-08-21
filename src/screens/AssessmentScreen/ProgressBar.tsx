import { StyleSheet, View } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const { colors } = useThemeColors();

  return (
    <View style={styles.container}>
      <View style={[styles.track, { backgroundColor: colors.border }]}>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: colors.primary,
              width: `${(step / totalSteps) * 100}%`,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  track: { height: 4, borderRadius: 2, overflow: "hidden" },
  indicator: { height: "100%" },
});

export default ProgressBar;
