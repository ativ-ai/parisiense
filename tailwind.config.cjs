
module.exports = {
  content: ['./index.html', './App.tsx', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'beige': {
          50: '#FBF9F4',
          100: '#F5F1E8',
          200: '#E9E0D0',
          700: '#8A7764',
          800: '#6C584C',
          900: '#4A3728',
        },
        'brand-red': '#A05252'
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: [],
}
