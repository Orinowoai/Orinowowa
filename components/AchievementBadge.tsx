import { motion } from "framer-motion";

export default function AchievementBadge({ icon, label, tier }) {
  const tierColors = {
    bronze: "bg-bronze text-charcoal",
    silver: "bg-gray-300 text-charcoal",
    gold: "bg-gold text-charcoal",
    platinum: "bg-gradient-to-r from-gold to-champagne text-charcoal",
  };
  return (
    <motion.div
      className={`inline-flex flex-col items-center px-4 py-2 rounded-xl shadow-gold border-2 ${tierColors[tier]}`}
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-3xl mb-1">{icon}</span>
      <span className="font-bold">{label}</span>
    </motion.div>
  );
}
