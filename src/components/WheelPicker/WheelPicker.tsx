import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { CtScanProtocol } from "@/src/domain/risk-engine/types";
import { getMedicalColors } from "../ui/theme";

const ITEM_HEIGHT = 54;
const VISIBLE_ITEMS = 5;
const CENTER_OFFSET = ITEM_HEIGHT * 2;

interface WheelPickerProps {
  protocols: CtScanProtocol[];
  selectedId: number;
  onChange: (protocolId: number) => void;
}

const WheelPicker = ({ protocols, selectedId, onChange }: WheelPickerProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, language } = useI18n();

  const scrollRef = useRef<ScrollView>(null);

  const initialIndex = Math.max(
    0,
    protocols.findIndex((p) => p.id === selectedId),
  );

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    const index = Math.max(
      0,
      protocols.findIndex((p) => p.id === selectedId),
    );

    setSelectedIndex(index);

    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        y: index * ITEM_HEIGHT,
        animated: false,
      });
    });
  }, [selectedId, protocols]);

  const handleScrollEnd = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    const clamped = Math.max(0, Math.min(index, protocols.length - 1));

    if (clamped !== selectedIndex) {
      setSelectedIndex(clamped);
      onChange(protocols[clamped].id);
    }
  };

  const handlePress = (index: number) => {
    scrollRef.current?.scrollTo({
      y: index * ITEM_HEIGHT,
      animated: true,
    });
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
            top: CENTER_OFFSET,
            backgroundColor: "transparent",
            borderColor: colors.primary,
          },
        ]}
      />

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        disableIntervalMomentum={false}
        bounces={false}
        overScrollMode="never"
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingVertical: CENTER_OFFSET,
        }}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {protocols.map((item, index) => {
          const isSelected = index === selectedIndex;

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => handlePress(index)}
              activeOpacity={0.7}
              style={styles.itemTouchable}
            >
              <View style={styles.item}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: isSelected ? colors.primary : colors.text,
                    textAlign: isRTL ? "right" : "left",
                    writingDirection: direction,
                    fontSize: isSelected ? 18 : 16,
                    fontWeight: isSelected ? "900" : "600",
                  }}
                >
                  {language === "fa" ? item.nameFa : item.nameEn}
                </Text>

                <Text
                  style={{
                    color: isSelected ? colors.primary : colors.mutedText,
                    textAlign: isRTL ? "right" : "left",
                    writingDirection: direction,
                    fontSize: isSelected ? 13 : 12,
                    fontWeight: isSelected ? "800" : "600",
                  }}
                >
                  {item.effectiveDose} mSv
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
    position: "absolute",
    left: 8,
    right: 8,
    height: ITEM_HEIGHT,
    borderRadius: 8,
    borderWidth: 1,
    zIndex: 10,
  },

  itemTouchable: {
    height: ITEM_HEIGHT,
  },

  item: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});

export default WheelPicker;
