import { StyleSheet, Text } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import SkeletonBlock from "@/src/components/SkeletonBlock";
import { useRtlText } from "@/src/hooks/useRtlText";
import { useThemeColors } from "@/src/hooks/useThemeColors";

const ReportLoadingState = () => {
  const { colors } = useThemeColors();
  const { t } = useI18n();
  const rtlText = useRtlText();

  return (
    <>
      <Text style={[styles.title, { color: colors.text }, rtlText]}>
        {t("report.loading")}
      </Text>
      <SkeletonBlock height={240} />
      <SkeletonBlock height={130} />
      <SkeletonBlock height={130} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 38,
  },
});

export default ReportLoadingState;
