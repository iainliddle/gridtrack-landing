/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'primary-hover': '#2563EB',
        'primary-soft': '#DBEAFE',
        background: '#F8FAFC',
        muted: '#6B7280',
        dark: '#111827',
        success: '#22C55E',
        warning: '#F59E0B',
      },
      borderRadius: {
        'sm': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'blue-glow': '0 0 0 4px rgba(59, 130, 246, 0.1)',
        'blue-lg': '0 10px 40px rgba(59, 130, 246, 0.25)',
        'blue-xl': '0 20px 60px rgba(59, 130, 246, 0.30)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
