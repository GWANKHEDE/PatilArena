import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Krushi Billing",
    category: "Business Application",
    description:
      "Billing and inventory management designed for modern agricultural businesses.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    accent: "#f28c28",
  },
  {
    name: "HR Management",
    category: "Business Platform",
    description:
      "A streamlined platform for HR workflows, leave management and operations.",
    technologies: ["React", "FastAPI", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
    accent: "#16813b",
  },
  {
    name: "Training Platform",
    category: "EdTech",
    description:
      "A modern digital learning experience for training and course delivery.",
    technologies: ["React", "REST API", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
    accent: "#16813b",
  },
  {
    name: "Task Management",
    category: "Productivity",
    description:
      "A focused workspace for teams to organize tasks and manage productivity.",
    technologies: ["React", "Node.js", "REST API"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    accent: "#f28c28",
  },
];

function Projects() {
  const [active, setActive] = useState(0);

  const project = projects[active];

  const next = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + projects.length) % projects.length,
    );
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-green-100 bg-[#f7faf7] py-12 sm:py-16"
    >
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/30 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-7 bg-[#16813b]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#16813b]">
                  Selected Work
                </p>
              </div>

              <h2 className="max-w-2xl text-3xl font-black tracking-[-0.045em] text-[#17201b] sm:text-4xl lg:text-5xl">
                Digital products built to{" "}
                <span className="bg-gradient-to-r from-[#16813b] to-[#e87522] bg-clip-text text-transparent">
                  move forward.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              A glimpse into the products and digital solutions we build for
              ambitious businesses.
            </p>
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white p-2 shadow-[0_18px_60px_rgba(20,70,40,0.07)] sm:mt-10 sm:p-3">
            <div className="grid overflow-hidden rounded-[1.35rem] bg-[#f8faf8] lg:grid-cols-[1.25fr_0.75fr]">
              {/* Image */}
              <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[390px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={project.image}
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* Project counter */}
                <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/85 px-3 py-1.5 text-[9px] font-bold text-gray-600 shadow-sm backdrop-blur-md">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </div>

                {/* Image label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                      PatilArena
                    </p>

                    <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                      {project.name}
                    </h3>
                  </div>

                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-lg"
                    style={{ backgroundColor: project.accent }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-8">
                <div>
                  <span
                    className="inline-flex rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      color: project.accent,
                      backgroundColor:
                        project.accent === "#f28c28"
                          ? "#fff4e9"
                          : "#edf8f0",
                    }}
                  >
                    {project.category}
                  </span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="mt-5 text-2xl font-black tracking-[-0.035em] text-[#17201b] sm:text-3xl">
                        {project.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-gray-200 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-gray-500"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="mt-7 flex items-center justify-between gap-4 border-t border-gray-200 pt-5">
                  <div className="flex gap-1.5">
                    {projects.map((item, index) => (
                      <button
                        key={item.name}
                        type="button"
                        aria-label={`Show ${item.name}`}
                        onClick={() => setActive(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === active
                            ? "w-7 bg-[#16813b]"
                            : "w-1.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={previous}
                      aria-label="Previous project"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:border-green-200 hover:text-[#16813b]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next project"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:border-green-200 hover:text-[#16813b]"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      className="ml-1 hidden items-center gap-1.5 rounded-full bg-[#16813b] px-4 py-2.5 text-[10px] font-bold text-white transition-colors hover:bg-[#126d32] sm:flex"
                    >
                      View work
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile CTA */}
        <div className="mt-4 flex justify-center sm:hidden">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#16813b] px-5 py-2.5 text-xs font-bold text-white"
          >
            View selected work
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
