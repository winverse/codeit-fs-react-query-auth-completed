import { style } from "@vanilla-extract/css";

export const modeSwitch = style({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  borderRadius: 14,
  background: "var(--color-grey-100)",
  padding: 4,
  overflow: "hidden",
});

export const modeButton = style({
  position: "relative",
  height: 42,
  border: 0,
  borderRadius: 10,
  background: "transparent",
  fontSize: 15,
  fontWeight: 600,
  color: "var(--color-grey-500)",
  cursor: "pointer",
  transition: "color 160ms ease",
  zIndex: 1,
  selectors: {
    "&:hover": {
      color: "var(--color-grey-700)",
    },
  },
});

export const modePill = style({
  position: "absolute",
  top: 4,
  left: 4,
  height: 42,
  width: "calc(50% - 4px)",
  borderRadius: 10,
  background: "var(--color-surface)",
  boxShadow: "0 1px 3px rgba(0, 27, 55, 0.1)",
  zIndex: 0,
  pointerEvents: "none",
});

export const modeButtonLabel = style({
  position: "relative",
  zIndex: 1,
});

export const modeButtonActive = style({
  color: "var(--color-grey-900)",
  selectors: {
    "&:hover": {
      color: "var(--color-grey-900)",
    },
  },
});
