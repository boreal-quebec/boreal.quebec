import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing:{
        "dot": "55px"
      },
      fontSize:{
        "title": "52px",
        "subtitle": "29x"
      },
      colors:{
        "primary": "#006663",
        "primary-800": "#172E2C",
        "primary-100": "#172E2C",
        "secondary-800": "#B34001",
        "secondary": "#FF6B1A",
        "secondary-pale": "rgba(255,107,26,0.3)",
        "white-pale": "rgba(255,255,255,0.5)",
        "beige": "#EFDEC2",
        "cyan": "#00B3AD",
        "cyan-light": "#47cec9"
      },
      borderRadius:{
        "5xl": "50px"
      }
    },
  },
  plugins: [],
}
export default config
