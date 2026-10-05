import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { HiOutlineChip } from "react-icons/hi";
import Reveal from "./Reveal";

function GroundedThinking() {
  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#16813b]">
              Our Philosophy
            </p>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#17201b] sm:text-5xl">
              Technology With
              <br />
              Grounded Thinking
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Good technology, like good farming, is built with patience,
              preparation and consistency. We believe strong digital products
              grow from understanding the foundation before scaling.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-green-50 via-white to-orange-50">
              <div className="absolute inset-0 opacity-30">
                {[...Array(7)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.1,
                    }}
                    className="absolute left-[-10%] h-20 w-[120%] rounded-[50%] border-t border-green-300"
                    style={{
                      top: `${index * 15 + 4}%`,
                      transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
                    }}
                  />
                ))}
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative z-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white bg-white shadow-xl"
              >
                <HiOutlineChip className="h-12 w-12 text-[#16813b]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-[15%] top-[25%] flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white shadow-lg"
              >
                <FaLeaf className="text-[#16813b]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute bottom-[20%] right-[16%] h-4 w-4 rounded-full bg-orange-400"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default GroundedThinking;
