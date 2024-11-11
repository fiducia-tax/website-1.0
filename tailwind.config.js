/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      'text': '#1F1F1F',
      'background': '#FFFFFF',
      'primary': '#0059FF',
      'secondary': '#E0E0E0',
      'accent': '#1F1F1F',
      'transparent': 'transparent',
    },

    fontSize: {
      'xs': '0.650rem',
      'sm': '0.800rem',
      'md': '0.900rem',
      'base': '1rem',
      'xl': '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },

    fontFamily: {
      heading: 'Inter',
      body: 'Inter',
    },

    fontWeight: {
      small: '150',
      normal: '400',
      semibold: '550',
      bold: '700',
      extrabold: '800',
    },

    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
}