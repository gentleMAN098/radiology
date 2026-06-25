import "@/global.css";
import { Stack, usePathname, useGlobalSearchParams } from "expo-router";
import { useEffect, useRef } from "react";
import { PostHogProvider } from "posthog-react-native";

import { I18nProvider } from "@/i18n/I18nProvider";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { posthog } from "@/src/config/posthog";

export default function RootLayout() {
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const previousPathname = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      posthog.screen(pathname, {
        previous_screen: previousPathname.current ?? null,
        ...params,
      });
      previousPathname.current = pathname;
    }
  }, [pathname, params]);

  return (
    <PostHogProvider
      client={posthog}
      autocapture={{
        captureScreens: false,
        captureTouches: true,
        propsToCapture: ["testID"],
      }}
    >
      <ThemeProvider>
        <I18nProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </I18nProvider>
      </ThemeProvider>
    </PostHogProvider>
  );
}
