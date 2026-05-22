import { motion } from "framer-motion";

export default function StatCard({ label, value, detail, index }) {
  return (
    <motion.article
      className="stat-card glass-panel"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.05 + index * 0.12, duration: 0.55 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </motion.article>
  );
}
