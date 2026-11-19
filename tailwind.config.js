/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0B0D0E',
          900: '#121518',
          850: '#171B20',
          800: '#1F242B',
          700: '#2A313A',
          600: '#3D4552',
        },
        copper: {
          DEFAULT: '#C68642',
          light: '#D99B5B',
          dark: '#A5692A',
          muted: '#B87333',
          glow: 'rgba(198, 134, 66, 0.15)',
        },
        bronze: {
          DEFAULT: '#9C7A4A',
          light: '#B49363',
          dark: '#7A5E35',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          dark: '#F0ECE4',
          muted: '#E5DFD5',
        },
        patina: {
          DEFAULT: '#5B8A7E',
          light: '#72A396',
          dark: '#456B62',
        },
        stone: {
          50: '#F9F8F6',
          100: '#EFECE6',
          200: '#DFDAD1',
          300: '#C5BEB3',
          400: '#9E978C',
          500: '#7A756D',
          600: '#5F5A53',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'copper': '0 10px 30px -10px rgba(198, 134, 66, 0.25)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
