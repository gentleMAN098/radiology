import { StyleSheet, Text, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

import Card from "../ui/Card";

interface ReportCardProps {
  rows: {
    label: string;
    value: string;
  }[];
}

const ReportCard = ({ rows }: ReportCardProps) => {
  const { colors } = useThemeColors();
  const { t } = useI18n();
  const rtlText = useRtlText();

  return (
    <Card>
      <Text style={[styles.title, { color: colors.text }, rtlText]}>
        {t("report.scanDetails")}
      </Text>
      {rows.map((row) => (
        <View key={row.label} style={[styles.row, { borderColor: colors.border }]}>
          <Text style={[styles.label, { color: colors.mutedText }, rtlText]}>
            {row.label}
          </Text>
          <Text style={[styles.value, { color: colors.text }, rtlText]}>
            {row.value}
          </Text>
        </View>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "900",
  },
  row: {
    borderTopWidth: 1,
    gap: 6,
    paddingTop: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: "800",
  },
  value: {
    fontSize: 16,
    fontWeight: "800",
  },
});

export default ReportCard;
