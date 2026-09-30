import { style } from "@vanilla-extract/css";

export const field = style({
  display: "grid",
  gap: 8,
});

export const label = style({
  fontSize: 14,
  fontWeight: 500,
  color: "var(--color-grey-700)",
});

export const input = style({
  height: 54,
  borderRadius: 14,
  border: 0,
  background: "var(--color-grey-100)",
  padding: "0 16px",
  fontSize: 16,
  fontWeight: 500,
  color: "var(--color-grey-900)",
  outline: "none",
  transition: "background-color 150ms ease, box-shadow 150ms ease",
  selectors: {
    "&::placeholder": {
      color: "var(--color-grey-400)",
      fontWeight: 400,
    },
    "&:focus": {
      background: "var(--color-surface)",
      boxShadow: "inset 0 0 0 2px var(--color-primary-500)",
    },
  },
});

export const inputInvalid = style({
  background: "var(--color-surface)",
  boxShadow: "inset 0 0 0 1.5px var(--color-danger-500)",
  selectors: {
    "&:focus": {
      boxShadow: "inset 0 0 0 2px var(--color-danger-500)",
    },
  },
});

export const errorText = style({
  fontSize: 13,
  fontWeight: 500,
  lineHeight: 1.4,
  color: "var(--color-danger-500)",
});
