// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
//   darkMode: 'class',
// }
// export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DD0031',
          50: '#FFE5E9',
          100: '#FFCCD3',
          200: '#FF99A7',
          300: '#FF667A',
          400: '#FF334E',
          500: '#DD0031',
          600: '#AB0026',
          700: '#79001B',
          800: '#470010',
          900: '#150005',
        },
        secondary: {
          DEFAULT: '#1976D2',
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1976D2',
          600: '#1565C0',
          700: '#0D47A1',
          800: '#0A2F6B',
          900: '#061834',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config