import { motion, useReducedMotion } from "framer-motion";

function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 30,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y,
              filter: "blur(8px)",
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
