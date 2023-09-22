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
    colors: {
      background: "#282a36",
      foreground: "#f8f8f2",
      comment: "#6272a4",
      cyan: "#8be9fd",
      green: "#50fa7b",
      orange: "#ffb86c",
      pink: "#ff79c6",
      purple: "#bd93f9",
      red: "#ff5555",
      yellow: "#f1fa8c",
    },
  },
  plugins: [],
};
