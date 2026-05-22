import { motion } from "framer-motion";

const bootLines = [
  "Initializing system kernel...",
  "Loading cloud engineer profile...",
  "Syncing security matrix...",
  "Access granted.",
];

export default function BootTerminal() {
  return (
    <motion.div
      className="boot-terminal glass-panel"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      <div className="terminal-toolbar">
        <span />
        <span />
        <span />
        <strong>system.boot</strong>
      </div>
      <div className="terminal-body">
        {bootLines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.32, duration: 0.35 }}
          >
            <span>&gt;</span> {line}
            {index === bootLines.length - 1 && <i className="cursor" />}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
