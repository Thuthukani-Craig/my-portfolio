import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </motion.div>
  );
}
