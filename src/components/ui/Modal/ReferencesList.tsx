import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

export interface InfoReference {
  id: number;
  text: string;
  url?: string;
}

interface ReferencesListProps {
  references: readonly InfoReference[];
  referencesLabel: string;
}

const ReferencesList = ({ references, referencesLabel }: ReferencesListProps) => {
  const { colors } = useThemeColors();
  const rtlText = useRtlText();

  if (references.length === 0) return null;

  return (
    <View style={[styles.referencesBlock, { borderColor: colors.border }]}>
      <Text style={[styles.heading, { color: colors.mutedText }, rtlText]}>
        {referencesLabel}
      </Text>
      {references.map((ref) => (
        <Pressable
          key={ref.id}
          disabled={!ref.url}
          onPress={() => ref.url && Linking.openURL(ref.url)}
        >
          <Text
            style={[
              styles.referenceText,
              { color: ref.url ? colors.primary : colors.mutedText },
              rtlText,
            ]}
          >
            {ref.id}. {ref.text}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  referencesBlock: { borderTopWidth: 1, paddingTop: 16, gap: 8 },
  heading: { fontSize: 17, fontWeight: "900" },
  referenceText: { fontSize: 12, lineHeight: 18, fontWeight: "600" },
});

export default ReferencesList;
