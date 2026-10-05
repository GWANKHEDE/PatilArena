import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, users and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define scope, architecture and milestones.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive product experiences.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop frontend, backend and integrations.",
  },
  {
    number: "05",
    title: "Test",
    description: "Validate performance and reliability.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deploy, monitor and improve the product.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f5f7f5] py-8"
    >
      {/* soft iOS-style background light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4ade80]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[.92] tracking-[-.055em] text-[#17201b]">
                From idea to
                <span className="bg-gradient-to-r from-[#16813b] ml-2 via-[#31b960] to-[#82d99c] bg-clip-text text-transparent">
                  something real.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Process stage */}
        <div className="relative mt-12 sm:mt-16">
          {/* desktop track */}
          <div className="absolute left-[8%] right-[8%] top-[68px] hidden h-px bg-gradient-to-r from-transparent via-[#b8cfc0] to-transparent lg:block" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group relative"
                >
                  {/* iOS glass card */}
                  <div className="relative overflow-hidden rounded-[26px] border border-white/80 bg-white/70 p-4 shadow-[0_10px_35px_rgba(30,70,42,.07)] backdrop-blur-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_18px_45px_rgba(30,100,55,.12)]">
                    {/* gradient reflection */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#6ee797]/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#16813b] to-[#42c96c] text-[11px] font-bold text-white shadow-[0_5px_15px_rgba(22,129,59,.22)]">
                          {step.number}
                        </span>

                        <span className="text-[10px] font-medium tracking-wider text-[#a1aaa4]">
                          {String(index + 1).padStart(2, "0")}/06
                        </span>
                      </div>

                      <h3 className="mt-8 text-lg font-bold tracking-[-.025em] text-[#17201b]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 min-h-[42px] text-[12px] leading-[1.55] text-[#7b847e]">
                        {step.description}
                      </p>

                      {/* bottom progress */}
                      <div className="mt-5 h-1 overflow-hidden rounded-full bg-[#edf1ed]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${((index + 1) / 6) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#16813b] to-[#6bd88e]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-[68px] z-20 hidden h-2 w-2 rounded-full bg-[#b5cdbc] lg:block" />
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom status bar */}
        <Reveal delay={0.3}>
          <div className="mt-5 flex items-center justify-between rounded-[20px] border border-white/80 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22a653] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22a653]" />
              </span>

              <span className="text-xs font-medium text-[#68736c]">
                Every stage connected
              </span>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#16813b]">
              Idea → Launch
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Process;
