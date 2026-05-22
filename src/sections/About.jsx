import { motion } from "framer-motion";
import { FaCompass, FaRocket, FaShieldAlt } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { about } from "../data/portfolio";

const valueIcons = [FaCompass, FaRocket, FaShieldAlt];

export default function About() {
  return (
    <section id="about" className="section-frame about-section">
      <SectionHeader
        eyebrow="Operator Profile"
        title="Secure cloud builder with founder energy"
        copy="A recruiter-friendly view of the person behind the dashboard: mission, values, and direction."
      />

      <div className="about-grid">
        <motion.article
          className="about-story glass-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span>Mission Statement</span>
          <h3>Building cloud systems people can trust.</h3>
          <p>{about.mission}</p>
          <p>{about.bio}</p>
        </motion.article>

        <div className="values-stack">
          {about.values.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <motion.article
                className="value-card glass-panel"
                key={value}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <Icon />
                <div>
                  <strong>{value}</strong>
                  <p>
                    {value === "Transparency" &&
                      "Clear communication, honest progress, and systems that explain themselves."}
                    {value === "Innovation" &&
                      "Curious experimentation with practical cloud, security, and automation tools."}
                    {value === "Resilience" &&
                      "Learning through iteration, pressure, debugging, and disciplined follow-through."}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
