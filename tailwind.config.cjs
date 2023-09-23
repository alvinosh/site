const { createThemes } = require("tw-colors");
const { themes } = require("./src/config/themes");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // courier new monospace font
    extend: {
      fontFamily: {
        serif: ["Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [createThemes(themes)],
};
