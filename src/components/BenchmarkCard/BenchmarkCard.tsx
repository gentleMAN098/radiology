// src/components/BenchmarkCard/BenchmarkCard.tsx
import { StyleSheet, Text, useColorScheme, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import Card from "../ui/Card";
import LottieAnimation from "../ui/LottieAnimation";
import { getMedicalColors } from "../ui/theme";

// Import your animation files
import airplaneAnimation from "@/assets/animations/aero-plane.json";
interface BenchmarkCardProps {
  title: string;
  value: string;
  accent?: "blue" | "green" | "amber";
  animationType?: "airplane" | "radiation" | "xray";
}

const BenchmarkCard = ({
  title,
  value,
  accent = "blue",
  animationType = "airplane",
}: BenchmarkCardProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL } = useI18n();
  const accentColor =
    accent === "green"
      ? colors.accent
      : accent === "amber"
        ? colors.warning
        : colors.primary;

  // Select animation based on type
  const getAnimationSource = () => {
    switch (animationType) {
      case "radiation":
        return airplaneAnimation;
      case "xray":
        return airplaneAnimation;
      case "airplane":
      default:
        return airplaneAnimation;
    }
  };

  return (
    <Card style={styles.card}>
      <View style={[styles.marker, { backgroundColor: accentColor }]} />

      {/* Lottie Animation */}
      <View style={styles.animationContainer}>
        <LottieAnimation
          source={getAnimationSource()}
          loop={true}
          autoPlay={true}
          speed={0.8}
          style={styles.animation}
        />
      </View>

      <Text
        style={[
          styles.title,
          {
            color: colors.text,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.value,
          {
            color: colors.mutedText,
            textAlign: isRTL ? "right" : "left",
            writingDirection: direction,
          },
        ]}
      >
        {value}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: "30%",
    padding: 16,
    alignItems: "center",
  },
  marker: {
    borderRadius: 3,
    height: 6,
    width: 42,
    marginBottom: 12,
  },
  animationContainer: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  animation: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 15,
    fontWeight: "900",
    textAlign: "center",
  },
  value: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
  },
});

export default BenchmarkCard;
