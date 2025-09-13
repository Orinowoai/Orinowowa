module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { 
        deepBlack: "#0a0a0a", 
        luxuryGold: "#FFD700", 
        coal: "#111218" 
      },
      backgroundImage: {
        goldAura: "radial-gradient(800px 400px at 20% 10%, #ffd70020, transparent)"
      }
    }
  },
  plugins: []
};
