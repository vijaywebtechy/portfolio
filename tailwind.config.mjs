/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-light-img":
          "url('/images/background/square-texture.svg'), url('/images/background/hero-bg.jpg')",
        "hero-dark-img":
          "url('/images/background/square-texture.svg'), url('/images/background/hero-bg-dark.jpg')",
        "swiper-light-gradient":
          "linear-gradient(270deg, rgb(255 255 255) 40%, rgb(255 255 255 / 13%) 99%)",
        "swiper-dark-gradient":
          "linear-gradient(270deg, rgb(0 0 0) 40%, rgb(0 0 0 / 13%) 99%)",
      },
    },
  },
  plugins: [],
};
