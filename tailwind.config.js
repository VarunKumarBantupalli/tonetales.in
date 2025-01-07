/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-light': '#FFD700',
        'gold-medium': '#FFC107',
        'gold-dark': '#FF8C00',
        'bronze': '#CD7F32',
        'champagne': '#F7E7CE',
        'golden-sand': '#DAA520',
        'amber': '#FFBF00',
      },
      gradientColorStops: {
        'gold-start': '#FFD700',
        'gold-end': '#FF8C00',
        'bronze-start': '#CD7F32',
        'bronze-end': '#FFD700',
        'champagne-start': '#F7E7CE',
        'champagne-end': '#FFD700',
        'sand-start': '#DAA520',
        'sand-end': '#FFC107',
        'amber-start': '#FFBF00',
        'amber-end': '#FF8C00',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
};
