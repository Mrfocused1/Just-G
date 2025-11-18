import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#0F0F0F',
        accent: '#2D5016',
        secondary: '#F5F5F5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.15em',
      },
    },
  },
  plugins: [],
}
export default config
