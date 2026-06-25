import { DotLottie } from "@lottiefiles/dotlottie-react-native";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface LottieAnimationProps {
  source: any; // JSON file
  style?: ViewStyle;
  loop?: boolean;
  autoPlay?: boolean;
  speed?: number;
  onFinish?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  source,
  style,
  loop = true,
  autoPlay = true,
  speed = 1,
  onFinish,
}) => {
  return (
    <View style={[styles.container, style]}>
      <DotLottie
        source={source}
        loop={loop}
        autoplay={autoPlay}
        speed={speed}
        onComplete={onFinish}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: "100%",
    height: "100%",
  },
});

export default LottieAnimation;
