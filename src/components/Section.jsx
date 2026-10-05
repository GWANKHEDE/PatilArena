import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * High-performance smooth scroll reveal wrapper.
 * Provides subtle ease-in scaling without abrupt disappearing or anchor jumping.
 */
export default function Section({ children, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { opacity, y }}
      className={`origin-top transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
