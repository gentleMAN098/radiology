import "@/global.css";
import { Stack } from "expo-router";

import { I18nProvider } from "@/i18n/I18nProvider";
import { ThemeProvider } from "@/src/theme/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </I18nProvider>
    </ThemeProvider>
  );
}
