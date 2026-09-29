import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#334155',
            lineHeight: '1.75',
            a: {
              color: '#0f172a',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                color: '#16a34a',
              },
            },
            code: {
              color: '#0f172a',
              backgroundColor: '#f1f5f9',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#0f172a',
              color: '#f8fafc',
              borderRadius: '0.5rem',
              border: '1px solid #1e293b',
              padding: '1.25rem',
            },
            h1: {
              color: '#0f172a',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              color: '#0f172a',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              color: '#0f172a',
              fontWeight: '600',
              letterSpacing: '-0.015em',
              marginTop: '1.75em',
              marginBottom: '0.5em',
            },
            h4: {
              color: '#0f172a',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#cbd5e1',
              fontStyle: 'normal',
              color: '#475569',
            },
            hr: {
              borderColor: '#e2e8f0',
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
