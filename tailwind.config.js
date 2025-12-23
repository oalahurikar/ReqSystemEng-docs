/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  corePlugins: {
    preflight: false, // Disable preflight to prevent conflicts with Docusaurus
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          900: '#0f172a', // Slate 900
          800: '#1e293b', // Slate 800
          500: '#3b82f6', // Blue 500
          400: '#60a5fa', // Blue 400
        },
        danger: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
}

