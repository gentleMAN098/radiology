import { PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColors } from "@/src/hooks/useThemeColors";

interface ScreenProps extends PropsWithChildren {
  scrollable?: boolean;
}

const Screen = ({ children, scrollable = false }: ScreenProps) => {
  const { colors } = useThemeColors();
  const insets = useSafeAreaInsets();

  const contentStyle = [styles.content, { paddingBottom: insets.bottom + 32 }];

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
        <View style={[contentStyle, { flex: 1 }]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { flexGrow: 1, gap: 20, padding: 20, paddingTop: 40 },
});

export default Screen;
