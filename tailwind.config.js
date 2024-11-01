/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#052767",
        "purple-deep": "#3a0647",
      },
    },
    backgroundImage: {
      "gradient-to-b": "linear-gradient(180deg, #052767, #3a0647)",
    },
  },
  plugins: [],
};
