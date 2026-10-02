import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const locations = [
  { left: "27%", top: "42%", delay: 0 },
  { left: "43%", top: "31%", delay: 0.4 },
  { left: "58%", top: "48%", delay: 0.8 },
  { left: "70%", top: "34%", delay: 1.2 },
  { left: "81%", top: "52%", delay: 1.6 },
];

function GlobalSection() {
  return (
    <section className="relative overflow-hidden border-t border-green-100 bg-[#f7faf7] py-12 sm:py-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-green-100/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#16813b] sm:text-sm">
            Global Ambition
          </p>

          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#17201b] sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#e87522] via-[#16813b] to-[#16813b] bg-clip-text text-transparent">
              Built in India.
            </span>{" "}
            Ready for the World.
          </h2>

          <p className="mx-auto mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            PatilArena combines Indian roots with modern engineering to build
            reliable digital products for businesses and founders worldwide.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto mt-6 h-[280px] max-w-5xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_15px_50px_rgba(20,70,40,0.05)] sm:h-[330px]">
            {/* Soft tricolor background */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-0 top-0 h-1/3 w-full bg-gradient-to-r from-orange-50 via-white to-orange-50" />
              <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-r from-green-50 via-white to-green-50" />
            </div>

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#16813b 1px, transparent 1px), linear-gradient(90deg, #16813b 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 sm:h-56 sm:w-56"
            >
              {/* Outer globe */}
              <div className="absolute inset-0 rounded-full border border-green-200 bg-gradient-to-br from-green-50/70 via-white to-orange-50/70 shadow-[0_20px_60px_rgba(22,129,59,0.08)]" />

              {/* Latitude */}
              <div className="absolute left-[12%] right-[12%] top-1/2 h-16 -translate-y-1/2 rounded-[50%] border border-[#16813b]/15" />

              {/* Longitude */}
              <div className="absolute bottom-[8%] left-1/2 top-[8%] w-16 -translate-x-1/2 rounded-[50%] border border-[#16813b]/15" />

              {/* Tricolor arcs */}
              <div className="absolute inset-[-5px] rounded-full border-t-2 border-[#f28c28]" />
              <div className="absolute inset-[-5px] rotate-180 rounded-full border-t-2 border-[#16813b]" />

              {/* Globe icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <HiOutlineGlobeAlt className="h-16 w-16 text-[#16813b]/70 sm:h-20 sm:w-20" />
              </div>

              {/* India origin */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-[25%] top-[52%] h-3 w-3 rounded-full bg-[#f28c28] shadow-[0_0_0_5px_rgba(242,140,40,0.12)]"
              />
            </motion.div>

            {/* Connection paths */}
            <svg
              viewBox="0 0 1000 330"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              {/* Saffron route */}
              <motion.path
                d="M380 185 C470 70, 570 75, 680 145"
                fill="none"
                stroke="#f28c28"
                strokeWidth="2"
                strokeDasharray="7 8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.65 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
              />

              {/* White route */}
              <motion.path
                d="M390 190 C500 155, 600 180, 770 120"
                fill="none"
                stroke="#94a3a0"
                strokeWidth="1.5"
                strokeDasharray="5 9"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.25 }}
              />

              {/* Green route */}
              <motion.path
                d="M380 195 C500 275, 620 255, 800 195"
                fill="none"
                stroke="#16813b"
                strokeWidth="2"
                strokeDasharray="7 8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.65 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.45 }}
              />
            </svg>

            {/* Global connection points */}
            {locations.map((location, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8 + location.delay,
                  duration: 0.4,
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(22,129,59,0.15)",
                    "0 0 0 7px rgba(22,129,59,0)",
                    "0 0 0 0 rgba(22,129,59,0)",
                  ],
                }}
                className="absolute h-2.5 w-2.5 rounded-full bg-[#16813b]"
                style={{
                  left: location.left,
                  top: location.top,
                }}
              />
            ))}

            {/* India label */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-orange-100 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#f28c28]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-600">
                India
              </span>
            </div>

            {/* Global label */}
            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-green-100 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#16813b]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-600">
                Worldwide
              </span>
            </div>

            {/* Bottom statement */}
            <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-gray-100 bg-white/90 px-4 py-1.5 text-[9px] font-bold text-gray-500 shadow-sm backdrop-blur sm:block">
              Indian roots · Global technology
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default GlobalSection;

