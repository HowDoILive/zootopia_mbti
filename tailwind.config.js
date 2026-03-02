/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zootopia: {
          yellow: '#FFD93D',
          yellowLight: '#FFF9E6',
          yellowDark: '#E6B800',
          green: '#2D5A27',
          greenLight: '#4A7C43',
          greenDark: '#1E3D1A',
          cream: '#FFFDE7',
          brown: '#3D2C1E',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
