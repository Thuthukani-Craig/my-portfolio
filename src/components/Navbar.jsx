import { motion } from "framer-motion";
import { FaCloud, FaTerminal } from "react-icons/fa";
import { contactCta } from "../data/portfolio";

export default function Navbar({ sections, activeSection }) {
  const CtaIcon = contactCta.icon;

  return (
    <motion.header
      className="navbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <a className="brand-lockup" href="#home" aria-label="Go to command section">
        <span className="brand-mark">
          <FaTerminal />
        </span>
        <span className="brand-wordmark">
          <strong>TM CloudOps</strong>
          <small>Cyber Portfolio</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {sections.map((section) => (
          <a
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
            href={`#${section.id}`}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <div className="nav-status">
          <FaCloud />
          <span>Online</span>
        </div>
        <a className="nav-cta" href={contactCta.href}>
          <CtaIcon />
          {contactCta.label}
        </a>
      </div>
    </motion.header>
  );
}
