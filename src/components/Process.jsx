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
    description: "Define scope, architecture and development milestones.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive and responsive product experiences.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop the frontend, backend and integrations.",
  },
  {
    number: "05",
    title: "Test",
    description: "Validate functionality, performance and reliability.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deploy, monitor and continue improving the product.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-[#f7faf7] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#16813b]">
            Our Process
          </p>

          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#17201b] sm:text-5xl">
            From Idea to Launch
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gray-200 lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f7faf7] bg-[#16813b] text-xs font-extrabold text-white shadow-md">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-gray-800">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
