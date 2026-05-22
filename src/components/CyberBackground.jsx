import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CyberBackground() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 45, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 45, damping: 18 });
  const orbX = useTransform(smoothX, (value) => `${value * 18}px`);
  const orbY = useTransform(smoothY, (value) => `${value * 18}px`);

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <div className="cyber-background" aria-hidden="true">
      <div className="animated-grid" />
      <div className="dot-matrix" />
      <motion.div className="ambient-orb ambient-orb-cyan" style={{ x: orbX, y: orbY }} />
      <motion.div className="ambient-orb ambient-orb-violet" style={{ x: orbY, y: orbX }} />
      <motion.div
        className="floating-node node-alpha"
        animate={{ y: [0, -18, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-node node-beta"
        animate={{ y: [0, 22, 0], x: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="scanline-overlay" />
      <div className="vignette" />
    </div>
  );
}
