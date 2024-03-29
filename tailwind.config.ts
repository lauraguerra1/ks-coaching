import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'linen': '#F5EBE0', 
        'dogwood': '#D5BDAF'
      },
      blur: {
        'xs': '2px'
      },
      grayscale: {
        50: '50%',
      },
      height: {
        'nav-vh': 'calc(100vh - 72px)'
      }, 
    },
  },
  plugins: [],
}
export default config
