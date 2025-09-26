module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-success",
    "bg-warn",
    "bg-danger",
    "bg-base",
    "bg-surface",
    "bg-card",
    "text-primary",
    "text-secondary",
    "text-accent",
    "text-success",
    "text-warn",
    "text-danger",
    "text-base",
    "text-surface",
    "text-card",
    "border-primary",
    "border-secondary",
    "border-accent",
    "border-success",
    "border-warn",
    "border-danger",
    "border-base",
    "border-surface",
    "border-card",
  ],
  theme: {
    extend: {
      colors: {
        // Existing colors
        "deep-900": "#0B0F1A",
        "deep-800": "#10172A",
        "deep-700": "#182138",
        "gold-500": "#D4AF37",
        "amber-400": "#FFBF00",
        "iris-100": "#D4D8FF",
        "iris-200": "#BFC6FF",
        sand: "#EDE9E3",
        
        // New brand colors
        brand: {
          gold: "#F7C94A",
          ink: "#0E1220",
          navy: "#131A2A",
          violet: "#8A7CFF",
          cyan: "#4DE3FF",
          rose: "#FF5FA2",
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'disco-wave': 'disco-wave 3s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'disco-wave': {
          '0%, 100%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { transform: 'translateX(100vw)', opacity: '1' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(247, 201, 74, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(247, 201, 74, 0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
