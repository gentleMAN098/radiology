import { useI18n } from "@/i18n/I18nProvider";
import { translations } from "@/i18n/translations";

export type ContentTranslations = typeof translations.en.content;

export const useContentTranslations = (): ContentTranslations => {
  const { language } = useI18n();
  const locale = translations[language];

  return "content" in locale ? locale.content : translations.en.content;
};
