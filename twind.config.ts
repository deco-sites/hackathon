/** @type {import('$fresh/plugins/twind').Options} */
export default {
  preflight: (preflight: any) => ({
    ...preflight,

    body: {
      background: "#0A2121",
    },
    a: {
      decoration: "underline",
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
        primary: "#0A2121",
        accent: "#02F67C",
        transparent: "transparent",
      },
      fontFamily: {
        mono: ["Noto Sans Mono", "monospace"]
      },
    },
    plugins: {
      ".underline": {
        "text-decoration": "underline"
      }
    },
  },
};
