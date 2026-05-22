import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";
import { motion } from "framer-motion";
import { FaGithub, FaShieldAlt } from "react-icons/fa";

export default function Projects() {
  const flagship = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-frame projects-section">
      <SectionHeader
        eyebrow="Project Bay"
        title="Cyber cloud systems worth opening"
        copy="Project cards with operational context, stack visibility, and repository entry points."
      />

      {flagship && (
        <motion.article
          className="flagship-project glass-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="flagship-preview">
            <div className="preview-toolbar">
              <span />
              <span />
              <span />
              <strong>sentinel.live</strong>
            </div>
            <div className="preview-screen">
              <FaShieldAlt />
              <i />
              <b />
              <em />
            </div>
          </div>
          <div className="flagship-copy">
            <span>{flagship.type}</span>
            <h3>{flagship.title}</h3>
            <p>{flagship.description}</p>
            <p>{flagship.impact}</p>
            <div className="stack-list">
              {flagship.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a href={flagship.href} target="_blank" rel="noreferrer" className="project-link">
              <FaGithub />
              View Repository
            </a>
          </div>
        </motion.article>
      )}

      <div className="projects-grid compact-projects">
        {secondaryProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
