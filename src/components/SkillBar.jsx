import { motion } from "framer-motion";

export default function SkillBar({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-row"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <div className="skill-label">
        <Icon />
        <span>{skill.name}</span>
        <strong>{skill.experience}</strong>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.strength}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.15 + index * 0.06, ease: "easeOut" }}
        />
      </div>
      <p className="skill-note">{skill.note}</p>
    </motion.div>
  );
}
