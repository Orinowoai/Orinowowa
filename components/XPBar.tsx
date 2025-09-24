import { motion } from "framer-motion";

export default function XPBar({ xp, maxXP }: { xp: number; maxXP: number }) {
  const percent = Math.min(100, (xp / maxXP) * 100);
  return (
    <div className="w-full bg-charcoal rounded-full h-4 shadow-gold relative overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-gold to-amber"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1 }}
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-champagne font-bold">
        {xp} / {maxXP} XP
      </span>
    </div>
  );
}
