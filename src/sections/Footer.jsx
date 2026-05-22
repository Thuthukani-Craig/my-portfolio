import { FaHandshake } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>TM CloudOps</strong>
        <span>Cyber Cloud Engineer Portfolio</span>
      </div>
      <a className="neon-button cyan footer-cta" href="#contact">
        <FaHandshake />
        Hire Me / Collaborate
      </a>
    </footer>
  );
}
