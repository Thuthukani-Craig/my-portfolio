import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { roadmap } from "../data/portfolio";

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-frame">
      <SectionHeader
        eyebrow="Career Roadmap"
        title="From student mode to systems architect"
        copy="A clear operator path through software fundamentals, cloud engineering, automation, and architecture."
      />

      <div className="timeline">
        {roadmap.map((item, index) => (
          <motion.article
            className="timeline-item glass-panel"
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <div className="timeline-node">{String(index + 1).padStart(2, "0")}</div>
            <span>{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
