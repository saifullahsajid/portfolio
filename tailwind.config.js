module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "background-color": "#F7F2F2",
        "nav-menu-background-color": "#EDE9E9",
        "nav-menu-selected-item-color": "#7F8184",
      },
      fontFamily: {
        poppins: ["Poppins"],
        smooch: ["Smooch"],
        // poppins: ["Space Mono"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
