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
        background: '#F1EAF0',
        heading: '#FD0C0C',
        secondary: '#222222',
      },
    },
    screens: {
      s: { min: '220px', max: '315px' },
      xs: { min: '316px', max: '413px' },
      xxs: { min: '414px', max: '639px' },
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      xxl: { min: '1536px', max: '2563px' },
    },
  },
  plugins: [],
}
export default config
