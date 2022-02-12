module.exports = {
  mode: "jit",
  purge: ["./src/**/*.vue"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#EF0097",
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
          maxWidth: "1400px",
        },
      });
    },
  ],
};
