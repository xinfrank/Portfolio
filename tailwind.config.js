module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "360px",
      xs: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        h1: "43px",
        h2: "27px",
        normal: "24px",
        small: "20px",
        xsmall: "18px",
      },
      colors: {
        wordle: {
          out: "#3A3A3C",
          in: "#B1A039",
          found: "#458C50",
        },
        background: {
          base: "#21252A",
          button: "#7050EE",
          underline: "#4B4B4B",
          baselight: "#282D2D",
          stackbase: "#BDB3F2",
          stacktext: "#5325AD",
        },
      },
    },
  },
  plugins: [],
};
