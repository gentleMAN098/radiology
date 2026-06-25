import { StyleSheet, Text, useColorScheme, View } from "react-native";

import { useI18n } from "@/i18n/I18nProvider";

import Card from "../ui/Card";
import { getMedicalColors } from "../ui/theme";

interface ReportCardProps {
  rows: {
    label: string;
    value: string;
  }[];
}

const ReportCard = ({ rows }: ReportCardProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL, t } = useI18n();

  return (
    <Card>
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
        {t("report.scanDetails")}
      </Text>
      {rows.map((row) => (
        <View key={row.label} style={[styles.row, { borderColor: colors.border }]}>
          <Text style={[styles.label, { color: colors.mutedText, writingDirection: direction }]}>
            {row.label}
          </Text>
          <Text
            style={[
              styles.value,
              {
                color: colors.text,
                textAlign: isRTL ? "right" : "left",
                writingDirection: direction,
              },
            ]}
          >
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
