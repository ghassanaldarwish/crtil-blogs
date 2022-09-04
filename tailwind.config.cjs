/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        dm: "'DM Mono', monospace",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
