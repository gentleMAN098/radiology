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
import { CtScanProtocol } from "@/src/domain/risk-engine/types";

import { getMedicalColors } from "../ui/theme";

const ITEM_HEIGHT = 54;
const VISIBLE_ITEMS = 5;

interface WheelPickerProps {
  protocols: CtScanProtocol[];
  selectedId: number;
  onChange: (protocolId: number) => void;
}

const WheelPicker = ({ protocols, selectedId, onChange }: WheelPickerProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, language } = useI18n();
  const scrollY = useRef(new Animated.Value(0)).current;
  const selectedIndex = Math.max(
    0,
    protocols.findIndex((protocol) => protocol.id === selectedId),
  );

  const handleMomentumEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    const protocol =
      protocols[Math.max(0, Math.min(index, protocols.length - 1))];

    if (protocol && protocol.id !== selectedId) {
      onChange(protocol.id);
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
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContent}
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
        {protocols.map((item, index) => {
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
            outputRange: [0.92, 1, 0.92],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={item.id}
              style={[
                styles.item,
                {
                  opacity,
                  transform: [{ scale }],
                },
              ]}
            >
              <Text
                numberOfLines={1}
                style={[
                  styles.title,
                  {
                    color: colors.text,
                    textAlign: isRTL ? "right" : "left",
                    writingDirection: direction,
                  },
                ]}
              >
                {language === "fa" ? item.nameFa : item.nameEn}
              </Text>

              <Text
                style={[
                  styles.dose,
                  {
                    color: colors.mutedText,
                    textAlign: isRTL ? "right" : "left",
                    writingDirection: direction,
                  },
                ]}
              >
                {item.effectiveDose} mSv
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
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  dose: {
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },
});

export default WheelPicker;
