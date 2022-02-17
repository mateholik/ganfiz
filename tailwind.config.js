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
      maxWidth: ["responsive"],
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
          maxWidth: "1240px",
        },
      });
    },
  ],
};
