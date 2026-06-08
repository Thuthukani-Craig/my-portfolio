import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { contactDetails } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-frame contact-section">
      <SectionHeader
        eyebrow="Contact Channel"
        title="Hire me or collaborate"
        copy="For junior cloud, frontend, automation, cybersecurity learning projects, internships, and founder-minded collaborations."
      />

      <div className="contact-layout">
        <motion.aside
          className="contact-details glass-panel"
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="contact-details-head">
            <span>Direct Contact</span>
            <strong>Open for cloud, frontend, and security-minded opportunities.</strong>
          </div>

          <div className="contact-detail-list">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <>
                  <Icon />
                  <span>
                    <small>{detail.label}</small>
                    <strong>{detail.value}</strong>
                  </span>
                </>
              );

              return detail.href ? (
                <a key={detail.label} href={detail.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>
        </motion.aside>

        <motion.form
          className="contact-form glass-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          action="mailto:meggmaintenance@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label className="message-field">
            <span>Message</span>
            <textarea name="message" rows="6" placeholder="Tell me what you want to build." required />
          </label>
          <button className="neon-button green contact-submit" type="submit">
            <FaPaperPlane />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
