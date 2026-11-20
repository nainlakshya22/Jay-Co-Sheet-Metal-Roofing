/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // THREE-COLOR LUXURY PALETTE (Primary, Secondary, Accent)
        mocha: {
          950: '#120E0B',
          900: '#1C1612',
          850: '#251E19',
          800: '#362B23',
          700: '#4A3B30',
          600: '#5B4632', // Exact PRIMARY reference Mocha Brown
          DEFAULT: '#5B4632',
          500: '#785D45',
          400: '#96765A',
          300: '#B89778',
        },
        gold: {
          light: '#FBF3E0',
          DEFAULT: '#F4D9A0', // Exact SECONDARY reference Champagne Gold
          muted: '#D8BC7C',
          dark: '#B3924B',
          glow: 'rgba(244, 217, 160, 0.22)',
          ambient: 'rgba(244, 217, 160, 0.08)',
        },
        amber: {
          light: '#E08B38',
          DEFAULT: '#C8792C', // Exact ACCENT reference Burnt Amber
          dark: '#9E5919',
          glow: 'rgba(200, 121, 44, 0.35)',
          subtle: 'rgba(200, 121, 44, 0.15)',
        },

        // Backward compatibility mappings for existing component classes
        charcoal: {
          950: '#120E0B', // Rich deep espresso mocha black
          900: '#1C1612', // Dark mocha card surface
          850: '#251E19', // Elevated mocha container
          800: '#362B23', // Mocha border & divider
          700: '#4A3B30', // Medium mocha
          600: '#5B4632', // Mocha brown
        },
        copper: {
          DEFAULT: '#C8792C', // Burnt Amber accent
          light: '#F4D9A0',   // Champagne Gold
          dark: '#5B4632',    // Mocha Brown
          muted: '#9E5919',
          glow: 'rgba(200, 121, 44, 0.25)',
        },
        bronze: {
          DEFAULT: '#5B4632',
          light: '#F4D9A0',
          dark: '#362B23',
        },
        ivory: {
          DEFAULT: '#FAF7F2',
          dark: '#EDE5D8',
          muted: '#DFD5C6',
        },
        patina: {
          DEFAULT: '#5B8A7E',
          light: '#72A396',
          dark: '#456B62',
        },
        stone: {
          50: '#FAF8F5',
          100: '#F2EDE4',
          200: '#E2D9CB',
          300: '#C7BBA8',
          400: '#9F927D',
          500: '#7B6F5D',
          600: '#574D3F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'gold': '0 10px 30px -10px rgba(244, 217, 160, 0.25)',
        'gold-lg': '0 20px 45px -10px rgba(244, 217, 160, 0.35)',
        'amber': '0 10px 30px -10px rgba(200, 121, 44, 0.35)',
        'amber-lg': '0 20px 45px -10px rgba(200, 121, 44, 0.45)',
        'copper': '0 10px 30px -10px rgba(200, 121, 44, 0.3)',
        'luxury': '0 25px 50px -12px rgba(18, 14, 11, 0.85)',
        'elevated': '0 20px 40px -15px rgba(18, 14, 11, 0.7)',
        'glow-ambient': '0 0 60px 15px rgba(244, 217, 160, 0.08)',
      }
    },
  },
  plugins: [],
}
