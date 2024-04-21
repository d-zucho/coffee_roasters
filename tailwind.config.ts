import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        darkCyan: '#0E8784',
        darkBlue: '#333D4B',
        paleOrange: '#FDD6BA',
        lightCream: '#FEFCF7',
        gray: '#83888F',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        huge: '150px',
        h1: '72px',
        h2: '40px',
        h3: '32px',
        h4: '24px',
      },
      fontFamily: {
        fraunces: 'var(--font-fraunces)',
        barlow: 'var(--font-barlow)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        btnRadius: '6px',
      },
      backgroundImage: {
        'home-hero-desktop':
          "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        'home-hero-tablet':
          "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        'home-hero-mobile':
          "url('/assets/home/mobile/image-hero-coffeepress.jpg')",

        // About us
        'about-hero-desktop':
          "url('/assets/about/desktop/image-hero-whitecup.jpg')",
        'about-hero-tablet':
          "url('/assets/about/tablet/image-hero-whitecup.jpg')",
        'about-hero-mobile':
          "url('/assets/about/mobile/image-hero-whitecup.jpg')",

        // Subscribe
        'plan-hero-desktop':
          "url('/assets/plan/desktop/image-hero-blackcup.jpg')",
        'plan-hero-tablet':
          "url('/assets/plan/tablet/image-hero-blackcup.jpg')",
        'plan-hero-mobile':
          "url('/assets/plan/mobile/image-hero-blackcup.jpg')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
