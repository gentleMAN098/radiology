import { useI18n } from "@/i18n/I18nProvider";

export const useRtlText = () => {
  const { isRTL, direction } = useI18n();

  return {
    textAlign: isRTL ? "right" : "left",
    writingDirection: direction,
  } as const;
};
