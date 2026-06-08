import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { currentLearning } from "../data/portfolio";

export default function CurrentlyLearning() {
    return (
        <section id="learning" className="section-frame learning-section">
            <SectionHeader
                eyebrow="Skill Focus"
                title="Currently Learning"
                copy="Practical skills I am building through hands-on labs, tools, and development projects."
            />

            <div className="learning-grid">
                {currentLearning.map((item) => (
                    <motion.div
                        key={item.title}
                        className="learning-card glass-panel"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="learning-card-head">
                            <span>
                                <FaAngleRight />
                            </span>
                            <strong>{item.title}</strong>
                        </div>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
