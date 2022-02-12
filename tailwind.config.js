module.exports = {
  mode: "jit",
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#EF0097",
      },
      padding: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "1/5": "20%",
        "2/4": "50%",
        "2/5": "40%",
        "3/5": "60%",
        "3/4": "75%",
        "4/5": "80%",
        full: "100%",
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
