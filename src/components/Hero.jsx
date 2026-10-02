import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import logo from "../assets/logo.png";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const watermarkX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const watermarkY = useTransform(smoothY, [-1, 1], [-12, 12]);

  const fieldX = useTransform(smoothX, [-1, 1], [8, -8]);
  const fieldY = useTransform(smoothY, [-1, 1], [5, -5]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      mouseX.set((x - 0.5) * 2);
      mouseY.set((y - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f3f4ef] text-[#111b15]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Fine architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #16231a 1px, transparent 1px),
              linear-gradient(to bottom, #16231a 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Large atmospheric light */}
        <div className="absolute -right-[15%] -top-[25%] h-[700px] w-[700px] rounded-full bg-[#dbe8dc] blur-[150px]" />

        <div className="absolute -bottom-[25%] -left-[15%] h-[600px] w-[600px] rounded-full bg-[#eadfd1] blur-[150px]" />

        {/* Central vertical construction line */}
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-[#16231a]/[0.055] lg:block" />
      </div>

      {/* =========================================================
          MAIN FRAME
      ========================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-[1680px] flex-col px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <header className="relative z-30 flex h-[78px] items-center justify-between border-b border-[#111b15]/10">
          {/* Brand */}
          <a
            href="#home"
            className="group flex items-center"
            aria-label="PatilArena home"
          >
            <img
              src={logo}
              alt="PatilArena Technologies"
              className="h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
            />
          </a>

          {/* Center navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            <a
              href="#work"
              className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6d756f] transition-colors hover:text-[#16813b]"
            >
              Selected work
            </a>

            <a
              href="#services"
              className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6d756f] transition-colors hover:text-[#16813b]"
            >
              Capabilities
            </a>

            <a
              href="#about"
              className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6d756f] transition-colors hover:text-[#16813b]"
            >
              Company
            </a>
          </nav>

          {/* Right */}
          <a
            href="#contact"
            className="group flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em]"
          >
            Start a conversation

            <span className="flex h-7 w-7 items-center justify-center border border-[#111b15]/15 transition-all duration-300 group-hover:border-[#16813b] group-hover:bg-[#16813b] group-hover:text-white">
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </header>

        {/* =======================================================
            HERO BODY
        ======================================================== */}

        <main className="relative flex flex-1 flex-col justify-center py-12 lg:py-16">
          {/* Top metadata */}
          <div className="relative z-20 mb-12 flex items-center justify-between lg:mb-8">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#16813b]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#69736c]">
                Technology / Product / Engineering
              </span>
            </div>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-[#929992] sm:block">
              Maharashtra · India
            </span>
          </div>

          {/* =====================================================
              EXPERIMENTAL FIELD
          ====================================================== */}

          <div className="relative min-h-[620px] lg:min-h-[650px]">
            {/* ===================================================
                GIANT WATERMARK
            ==================================================== */}

            <motion.div
              style={{
                x: watermarkX,
                y: watermarkY,
              }}
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="w-[90%] max-w-[1100px] select-none object-contain opacity-[0.035] grayscale"
              />
            </motion.div>

            {/* ===================================================
                LARGE TYPOGRAPHY
            ==================================================== */}

            <div className="relative z-10 flex h-full flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-5 flex items-center gap-4"
              >
                <span className="text-[9px] font-bold tracking-[0.22em] text-[#16813b]">
                  01
                </span>

                <span className="h-px w-16 bg-[#16813b]" />

                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8a928c]">
                  Digital technology company
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-[1200px] text-[15vw] font-medium uppercase leading-[0.77] tracking-[-0.075em] sm:text-[12vw] lg:text-[9.7vw]"
              >
                <span className="block">Technology</span>

                <span className="block pl-[8vw] text-[#16813b] lg:pl-[7vw]">
                  for
                </span>

                <span className="block">business.</span>
              </motion.h1>

              {/* =================================================
                  SIDE COPY
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-10 ml-auto max-w-[410px] border-l border-[#16813b] pl-5 lg:absolute lg:bottom-[5%] lg:right-[5%] lg:mt-0"
              >
                <p className="text-sm leading-6 text-[#5c6660] sm:text-[15px] sm:leading-7">
                  We design and engineer digital products, software systems
                  and technology experiences for businesses ready to move
                  forward.
                </p>

                <a
                  href="#work"
                  className="group mt-6 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#17231b]"
                >
                  Explore our work

                  <span className="flex h-6 w-6 items-center justify-center border border-[#111b15]/15 transition-all duration-300 group-hover:border-[#16813b] group-hover:bg-[#16813b] group-hover:text-white">
                    <ArrowUpRight
                      size={11}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* ===================================================
                EXPERIMENTAL RIGHT FIELD
            ==================================================== */}

            <motion.div
              style={{
                x: fieldX,
                y: fieldY,
              }}
              className="pointer-events-none absolute right-0 top-0 hidden h-full w-[31%] lg:block"
            >
              {/* Outer frame */}
              <div className="absolute inset-y-[8%] left-0 right-0 border-l border-[#111b15]/10 border-r border-[#111b15]/10" />

              {/* Horizontal coordinates */}
              <div className="absolute left-0 right-0 top-[18%] h-px bg-[#111b15]/10" />
              <div className="absolute left-0 right-0 top-[42%] h-px bg-[#111b15]/10" />
              <div className="absolute left-0 right-0 top-[67%] h-px bg-[#111b15]/10" />
              <div className="absolute bottom-[8%] left-0 right-0 h-px bg-[#111b15]/10" />

              {/* Vertical coordinates */}
              <div className="absolute bottom-[8%] left-[33%] top-[8%] w-px bg-[#111b15]/[0.06]" />

              <div className="absolute bottom-[8%] left-[66%] top-[8%] w-px bg-[#111b15]/[0.06]" />

              {/* Green vertical marker */}
              <div className="absolute bottom-[8%] left-[66%] top-[42%] w-px bg-[#16813b]" />

              {/* Coordinates */}
              <span className="absolute left-3 top-[18%] text-[8px] font-bold tracking-[0.15em] text-[#16813b]">
                01
              </span>

              <span className="absolute left-3 top-[42%] text-[8px] font-bold tracking-[0.15em] text-[#929a94]">
                02
              </span>

              <span className="absolute left-3 top-[67%] text-[8px] font-bold tracking-[0.15em] text-[#929a94]">
                03
              </span>

              {/* Technical text */}
              <div className="absolute right-3 top-[18%] text-right">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8a928c]">
                  Product
                </p>

                <p className="mt-2 text-[10px] font-semibold text-[#26332b]">
                  Digital experiences
                </p>
              </div>

              <div className="absolute bottom-[18%] left-3">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8a928c]">
                  Systems
                </p>

                <p className="mt-2 text-[10px] font-semibold text-[#26332b]">
                  Built to evolve
                </p>
              </div>

              {/* Experimental crosshair */}
              <div className="absolute left-[66%] top-[42%] -translate-x-1/2 -translate-y-1/2">
                <div className="h-3 w-3 border border-[#16813b]" />
                <div className="absolute left-1/2 top-1/2 h-12 w-px -translate-x-1/2 -translate-y-1/2 bg-[#16813b]/30" />
                <div className="absolute left-1/2 top-1/2 h-px w-12 -translate-x-1/2 -translate-y-1/2 bg-[#16813b]/30" />
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              BOTTOM POSITIONING BAR
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="relative z-20 mt-8 border-t border-[#111b15]/10"
          >
            <div className="grid sm:grid-cols-3">
              <div className="flex items-center justify-between border-b border-[#111b15]/10 py-5 sm:border-b-0 sm:border-r sm:pr-8">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8b938d]">
                  Discipline
                </span>

                <span className="text-[10px] font-semibold text-[#344038]">
                  Product
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#111b15]/10 py-5 sm:border-b-0 sm:border-r sm:px-8">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8b938d]">
                  Discipline
                </span>

                <span className="text-[10px] font-semibold text-[#344038]">
                  Engineering
                </span>
              </div>

              <div className="flex items-center justify-between py-5 sm:pl-8">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8b938d]">
                  Perspective
                </span>

                <span className="text-[10px] font-semibold text-[#344038]">
                  Global
                </span>
              </div>
            </div>
          </motion.div>
        </main>

        {/* =======================================================
            FOOTER
        ======================================================== */}

        <footer className="flex min-h-[54px] items-center justify-between border-t border-[#111b15]/10">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#929a94]">
            PatilArena Technologies · 2026
          </span>

          <a
            href="#about"
            className="group flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#7e8781]"
          >
            Scroll to discover

            <ArrowDown
              size={11}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Hero;
