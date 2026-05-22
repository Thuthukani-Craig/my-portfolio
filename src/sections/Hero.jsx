import { motion } from "framer-motion";
import { FaArrowDown, FaCloud, FaShieldAlt } from "react-icons/fa";
import BootTerminal from "../components/BootTerminal";
import StatCard from "../components/StatCard";
import { commandStats, profileLinks } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="hero-section section-frame">
      <motion.div className="hero-copy" variants={container} initial="hidden" animate="visible">
        <motion.div className="status-pill" variants={item}>
          <FaShieldAlt />
          <span>Access Level: Cloud Security Candidate</span>
        </motion.div>

        <motion.h1 variants={item}>
          Thuthukani
          <span>Makhathini</span>
        </motion.h1>

        <motion.p className="hero-lede" variants={item}>
          Futuristic cloud engineer portfolio dashboard for secure systems, automation,
          DevOps workflows, and cyber-aware infrastructure thinking.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          {profileLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                className={`neon-button ${link.variant}`}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon />
                {link.label}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="hero-console">
        <BootTerminal />
        <motion.div
          className="control-panel glass-panel"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="panel-heading">
            <span>Live Control Panel</span>
            <FaCloud />
          </div>
          <div className="radar">
            <span />
            <i />
            <b />
          </div>
          <div className="telemetry-grid">
            <span>Latency</span>
            <strong>18ms</strong>
            <span>Threats</span>
            <strong>0</strong>
            <span>Uptime</span>
            <strong>99.9%</strong>
          </div>
        </motion.div>
      </div>

      <div className="stats-grid">
        {commandStats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>

      <a className="scroll-cue" href="#skills" aria-label="Scroll to skills matrix">
        <FaArrowDown />
      </a>
    </section>
  );
}
