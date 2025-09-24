module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepBlack: "#0a0a0a",
        luxuryGold: "#FFD700",
        coal: "#111218",
        neonViolet: "#7C3AED",
        neonPink: "#FF3CAC",
        neonCyan: "#00E5FF",
        neonLime: "#B8FF2C",
        amber: "#FFC300",
      },
      backgroundImage: {
        goldAura:
          "radial-gradient(800px 400px at 20% 10%, #ffd70020, transparent)",
        neonGradient: "linear-gradient(90deg, #7C3AED 0%, #00E5FF 100%)",
      },
    },
  },
  plugins: [],
};
