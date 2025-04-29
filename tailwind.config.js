/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5', // Indigo 600
          dark: '#6366F1'   // Indigo 500
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212'
        },
        card: {
          light: '#F9FAFB', // Gray 50
          dark: '#1F2937'   // Gray 800
        },
        text: {
          light: '#111827', // Gray 900
          dark: '#F9FAFB'   // Gray 50
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
