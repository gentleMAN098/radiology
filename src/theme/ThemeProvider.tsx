import * as SecureStore from "expo-secure-store";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Appearance } from "react-native";

export type ThemePreference = "light" | "dark";

interface ThemeContextValue {
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => Promise<void>;
  toggleTheme: () => Promise<void>;
}

const THEME_STORAGE_KEY = "ct-risk.theme";
const DEFAULT_THEME: ThemePreference = "light";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setThemeState] = useState<ThemePreference>(DEFAULT_THEME);

  useEffect(() => {
    let isMounted = true;

    SecureStore.getItemAsync(THEME_STORAGE_KEY)
      .then((storedTheme) => {
        if (isMounted && (storedTheme === "light" || storedTheme === "dark")) {
          setThemeState(storedTheme);
          Appearance.setColorScheme(storedTheme);
        } else {
          Appearance.setColorScheme(DEFAULT_THEME);
        }
      })
      .catch(() => {
        Appearance.setColorScheme(DEFAULT_THEME);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo<ThemeContextValue>(() => {
    const setTheme = async (nextTheme: ThemePreference) => {
      setThemeState(nextTheme);
      Appearance.setColorScheme(nextTheme);
      await SecureStore.setItemAsync(THEME_STORAGE_KEY, nextTheme);
    };

    return {
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemePreference = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemePreference must be used inside ThemeProvider");
  }

  return context;
};
