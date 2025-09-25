module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-primary', 'bg-secondary', 'bg-accent', 'bg-success', 'bg-warn', 'bg-danger', 'bg-base', 'bg-surface', 'bg-card',
    'text-primary', 'text-secondary', 'text-accent', 'text-success', 'text-warn', 'text-danger', 'text-base', 'text-surface', 'text-card',
    'border-primary', 'border-secondary', 'border-accent', 'border-success', 'border-warn', 'border-danger', 'border-base', 'border-surface', 'border-card',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#06B6D4',
        accent: '#F59E0B',
        success: '#22C55E',
        warn: '#F97316',
        danger: '#EF4444',
        base: '#0F172A',
        surface: '#111827',
        card: '#1F2937',
        text: '#E5E7EB',
      },
      keyframes: {
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 #7C3AED' },
          '50%': { boxShadow: '0 0 16px 4px #7C3AED' },
        },
      },
      animation: {
        particleFloat: 'particleFloat 2.5s ease-in-out infinite',
        glowPulse: 'glowPulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
