import { motion } from "framer-motion";
import {
  HiOutlineChatAlt2,
  HiOutlineScale,
  HiOutlineTrendingUp,
  HiOutlineUserGroup,
} from "react-icons/hi";
import Reveal from "./Reveal";

const principles = [
  {
    number: "01",
    title: "Business First",
    description:
      "We focus on solving the actual business problem, not just writing code.",
    icon: HiOutlineTrendingUp,
  },
  {
    number: "02",
    title: "Transparent Communication",
    description:
      "Clear communication, milestones and progress throughout the project.",
    icon: HiOutlineChatAlt2,
  },
  {
    number: "03",
    title: "Built to Scale",
    description:
      "We build with maintainability and future growth in mind.",
    icon: HiOutlineScale,
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "Our relationship does not end when the first version is launched.",
    icon: HiOutlineUserGroup,
  },
];

function WhyPatilArena() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#16813b]">
            Why PatilArena
          </p>

          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#17201b] sm:text-5xl">
            Why Work With PatilArena?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-gray-100 bg-[#fbfdfb] p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#16813b]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-extrabold text-gray-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyPatilArena;
