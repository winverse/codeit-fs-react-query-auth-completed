import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  marginTop: 8,
  height: 56,
  borderRadius: 16,
  border: 0,
  fontSize: 17,
  fontWeight: 600,
  cursor: "pointer",
  transition: "background-color 150ms ease, transform 100ms ease",
  selectors: {
    "&:active:not(:disabled)": {
      transform: "scale(0.98)",
    },
    "&:focus-visible": {
      outline: "2px solid var(--color-primary-500)",
      outlineOffset: 2,
    },
    "&:disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
});

export const variant = styleVariants({
  primary: {
    background: "var(--color-primary-500)",
    color: "#ffffff",
    selectors: {
      "&:hover:not(:disabled)": {
        background: "var(--color-primary-600)",
      },
    },
  },
  ghost: {
    background: "var(--color-grey-100)",
    color: "var(--color-grey-700)",
    selectors: {
      "&:hover:not(:disabled)": {
        background: "var(--color-grey-200)",
      },
    },
  },
});
