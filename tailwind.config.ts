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
        cream: '#F7F5F2',
        charcoal: '#1A1A1A',
        amber: '#F5A623',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'grain': 'grain 4s steps(8) infinite',
        'grid-drift': 'gridDrift 24s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 1.8s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '14%':  { transform: 'translate(-1%, -2%)' },
          '28%':  { transform: 'translate(2%,  1%)' },
          '42%':  { transform: 'translate(-2%,  1%)' },
          '57%':  { transform: 'translate(1%, -1%)' },
          '71%':  { transform: 'translate(-1%,  3%)' },
          '85%':  { transform: 'translate(2%, -2%)' },
        },
        gridDrift: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '60px 60px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%':      { transform: 'translateY(8px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
