module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-pink': '#FFC5C5',
        'main-blue': '#30475E',
        'main-blue-hover': "#1A3E63"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
