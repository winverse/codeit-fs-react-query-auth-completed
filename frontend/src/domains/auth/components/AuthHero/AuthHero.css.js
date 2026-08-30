import { style } from "@vanilla-extract/css";

export const hero = style({
  position: "relative",
  zIndex: 1,
  padding: "clamp(16px, 1vw, 24px) 0",
});

export const kicker = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 14px",
  borderRadius: 999,
  background: "rgba(37, 99, 235, 0.10)",
  color: "var(--color-primary-600)",
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 700,
});

export const statusCard = style({
  marginTop: 28,
  borderRadius: 18,
  padding: 18,
  background: "rgba(255, 255, 255, 0.86)",
  border: "1px solid rgba(37, 99, 235, 0.16)",
  backdropFilter: "blur(10px)",
});

export const statusCardTitle = style({
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(30, 64, 175, 0.86)",
});

export const statusText = style({
  marginTop: 10,
  fontSize: 14,
  fontWeight: 600,
  color: "rgba(15, 23, 42, 0.92)",
  lineHeight: 1.4,
});

export const statusError = style({
  color: "#b91c1c",
});

export const statusSuccess = style({
  color: "var(--color-primary-700)",
});
