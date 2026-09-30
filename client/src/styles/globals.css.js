import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  "--color-grey-050": "#f9fafb",
  "--color-grey-100": "#f2f4f6",
  "--color-grey-200": "#e5e8eb",
  "--color-grey-300": "#d1d6db",
  "--color-grey-400": "#b0b8c1",
  "--color-grey-500": "#8b95a1",
  "--color-grey-600": "#6b7684",
  "--color-grey-700": "#4e5968",
  "--color-grey-800": "#333d4b",
  "--color-grey-900": "#191f28",
  "--color-primary-050": "#e8f3ff",
  "--color-primary-500": "#3182f6",
  "--color-primary-600": "#2272eb",
  "--color-primary-700": "#1b64da",
  "--color-danger-050": "#ffeeee",
  "--color-danger-500": "#f04452",
  "--color-danger-600": "#e42939",
  "--color-surface": "#ffffff",
  "--color-background": "#f2f4f6",
  "--shadow-card":
    "0 1px 2px rgba(0, 27, 55, 0.04), 0 12px 32px rgba(0, 27, 55, 0.06)",
});

globalStyle("html, body", {
  maxWidth: "100vw",
  overflowX: "hidden",
});

globalStyle("body", {
  color: "var(--color-grey-900)",
  background: "var(--color-background)",
  fontFamily:
    "var(--font-pretendard), -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
  wordBreak: "keep-all",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button, input", {
  font: "inherit",
});
