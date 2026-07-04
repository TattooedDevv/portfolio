import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071013',
        panel: '#0d171b',
        line: '#1f333a',
        signal: '#48d6a6',
        volt: '#7dd3fc',
        ember: '#f8b45c',
        accent: '#5cc8b1',
        blue: '#5f9df7',
        gold: '#d6a84f',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(72, 214, 166, 0.16), 0 24px 70px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config;
