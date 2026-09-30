import { style } from "@vanilla-extract/css";

export const hero = style({
  position: "relative",
  zIndex: 1,
  paddingTop: 8,
});

export const kicker = style({
  fontSize: 15,
  fontWeight: 700,
  color: "var(--color-primary-500)",
});

export const title = style({
  marginTop: 12,
  fontSize: "clamp(28px, 3.6vw, 40px)",
  fontWeight: 700,
  lineHeight: 1.35,
  letterSpacing: "-0.025em",
  color: "var(--color-grey-900)",
});

export const statusCard = style({
  marginTop: 36,
  borderRadius: 24,
  padding: "24px 24px 26px",
  background: "var(--color-surface)",
  boxShadow: "var(--shadow-card)",
});

export const statusCardTitle = style({
  fontSize: 15,
  fontWeight: 500,
  color: "var(--color-grey-600)",
});

export const statusText = style({
  vars: {
    "--status-dot": "var(--color-grey-400)",
  },
  marginTop: 10,
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  fontSize: 24,
  fontWeight: 700,
  lineHeight: 1.35,
  letterSpacing: "-0.02em",
  color: "var(--color-grey-900)",
  overflowWrap: "anywhere",
  "::before": {
    content: '""',
    flexShrink: 0,
    width: 10,
    height: 10,
    marginTop: "calc((1.35em - 10px) / 2)",
    borderRadius: "50%",
    background: "var(--status-dot)",
  },
});

export const statusError = style({
  vars: {
    "--status-dot": "var(--color-danger-500)",
  },
  color: "var(--color-danger-500)",
});

export const statusSuccess = style({
  vars: {
    "--status-dot": "var(--color-primary-500)",
  },
  color: "var(--color-primary-500)",
});
