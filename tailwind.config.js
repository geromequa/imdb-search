/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6d1a1c",
        secondary: "#9ca3afd9",
        accent: "#F2D492",
        background: "#F5F8FA",
        border: "#E1E8ED",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "background-image": "url('/src/assets/img/background.jpg')",
      },
    },
    plugins: [],
  },
};
