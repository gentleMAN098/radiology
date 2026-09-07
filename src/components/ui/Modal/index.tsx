import {
  Modal as RNModal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRtlText } from "@/src/hooks/useRtlText";

import ModalHeader from "./ModalHeader";
import ReferencesList, { InfoReference } from "./ReferencesList";

export interface InfoSection {
  heading?: string;
  paragraphs: readonly string[];
}

export type { InfoReference };

interface InfoModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  intro?: string;
  sections: readonly InfoSection[];
  references?: readonly InfoReference[];
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
  const { colors } = useThemeColors();
  const rtlText = useRtlText();
  const insets = useSafeAreaInsets();

  return (
    <RNModal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="pageSheet"
    >
      <View
        style={[
          styles.container,
          { backgroundColor: colors.background, paddingTop: insets.top },
        ]}
      >
        <ModalHeader title={title} onClose={onClose} closeLabel={closeLabel} />

        <ScrollView
          contentContainerStyle={[
            styles.body,
            { paddingBottom: insets.bottom + 32 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {!!intro && (
            <Text style={[styles.paragraph, { color: colors.text }, rtlText]}>
              {intro}
            </Text>
          )}

          {sections.map((section, idx) => (
            <View key={idx} style={styles.section}>
              {!!section.heading && (
                <Text
                  style={[styles.heading, { color: colors.primary }, rtlText]}
                >
                  {section.heading}
                </Text>
              )}
              {section.paragraphs.map((p, pIdx) => (
                <Text
                  key={pIdx}
                  style={[styles.paragraph, { color: colors.text }, rtlText]}
                >
                  {p}
                </Text>
              ))}
            </View>
          ))}

          {!!references && (
            <ReferencesList
              references={references}
              referencesLabel={referencesLabel}
            />
          )}
        </ScrollView>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { padding: 20, gap: 20 },
  section: { gap: 10 },
  heading: { fontSize: 17, fontWeight: "900" },
  paragraph: { fontSize: 15, lineHeight: 23, fontWeight: "500" },
});

export default InfoModal;
