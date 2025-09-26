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
        // Luxury charcoal/navy backgrounds
        "deep-900": "#0B0F1A",
        "deep-800": "#10172A", 
        "deep-700": "#182138",
        "deep-600": "#1F2937",
        
        // Luxury gold accents
        "luxuryGold": "#D4AF37",
        "gold-500": "#D4AF37",
        "gold-400": "#FFC649", 
        "gold-300": "#FFD166",
        "amber-400": "#FFBF00",
        
        // Premium text colors
        "iris-100": "#D4D8FF",
        "iris-200": "#BFC6FF",
        "neonViolet": "#8B5CF6",
        "neonPink": "#EC4899",
        "neonCyan": "#06B6D4",
        "neonLime": "#84CC16",
        
        // Premium neutral
        "sand": "#EDE9E3",
        
        // Glassmorphism and premium effects
        "glass": "rgba(255, 255, 255, 0.05)",
        "goldAura": "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%)",
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0B0F1A 0%, #10172A 50%, #182138 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFC649 0%, #D4AF37 50%, #B8960A 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'luxury': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass': '0 8px 32px rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'disco': 'disco 2.8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        disco: {
          'to': { transform: 'translateX(100%)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        glow: {
          'from': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
            textShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
          },
          'to': { 
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)',
            textShadow: '0 0 30px rgba(212, 175, 55, 0.8)'
          }
        }
      }
    },
  },
  plugins: [],
};
