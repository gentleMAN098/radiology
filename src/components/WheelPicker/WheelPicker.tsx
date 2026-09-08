import React, { useEffect, useRef, useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";
import { CtScanProtocol } from "@/src/domain/risk-engine/types";

const ITEM_HEIGHT = 50;

// Compact picker:
// 25px half item
// 50px full item
// 50px selected item
// 50px full item
// 25px half item
//
// Total = 200px
//
// If you want it even smaller, reduce ITEM_HEIGHT to 44.
const HALF_ITEM_HEIGHT = ITEM_HEIGHT / 2;

const PICKER_HEIGHT = ITEM_HEIGHT * 4;

const CENTER_TOP = ITEM_HEIGHT + HALF_ITEM_HEIGHT;

interface WheelPickerProps {
  protocols: CtScanProtocol[];
  selectedId: number;
  onChange: (protocolId: number) => void;
}

const WheelPicker = ({ protocols, selectedId, onChange }: WheelPickerProps) => {
  const { colors } = useThemeColors();
  const { language, t } = useI18n();
  const rtlText = useRtlText();

  const scrollRef = useRef<ScrollView>(null);

  const getSelectedIndex = (id: number) => {
    const index = protocols.findIndex((protocol) => protocol.id === id);

    return index >= 0 ? index : 0;
  };

  const [selectedIndex, setSelectedIndex] = useState(
    getSelectedIndex(selectedId),
  );

  useEffect(() => {
    if (!protocols.length) {
      return;
    }

    const index = getSelectedIndex(selectedId);

    setSelectedIndex(index);

    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        y: index * ITEM_HEIGHT,
        animated: false,
      });
    });
  }, [selectedId, protocols]);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!protocols.length) {
      return;
    }

    const offsetY = event.nativeEvent.contentOffset.y;

    const index = Math.round(offsetY / ITEM_HEIGHT);

    const clampedIndex = Math.max(0, Math.min(index, protocols.length - 1));

    if (clampedIndex !== selectedIndex) {
      setSelectedIndex(clampedIndex);
      onChange(protocols[clampedIndex].id);
    }
  };

  const handlePress = (index: number) => {
    scrollRef.current?.scrollTo({
      y: index * ITEM_HEIGHT,
      animated: true,
    });
  };

  if (!protocols.length) {
    return null;
  }

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
      {/* Selected item indicator */}
      <View
        pointerEvents="none"
        style={[
          styles.selection,
          {
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
        bounces={false}
        overScrollMode="never"
        nestedScrollEnabled
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
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
                  style={[
                    styles.name,
                    {
                      color: isSelected ? colors.primary : colors.text,
                      fontSize: isSelected ? 17 : 15,
                      fontWeight: isSelected ? "900" : "600",
                    },
                    rtlText,
                  ]}
                >
                  {language === "fa" ? item.nameFa : item.nameEn}
                </Text>

                <Text
                  numberOfLines={1}
                  style={[
                    styles.dose,
                    {
                      color: isSelected ? colors.primary : colors.mutedText,
                      fontSize: isSelected ? 12 : 11,
                      fontWeight: isSelected ? "800" : "600",
                    },
                    rtlText,
                  ]}
                >
                  {item.effectiveDose} {t("assessment.doseUnit")}
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
    height: PICKER_HEIGHT,
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },

  selection: {
    position: "absolute",

    // Selected item is in the center
    top: CENTER_TOP,

    left: 8,
    right: 8,

    height: ITEM_HEIGHT,

    borderRadius: 8,
    borderWidth: 1,

    zIndex: 10,
  },

  contentContainer: {
    // Allows first item to reach the center
    paddingTop: CENTER_TOP,

    // Allows last item to reach the center
    paddingBottom: CENTER_TOP,
  },

  itemTouchable: {
    height: ITEM_HEIGHT,
  },

  item: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  name: {
    lineHeight: 20,
  },

  dose: {
    marginTop: 1,
    lineHeight: 15,
  },
});

export default WheelPicker;
