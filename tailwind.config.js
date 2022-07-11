module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue_dark': '#45425E',
      'light_white': '#FDFDFC',
      'dark_light_white': '#F6F6F5',
      'light_cine' : '#11BDE0',
      'dark_purple' : '#C90D9B'
    },
    extend: {},
  },
  
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")]
}