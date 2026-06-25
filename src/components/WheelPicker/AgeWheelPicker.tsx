import { useRef } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import { getMedicalColors } from "../ui/theme";

const ITEM_HEIGHT = 52;
const VISIBLE_ITEMS = 5;
const AGES = Array.from({ length: 120 }, (_, index) => index + 1);

interface AgeWheelPickerProps {
  value: number;
  onChange: (age: number) => void;
}

const AgeWheelPicker = ({ value, onChange }: AgeWheelPickerProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, locale, t } = useI18n();
  const scrollY = useRef(new Animated.Value((value - 1) * ITEM_HEIGHT)).current;
  const selectedIndex = Math.max(0, Math.min(value - 1, AGES.length - 1));

  const handleMomentumEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    const nextAge = AGES[Math.max(0, Math.min(index, AGES.length - 1))];

    if (nextAge !== value) {
      onChange(nextAge);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View
        pointerEvents="none"
        style={[
          styles.selection,
          {
            backgroundColor: colors.surfaceMuted,
            borderColor: colors.border,
          },
        ]}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={styles.listContent}
        scrollEventThrottle={16}
        contentOffset={{
          x: 0,
          y: selectedIndex * ITEM_HEIGHT,
        }}
        onMomentumScrollEnd={handleMomentumEnd}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        {AGES.map((item, index) => {
          const inputRange = [
            (index - 2) * ITEM_HEIGHT,
            index * ITEM_HEIGHT,
            (index + 2) * ITEM_HEIGHT,
          ];

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [0.35, 1, 0.35],
            extrapolate: "clamp",
          });

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={item}
              style={[
                styles.item,
                {
                  opacity,
                  transform: [{ scale }],
                },
              ]}
            >
              <Text
                style={[
                  styles.age,
                  {
                    color: colors.text,
                    textAlign: isRTL ? "right" : "left",
                    writingDirection: direction,
                  },
                ]}
              >
                {item}
              </Text>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    overflow: "hidden",
  },
  selection: {
    borderRadius: 8,
    borderWidth: 1,
    height: ITEM_HEIGHT,
    left: 8,
    position: "absolute",
    right: 8,
    top: ITEM_HEIGHT * 2,
    zIndex: 0,
  },
  listContent: {
    paddingVertical: ITEM_HEIGHT * 2,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  age: {
    fontSize: 22,
    fontWeight: "900",
  },
});

export default AgeWheelPicker;
