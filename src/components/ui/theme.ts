export const getMedicalColors = (isDark: boolean) => ({
  background: isDark ? "#07111f" : "#f6f8fb",
  surface: isDark ? "#101b2b" : "#ffffff",
  surfaceMuted: isDark ? "#17263a" : "#eef3f8",
  text: isDark ? "#f8fafc" : "#0f172a",
  mutedText: isDark ? "#a8b3c3" : "#607086",
  border: isDark ? "#26374d" : "#d8e1ec",
  primary: isDark ? "#7dd3fc" : "#0f5f86",
  primaryText: isDark ? "#04101d" : "#ffffff",
  accent: isDark ? "#5eead4" : "#0f766e",
  warning: isDark ? "#fbbf24" : "#b45309",
  danger: isDark ? "#fb7185" : "#be123c",
  skeleton: isDark ? "#1f3148" : "#e4ebf3",
});
