module.exports = {
  mode: "jit",
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      screens: {
        menuBreak: "1150px",
      },
      colors: {
        primary: "#EF0097",
      },
      padding: {
        "1/5": "20%",
      },
    },
  },
  variants: {
    extend: {
      minWidth: ["responsive"],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 1rem",
          margin: "0 auto",
          maxWidth: "1200px",
        },
      });
    },
  ],
};
