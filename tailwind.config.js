/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      catppuccin("latte"),
      // Or you can optionally specify accent colors
      catppuccin("frappe", "pink"),
      // Or you can optionally customize more semantic colors
      catppuccin("macchiato"),
      // Values not explicitly defined will use default values
      catppuccin("mocha"),
    ],
  },
};
