import { useEffect, useState } from "react";
import CyberBackground from "./components/CyberBackground";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SkillsMatrix from "./sections/SkillsMatrix";
import Roadmap from "./sections/Roadmap";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const sections = [
  { id: "home", label: "Command" },
  { id: "about", label: "About" },
  { id: "skills", label: "Matrix" },
  { id: "roadmap", label: "Roadmap" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const target = document.getElementById(id);
      if (!target) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 },
      );

      observer.observe(target);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div className="app-shell">
      <CyberBackground />
      <Navbar sections={sections} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <SkillsMatrix />
        <Roadmap />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
