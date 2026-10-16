import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        cream: '#EFE8DC',
        ink: '#16202C',
        slate: '#5B6470',
        mauve: '#8E6F73',
        line: '#D9CDBB',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
        brand: '0.32em',
      },
    },
  },
  plugins: [],
};
export default config;
