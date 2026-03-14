module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        bg:      '#080808',
        surface: '#111111',
        border:  '#1f1f1f',
        red:     '#dc2626',
        'red-dim': '#7f1d1d',
        ink:     '#e8e8e8',
        muted:   '#555555',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 28s linear infinite' },
    },
  },
  plugins: [],
};
