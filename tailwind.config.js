/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s infinite alternate ease-in-out', // New glow animation
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: { // New keyframes for moving blue shadows
          '0%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.8)' },
          '100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
