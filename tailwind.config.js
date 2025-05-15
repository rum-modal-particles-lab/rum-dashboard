/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables manual dark mode using 'dark' class
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#22d3ee', // Teal (Mantis-like highlight)
        // Alpine sunset color palette
        'sunset-pink': '#FF6F91', // Sunset pink
        'sunset-yellow': '#FFB76B', // Sunset yellow
        'sunset-purple': '#8E44AD', // Sunset purple
        'sunset-orange': '#FF6347', // Sunset orange
        'sunset-red': '#FF4500', // Sunset red
        'sunset-indigo': '#4B0082', // Sunset indigo
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean UI font
      },
      animation: {
        'curved-lines': 'curved-lines 6s ease-in-out infinite',
        'curved-line-1': 'curved-line-1 5s ease-in-out infinite',
        'curved-line-2': 'curved-line-2 5s ease-in-out infinite',
        'curved-line-3': 'curved-line-3 5s ease-in-out infinite',
      },
      keyframes: {
        'curved-lines': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'curved-line-1': {
          '0%': { opacity: 0.1 },
          '50%': { opacity: 0.8 },
          '100%': { opacity: 0.1 },
        },
        'curved-line-2': {
          '0%': { opacity: 0.1 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 0.1 },
        },
        'curved-line-3': {
          '0%': { opacity: 0.2 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
};
