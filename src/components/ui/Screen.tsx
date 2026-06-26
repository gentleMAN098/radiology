import { PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet, useColorScheme, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useI18n } from "@/i18n/I18nProvider";
import { getMedicalColors } from "./theme";

interface ScreenProps extends PropsWithChildren {
  scrollable?: boolean;
}

const Screen = ({ children, scrollable = false }: ScreenProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const insets = useSafeAreaInsets();
  const { isRTL } = useI18n();

  const contentStyle = [
    styles.content,
    {
      paddingBottom: insets.bottom + 32,
      direction: (isRTL ? "rtl" : "ltr") as "rtl" | "ltr",
    },
  ];

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      {scrollable ? (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={contentStyle}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[contentStyle, { flex: 1 }]}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    gap: 20,
    padding: 20,
    paddingTop: 40,
  },
});

export default Screen;
