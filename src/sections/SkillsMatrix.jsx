import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import SkillBar from "../components/SkillBar";
import { skills } from "../data/portfolio";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="section-frame">
      <SectionHeader
        eyebrow="Skills Matrix"
        title="Cloud, cyber, and code capability grid"
        copy="A live-feeling systems view of the stack: infrastructure, security, programming, and DevOps delivery."
      />

      <div className="skills-grid">
        {skills.map((group, groupIndex) => {
          const Icon = group.icon;
          return (
            <motion.article
              className="skill-card glass-panel"
              key={group.group}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: groupIndex * 0.08, duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-card-head">
                <span>
                  <Icon />
                </span>
                <h3>{group.group}</h3>
              </div>
              {group.items.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
