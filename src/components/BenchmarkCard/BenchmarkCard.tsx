import LottieView from "lottie-react-native";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { useI18n } from "@/i18n/I18nProvider";
import Card from "../ui/Card";
import { getMedicalColors } from "../ui/theme";

// Use remote URLs or bundled JS/JSON — .lottie binary files are not Metro-resolvable
const ANIMATIONS = {
  airplane: require("../../../assets/animations/plane.json"),
  radiation: require("../../../assets/animations/radiation.json"),
  xray: require("../../../assets/animations/xray.json"),
} as const;

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

  return (
    <Card style={styles.card}>
      <View
        style={[
          styles.contentRow,
          { flexDirection: isRTL ? "row-reverse" : "row" },
        ]}
      >
        <View style={styles.animationContainer}>
          <LottieView
            source={ANIMATIONS[animationType]}
            autoPlay // capital P — this is lottie-react-native's API
            loop
            speed={0.8}
            style={{ width: 120, height: 80 }}
          />
        </View>

        <View
          style={[
            styles.textContainer,
            { alignItems: isRTL ? "flex-end" : "flex-start" },
          ]}
        >
          <View style={[styles.marker, { backgroundColor: accentColor }]} />
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
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { width: "100%", padding: 16 },
  contentRow: { alignItems: "center", gap: 16 },
  animationContainer: { width: 120, height: 80 },
  marker: { borderRadius: 3, height: 4, width: 24, marginBottom: 6 },
  textContainer: { flex: 1, gap: 2 },
  title: { fontSize: 16, fontWeight: "900" },
  value: { fontSize: 14, fontWeight: "700", lineHeight: 20 },
});

export default BenchmarkCard;
