import { black } from "https://deno.land/std@0.147.0/fmt/colors.ts";

/** @type {import('$fresh/plugins/twind').Options} */
export default {
  preflight: (preflight) => ({
    ...preflight,

    body: {
      background: "#1F261F",
    },
    a: {
      decoration: "underline",
      color: "#1F261F",
    },
    p: {
      marginBottom: ".8em",
    },
    div: {
      boxSizing: "border-box",
    },
    section: {
      boxSizing: "border-box",
    },
  }),
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        black: "#1F261F",
        white: "#F3FFF9",
        green: "#02F67C",
        code: "rgba(0, 0, 0, 0.06)",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
