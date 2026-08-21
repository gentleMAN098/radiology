import { useI18n } from "@/i18n/I18nProvider";
import { translations } from "@/i18n/translations";
import type { InfoSection } from "@/src/components/ui/Modal";
import type { InfoReference } from "@/src/components/ui/Modal/ReferencesList";

// Declared explicitly (rather than derived via `typeof translations.en.content`)
// because `translations` is `as const`: once "en" and "fa" hold different
// literal string values, TS treats their inferred content types as two
// unrelated types instead of structurally-compatible ones.
export interface ContentTranslations {
  guide: {
    referenceLabel: string;
    title: string;
    sections: readonly InfoSection[];
    references: readonly InfoReference[];
  };
  doseRisk: {
    title?: string;
    sections: readonly InfoSection[];
    disclaimerTitle: string;
    disclaimerBody: string;
  };
  terms: {
    title: string;
    checkboxLabel: string;
    sections: readonly InfoSection[];
    contactEmail: string;
  };
}

export const useContentTranslations = (): ContentTranslations => {
  const { language } = useI18n();
  const locale = translations[language];

  return "content" in locale ? locale.content : translations.en.content;
};
