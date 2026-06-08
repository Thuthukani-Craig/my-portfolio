import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.details
      className="project-card project-details glass-panel"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      whileHover={{ y: -8, scale: 1.015 }}
    >
      <summary>
        <span>
          <small>{project.type}</small>
          <strong>{project.title}</strong>
        </span>
        <FaChevronDown />
      </summary>
      <div className="project-details-body">
        <div className="project-signal">
          <span>{project.type}</span>
          <FaExternalLinkAlt />
        </div>
        <p>{project.description}</p>
        {project.status && <div className="project-status">{project.status}</div>}
        <div className="stack-list">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
          <FaGithub />
          View Repository
        </a>
      </div>
    </motion.details>
  );
}
