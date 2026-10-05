import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
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

const AUTOPLAY_DELAY = 5000;

function Projects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const project = projects[active];

  /*
   * =====================================================
   * NAVIGATION
   * =====================================================
   */

  const next = () => {
    setDirection(1);

    setActive(
      (current) => (current + 1) % projects.length,
    );
  };

  const previous = () => {
    setDirection(-1);

    setActive(
      (current) =>
        (current - 1 + projects.length) %
        projects.length,
    );
  };

  const goToProject = (index) => {
    if (index === active) return;

    setDirection(index > active ? 1 : -1);

    setActive(index);
  };

  /*
   * =====================================================
   * AUTOPLAY
   *
   * The timer is tied directly to the active project.
   * Hover/focus pauses the timer.
   * =====================================================
   */

  useEffect(() => {
    if (isPaused || shouldReduceMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setDirection(1);

      setActive(
        (current) => (current + 1) % projects.length,
      );
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [active, isPaused, shouldReduceMotion]);

  /*
   * =====================================================
   * IMAGE ANIMATION
   * =====================================================
   */

  const imageVariants = {
    enter: {
      scale: 1.08,
      opacity: 0,
    },

    center: {
      scale: 1,
      opacity: 1,
    },

    exit: {
      scale: 1.04,
      opacity: 0,
    },
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-green-100 bg-[#f7faf7] py-8 sm:py-10 lg:py-12"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
         ===================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/30 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
           ===================================================== */}

        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black tracking-[-0.045em] text-[#17201b] sm:text-4xl lg:text-5xl">
                Digital products built to{" "}
                <span className="bg-gradient-to-r from-[#16813b] to-[#e87522] bg-clip-text text-transparent">
                  move forward.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            CAROUSEL
           ===================================================== */}

        <Reveal delay={0.1}>
          <motion.div
            className="relative mt-8 sm:mt-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {/* =================================================
                OUTER CARD
               ================================================= */}

            <div className="relative rounded-[1.75rem] p-[2px] sm:rounded-[2rem]">
              {/* =================================================
                  PROGRESS GRADIENT BORDER

                  One single gradient.

                  The animated layer is the same exact size
                  as the card, so the border remains aligned
                  at every responsive breakpoint.
                 ================================================= */}

              <motion.div
                key={`progress-${active}`}
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]"
                initial={{
                  clipPath:
                    "inset(0 100% 0 0 round 1.75rem)",
                }}
                animate={{
                  clipPath: isPaused
                    ? undefined
                    : "inset(0 0% 0 0 round 1.75rem)",
                }}
                transition={{
                  duration:
                    AUTOPLAY_DELAY / 1000,
                  ease: "linear",
                }}
              >
                {/* Full gradient border */}
                <div
                  className="absolute inset-0 rounded-[inherit]"
                  style={{
                    background:
                      "linear-gradient(135deg, #16813b 0%, #62b878 35%, #f28c28 65%, #16813b 100%)",
                  }}
                />
              </motion.div>

              {/* =================================================
                  STATIC BORDER BASE
                 ================================================= */}

              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-green-600/10 via-orange-400/10 to-green-600/10 sm:rounded-[2rem]" />

              {/* =================================================
                  MAIN CARD
                 ================================================= */}

              <motion.div
                className="relative overflow-hidden rounded-[1.6rem] border border-gray-200/80 bg-white p-2 shadow-[0_18px_60px_rgba(20,70,40,0.07)] sm:rounded-[1.85rem] sm:p-3"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        boxShadow:
                          "0 24px 80px rgba(20,70,40,0.11)",
                      }
                }
                transition={{
                  duration: 0.4,
                }}
              >
                {/* =================================================
                    INNER CONTENT
                   ================================================= */}

                <motion.div
                  className="grid overflow-hidden rounded-[1.35rem] bg-[#f8faf8] lg:grid-cols-[1.25fr_0.75fr]"
                  drag={
                    shouldReduceMotion
                      ? false
                      : "x"
                  }
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) {
                      next();
                    }

                    if (info.offset.x > 60) {
                      previous();
                    }
                  }}
                >
                  {/* =================================================
                      IMAGE
                     ================================================= */}

                  <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[390px]">
                    <AnimatePresence
                      initial={false}
                      custom={direction}
                      mode="wait"
                    >
                      <motion.img
                        key={project.image}
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        variants={
                          shouldReduceMotion
                            ? undefined
                            : imageVariants
                        }
                        initial={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : "enter"
                        }
                        animate="center"
                        exit="exit"
                        transition={{
                          duration:
                            shouldReduceMotion
                              ? 0.2
                              : 0.65,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Image gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                    {/* =================================================
                        COUNTER
                       ================================================= */}

                    <motion.div
                      key={`counter-${project.name}`}
                      initial={{
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/85 px-3 py-1.5 text-[9px] font-bold text-gray-600 shadow-sm backdrop-blur-md sm:left-5 sm:top-5"
                    >
                      {String(active + 1).padStart(
                        2,
                        "0",
                      )}{" "}
                      /{" "}
                      {String(
                        projects.length,
                      ).padStart(2, "0")}
                    </motion.div>

                    {/* =================================================
                        IMAGE TITLE
                       ================================================= */}

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={project.name}
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -12,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: 0.08,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5"
                      >
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                            PatilArena
                          </p>

                          <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                            {project.name}
                          </h3>
                        </div>

                        <motion.div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-lg sm:h-10 sm:w-10"
                          style={{
                            backgroundColor:
                              project.accent,
                          }}
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.12,
                                  rotate: 8,
                                }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 0.94,
                                }
                          }
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* =================================================
                      DETAILS
                     ================================================= */}

                  <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-8">
                    <div>
                      {/* Category */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`category-${project.name}`}
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          <span
                            className="inline-flex rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                            style={{
                              color:
                                project.accent,
                              backgroundColor:
                                project.accent ===
                                "#f28c28"
                                  ? "#fff4e9"
                                  : "#edf8f0",
                            }}
                          >
                            {project.category}
                          </span>
                        </motion.div>
                      </AnimatePresence>

                      {/* Project content */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={project.name}
                          initial={{
                            opacity: 0,
                            y: 18,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -18,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: 0.05,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                        >
                          <h3 className="mt-5 text-2xl font-black tracking-[-0.035em] text-[#17201b] sm:text-3xl">
                            {project.name}
                          </h3>

                          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map(
                              (
                                technology,
                                index,
                              ) => (
                                <motion.span
                                  key={technology}
                                  initial={{
                                    opacity: 0,
                                    y: 6,
                                    scale: 0.95,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                  }}
                                  transition={{
                                    duration: 0.25,
                                    delay:
                                      0.1 +
                                      index *
                                        0.06,
                                  }}
                                  className="rounded-full border border-gray-200 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-gray-500 transition-colors hover:border-green-200 hover:text-[#16813b]"
                                >
                                  {technology}
                                </motion.span>
                              ),
                            )}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* =================================================
                        CONTROLS
                       ================================================= */}

                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-gray-200 pt-5">
                      {/* Dots */}
                      <div className="flex items-center gap-1.5">
                        {projects.map(
                          (item, index) => (
                            <button
                              key={item.name}
                              type="button"
                              aria-label={`Show ${item.name}`}
                              onClick={() =>
                                goToProject(
                                  index,
                                )
                              }
                              className="group relative h-2 overflow-hidden rounded-full bg-gray-200"
                            >
                              <motion.span
                                animate={{
                                  width:
                                    index ===
                                    active
                                      ? "100%"
                                      : "0%",
                                }}
                                transition={{
                                  duration: 0.25,
                                }}
                                className="absolute inset-y-0 left-0 rounded-full bg-[#16813b]"
                              />

                              <span
                                className={`relative block h-full rounded-full transition-all duration-300 ${
                                  index ===
                                  active
                                    ? "w-9"
                                    : "w-2 group-hover:w-4"
                                }`}
                              />
                            </button>
                          ),
                        )}
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          type="button"
                          onClick={previous}
                          aria-label="Previous project"
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  x: -2,
                                  scale: 1.05,
                                }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 0.94,
                                }
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:border-green-200 hover:text-[#16813b]"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={next}
                          aria-label="Next project"
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  x: 2,
                                  scale: 1.05,
                                }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 0.94,
                                }
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:border-green-200 hover:text-[#16813b]"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>

                        <motion.button
                          type="button"
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.03,
                                }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 0.97,
                                }
                          }
                          className="ml-1 hidden items-center gap-1.5 rounded-full bg-[#16813b] px-4 py-2.5 text-[10px] font-bold text-white transition-colors hover:bg-[#126d32] sm:flex"
                        >
                          View work
                          <ExternalLink className="h-3 w-3" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>

        {/* =====================================================
            MOBILE CTA
           ===================================================== */}

        <motion.div
          className="mt-4 flex justify-center sm:hidden"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#16813b] px-5 py-2.5 text-xs font-bold text-white transition-transform active:scale-95"
          >
            View selected work

            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
