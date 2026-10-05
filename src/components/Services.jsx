import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineDeviceMobile,
  HiOutlineGlobeAlt,
  HiOutlineServer,
  HiOutlineSupport,
} from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { useState } from "react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Web Applications",
    description:
      "Fast, responsive and scalable applications built around real business problems.",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "SaaS & MVP",
    description:
      "From the first validated idea to a product ready for real customers.",
    icon: HiOutlineCog,
  },
  {
    title: "Backend & APIs",
    description:
      "Reliable architecture, APIs and data systems designed to scale.",
    icon: HiOutlineServer,
  },
  {
    title: "Business Dashboards",
    description:
      "Complex information transformed into simple, actionable experiences.",
    icon: HiOutlineChartBar,
  },
  {
    title: "Mobile Applications",
    description:
      "Thoughtful mobile products that feel natural, fast and effortless.",
    icon: HiOutlineDeviceMobile,
  },
  {
    title: "Product Support",
    description:
      "Continuous optimization, improvements and technical ownership.",
    icon: HiOutlineSupport,
  },
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8faf7] py-8"
    >
      {/* =========================================================
          BACKGROUND LIGHT
      ========================================================= */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[20%] top-[25%] h-[420px] w-[420px] rounded-full bg-[#16813b]/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 30, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[10%] top-[45%] h-[350px] w-[350px] rounded-full bg-[#F4A11A]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div>
            <h2 className="text-4xl font-black text-[#17201b] overflow-ellipsi overflow-hidden">
              Ideas have
              <span className="ml-3 bg-gradient-to-r from-[#16813b] via-[#3ebc65] to-[#F4A11A] bg-clip-text text-transparent">
                momentum.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.8, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.15, x: -40 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute -right-4 top-[-70px] select-none text-[clamp(12rem,30vw,25rem)] font-black leading-none tracking-[-.12em] text-[#16813b]/[.035]"
            >
              0{active + 1}
            </motion.div>
          </AnimatePresence>

          <svg
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[90%] -translate-x-1/2 lg:block"
          >
            <motion.path
              d="M500 0 C470 90 700 100 590 180 C470 270 260 230 400 330 C510 410 750 380 620 520"
              fill="none"
              stroke="url(#spectrum)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            <defs>
              <linearGradient id="spectrum" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#16813b" stopOpacity="0" />
                <stop offset="35%" stopColor="#16813b" />
                <stop offset="70%" stopColor="#3dbb63" />
                <stop offset="100%" stopColor="#F4A11A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* services */}
          <div className="relative mx-auto max-w-5xl">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = active === index;

              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <motion.button
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className="group relative flex w-full items-center py-3 text-left sm:py-4 lg:py-2"
                  >
                    {/* flowing active glow */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.7,
                      }}
                      className="absolute left-[3%] h-16 w-16 rounded-full bg-[#F4A11A]/20 blur-2xl"
                    />

                    {/* number */}
                    <span
                      className={`relative z-10 w-12 shrink-0 font-mono text-[11px] transition-colors duration-300 sm:w-20 ${
                        isActive
                          ? "text-[#F4A11A]"
                          : "text-[#b4bdb6] group-hover:text-[#16813b]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* icon */}
                    <motion.span
                      animate={{
                        rotate: isActive ? [0, -8, 8, 0] : 0,
                        scale: isActive ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-14 sm:w-14 ${
                        isActive
                          ? "bg-gradient-to-br from-[#16813b] to-[#F4A11A] text-white shadow-[0_10px_30px_rgba(22,129,59,.18)]"
                          : "bg-white text-[#7d887f] shadow-[0_5px_20px_rgba(30,60,40,.05)]"
                      }`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.span>

                    {/* title + description */}
                    <div className="relative z-10 ml-4 min-w-0 flex-1 sm:ml-6">
                      <div className="flex items-center gap-3">
                        <motion.h3
                          animate={{
                            x: isActive ? 8 : 0,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`text-xl font-black tracking-[-.04em] transition-colors duration-300 sm:text-2xl lg:text-3xl ${
                            isActive
                              ? "text-[#17201b]"
                              : "text-[#929a94] group-hover:text-[#17201b]"
                          }`}
                        >
                          {service.title}
                        </motion.h3>

                        <motion.span
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -8,
                          }}
                          className="hidden sm:block"
                        >
                          <HiArrowUpRight className="h-5 w-5 text-[#16813b]" />
                        </motion.span>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            transition={{ duration: 0.25 }}
                            className="mt-2 max-w-md overflow-hidden text-xs leading-5 text-[#7a847d] sm:text-sm"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* right progress */}
                    <div className="relative z-10 ml-3 hidden w-20 sm:block">
                      <div className="h-[2px] overflow-hidden rounded-full bg-[#e5ebe6]">
                        <motion.div
                          animate={{
                            width: isActive ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.6 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#16813b] to-[#F4A11A]"
                        />
                      </div>
                    </div>
                  </motion.button>
                </Reveal>
              );
            })}
          </div>

          {/* active information floating beneath */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="mt-10 flex flex-col gap-4 border-t border-[#dfe7e1] pt-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F4A11A]" />

                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8b958e]">
                  Selected capability
                </span>

                <span className="text-xs font-bold text-[#16813b]">
                  {services[active].title}
                </span>
              </div>

              <span className="text-xs text-[#a0a8a2]">0{active + 1} / 06</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Services;
