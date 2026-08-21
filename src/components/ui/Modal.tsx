import {
  Modal as RNModal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
} from "react-native";
import { useI18n } from "@/i18n/I18nProvider";
import { getMedicalColors } from "./theme";

export interface InfoSection {
  heading?: string;
  paragraphs: string[];
}

export interface InfoReference {
  id: number;
  text: string;
  url?: string;
}

interface InfoModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  intro?: string;
  sections: InfoSection[];
  references?: InfoReference[];
  referencesLabel?: string;
  closeLabel?: string;
}

const InfoModal = ({
  visible,
  onClose,
  title,
  intro,
  sections,
  references,
  referencesLabel = "References",
  closeLabel = "Close",
}: InfoModalProps) => {
  const isDark = useColorScheme() === "dark";
  const colors = getMedicalColors(isDark);
  const { direction, isRTL } = useI18n();
  const align = isRTL ? "right" : "left";

  return (
    <RNModal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="pageSheet"
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View
          style={[
            styles.header,
            {
              borderColor: colors.border,
              flexDirection: isRTL ? "row-reverse" : "row",
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                color: colors.text,
                textAlign: align,
                writingDirection: direction,
              },
            ]}
            numberOfLines={2}
          >
            {title}
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={closeLabel}
            onPress={onClose}
            hitSlop={10}
            style={[
              styles.closeButton,
              { backgroundColor: colors.surfaceMuted },
            ]}
          >
            <Text
              style={{ color: colors.text, fontWeight: "900", fontSize: 16 }}
            >
              ✕
            </Text>
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={styles.body}
          showsVerticalScrollIndicator={false}
        >
          {!!intro && (
            <Text
              style={[
                styles.paragraph,
                {
                  color: colors.text,
                  textAlign: align,
                  writingDirection: direction,
                },
              ]}
            >
              {intro}
            </Text>
          )}

          {sections.map((section, idx) => (
            <View key={idx} style={styles.section}>
              {!!section.heading && (
                <Text
                  style={[
                    styles.heading,
                    {
                      color: colors.primary,
                      textAlign: align,
                      writingDirection: direction,
                    },
                  ]}
                >
                  {section.heading}
                </Text>
              )}
              {section.paragraphs.map((p, pIdx) => (
                <Text
                  key={pIdx}
                  style={[
                    styles.paragraph,
                    {
                      color: colors.text,
                      textAlign: align,
                      writingDirection: direction,
                    },
                  ]}
                >
                  {p}
                </Text>
              ))}
            </View>
          ))}

          {!!references && references.length > 0 && (
            <View
              style={[styles.referencesBlock, { borderColor: colors.border }]}
            >
              <Text
                style={[
                  styles.heading,
                  {
                    color: colors.mutedText,
                    textAlign: align,
                    writingDirection: direction,
                  },
                ]}
              >
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
                      {
                        color: ref.url ? colors.primary : colors.mutedText,
                        textAlign: align,
                        writingDirection: direction,
                      },
                    ]}
                  >
                    {ref.id}. {ref.text}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  title: { flex: 1, fontSize: 20, fontWeight: "900" },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  body: { padding: 20, gap: 20 },
  section: { gap: 10 },
  heading: { fontSize: 17, fontWeight: "900" },
  paragraph: { fontSize: 15, lineHeight: 23, fontWeight: "500" },
  referencesBlock: { borderTopWidth: 1, paddingTop: 16, gap: 8 },
  referenceText: { fontSize: 12, lineHeight: 18, fontWeight: "600" },
});

export default InfoModal;
