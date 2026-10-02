import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Reveal from "./Reveal";

const journey = [
  {
    number: "01",
    title: "ROOTS",
    text: "Strong values, discipline and practical thinking.",
  },
  {
    number: "02",
    title: "IDEAS",
    text: "Understanding problems before building solutions.",
  },
  {
    number: "03",
    title: "TECHNOLOGY",
    text: "Turning ideas into reliable digital products.",
  },
  {
    number: "04",
    title: "GROWTH",
    text: "Creating foundations ready for future scale.",
  },
];

function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#16813b]">
              About PatilArena
            </p>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#17201b] sm:text-5xl">
              Built from Strong Roots.
              <br />
              Designed for the Future.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                PatilArena is a software development company built on the
                values of hard work, ownership, resilience and continuous
                growth. Inspired by Maharashtra's entrepreneurial and farming
                heritage, we bring a practical, grounded approach to modern
                technology.
              </p>

              <p>
                We work with startups, entrepreneurs and growing businesses to
                design, develop and launch reliable digital products for a
                global audience.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full rounded-3xl border border-gray-100 bg-[#fbfdfb] p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-green-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#16813b]">
                    {item.number}
                  </span>

                  <HiArrowRight className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#16813b]" />
                </div>

                <h3 className="mt-10 text-lg font-extrabold tracking-wide text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
