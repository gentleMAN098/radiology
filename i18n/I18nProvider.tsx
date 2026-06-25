import * as SecureStore from "expo-secure-store";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Language, translations } from "./translations";

type TranslationParams = Record<string, string | number>;
type TranslationKey = string;

interface I18nContextValue {
  language: Language;
  locale: string;
  isRTL: boolean;
  direction: "ltr" | "rtl";
  setLanguage: (language: Language) => Promise<void>;
  t: (key: TranslationKey, params?: TranslationParams) => string;
}

const LANGUAGE_STORAGE_KEY = "recurrly.language";
const DEFAULT_LANGUAGE: Language = "en";

const I18nContext = createContext<I18nContextValue | null>(null);

const getNestedValue = (source: unknown, path: string) =>
  path.split(".").reduce<unknown>((current, segment) => {
    if (current && typeof current === "object" && segment in current) {
      return (current as Record<string, unknown>)[segment];
    }

    return undefined;
  }, source);

const interpolate = (value: string, params?: TranslationParams) => {
  if (!params) return value;

  return Object.entries(params).reduce(
    (result, [key, replacement]) =>
      result.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), String(replacement)),
    value,
  );
};

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    let isMounted = true;

    SecureStore.getItemAsync(LANGUAGE_STORAGE_KEY)
      .then((storedLanguage) => {
        if (
          isMounted &&
          (storedLanguage === "en" || storedLanguage === "fa")
        ) {
          setLanguageState(storedLanguage);
        }
      })
      .catch(() => {
        // Keep the default language if secure storage is unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const setLanguage = async (nextLanguage: Language) => {
      setLanguageState(nextLanguage);
      await SecureStore.setItemAsync(LANGUAGE_STORAGE_KEY, nextLanguage);
    };

    const t = (key: TranslationKey, params?: TranslationParams) => {
      const translatedValue =
        getNestedValue(translations[language], key) ??
        getNestedValue(translations[DEFAULT_LANGUAGE], key);

      if (typeof translatedValue !== "string") return key;

      return interpolate(translatedValue, params);
    };

    return {
      language,
      locale: language === "fa" ? "fa-IR" : "en-US",
      isRTL: language === "fa",
      direction: language === "fa" ? "rtl" : "ltr",
      setLanguage,
      t,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
};
