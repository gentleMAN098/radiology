import { useColorScheme } from "react-native";

import { getMedicalColors } from "@/src/components/ui/theme";

export const useThemeColors = () => {
  const isDark = useColorScheme() === "dark";

  return { colors: getMedicalColors(isDark), isDark };
};
