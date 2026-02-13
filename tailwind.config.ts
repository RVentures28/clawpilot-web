import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0E14',
          panel: '#0F1420',
          panel2: '#0C101A',
        },
        line: 'rgba(255,255,255,0.08)'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.45)'
      }
    },
  },
  plugins: [],
}
export default config
