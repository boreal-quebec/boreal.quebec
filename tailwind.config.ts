import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#006663",
        "secondary": "#FF6B1A",
        "secondary-pale": "rgba(255,107,26,0.3)",
        "beige": "#EFDEC2"
      },
    },
  },
  plugins: [],
}
export default config
