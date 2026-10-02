import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Scroll-linked cinematic wrapper: sections scale + fade IN as they enter the
// viewport and ease back OUT as they leave (reversible on scroll up).
// Scales from the top edge so #anchor navigation still lands exactly.
function Section({ children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ["start end", "start 60%"] });
  const { scrollYProgress: exit } = useScroll({ target: ref, offset: ["end 40%", "end start"] });

  const opacity = useTransform([enter, exit], ([i, o]) => i * (1 - 0.75 * o));
  const scale = useTransform([enter, exit], ([i, o]) => 0.93 + 0.07 * i - 0.04 * o);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { opacity, scale }} className="origin-top will-change-transform">
      {children}
    </motion.div>
  );
}

export default Section;
