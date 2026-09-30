import { globalStyle, style } from "@vanilla-extract/css";

export const page = style({
  position: "relative",
  width: "100%",
  maxWidth: 1040,
  minHeight: "100dvh",
  margin: "0 auto",
  padding: "clamp(48px, 12vh, 128px) 24px 64px",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 440px)",
  columnGap: "clamp(40px, 7vw, 104px)",
  rowGap: 28,
  alignItems: "start",
  alignContent: "start",
  "@media": {
    "(max-width: 880px)": {
      maxWidth: 488,
      gridTemplateColumns: "minmax(0, 1fr)",
      padding: "40px 20px 48px",
    },
  },
});

const backdropCircleBase = style({
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
});

export const backdropCircleOne = style([
  backdropCircleBase,
  {
    top: -220,
    left: -260,
    width: 640,
    height: 640,
    background:
      "radial-gradient(circle, rgba(49, 130, 246, 0.16), rgba(49, 130, 246, 0) 68%)",
  },
]);

export const backdropCircleTwo = style([
  backdropCircleBase,
  {
    right: -240,
    bottom: -120,
    width: 520,
    height: 520,
    background:
      "radial-gradient(circle, rgba(49, 130, 246, 0.08), rgba(49, 130, 246, 0) 68%)",
  },
]);

export const panel = style({
  position: "relative",
  zIndex: 1,
  padding: 32,
  borderRadius: 28,
  background: "var(--color-surface)",
  boxShadow: "var(--shadow-card)",
  "@media": {
    "(max-width: 880px)": {
      padding: 24,
      borderRadius: 24,
    },
  },
});

const feedbackBase = style({
  marginTop: 16,
  borderRadius: 14,
  padding: "14px 16px",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.5,
  selectors: {
    "&:first-child": {
      marginTop: 0,
    },
  },
});

export const formError = style([
  feedbackBase,
  {
    background: "var(--color-danger-050)",
    color: "var(--color-danger-600)",
  },
]);

export const formSuccess = style([
  feedbackBase,
  {
    background: "var(--color-primary-050)",
    color: "var(--color-primary-700)",
  },
]);

export const authInfoBox = style({
  marginTop: 16,
  display: "grid",
  gap: 16,
  selectors: {
    "&:first-child": {
      marginTop: 0,
    },
  },
});

export const authInfoText = style({
  margin: 0,
  fontSize: 17,
  lineHeight: 1.6,
  color: "var(--color-grey-700)",
  overflowWrap: "anywhere",
});

globalStyle(`${authInfoText} strong`, {
  fontWeight: 700,
  color: "var(--color-grey-900)",
});
