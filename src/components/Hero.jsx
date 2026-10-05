import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90dvh] pt-24 pb-10 sm:pt-24 sm:pb-10 overflow-hidden bg-[#121814] text-white flex flex-col justify-center"
    >
      {/* ========================================
          CORPORATE BUILDING BACKGROUND
      ======================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Corporate building image */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overall dark transparent overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Stronger left-side gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/5" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/45 to-transparent" />

        {/* Emerald ambient glow */}
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[140px]" />

        {/* Amber ambient glow */}
        <div className="absolute bottom-0 -left-20 h-[450px] w-[450px] rounded-full bg-amber-300/10 blur-[140px]" />
      </div>

      {/* ========================================
          HERO CONTENT
      ======================================== */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 flex flex-col justify-between">

        {/* Main Headline */}
        <div className="mt-8 lg:mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            We build digital products{" "}
            <br className="hidden sm:inline" />
            that turn{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                ambitious ideas
              </span>

              <span className="absolute bottom-2 left-0 h-3 w-full bg-emerald-400/20 -z-0 rounded-xs" />
            </span>{" "}
            into market reality.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed"
          >
            A high-craft software engineering studio partnering with founders
            and scaling enterprises. We design, develop, and deploy robust web
            platforms, SaaS ecosystems, and bespoke business infrastructure.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#15803d] px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#126d33] hover:shadow-xl hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Secondary Button */}
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40"
          >
            View Works
            <ArrowDown className="h-4 w-4 text-emerald-300" />
          </a>
        </motion.div>

        {/* Feature & Proof Grid Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Production Ready */}
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Production Ready
              </p>

              <p className="text-xs text-white/60 mt-0.5">
                Tested for peak concurrency
              </p>
            </div>
          </div>

          {/* Modern Stack */}
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
              <Terminal className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Modern Stack
              </p>

              <p className="text-xs text-white/60 mt-0.5">
                React, Node, Cloud & APIs
              </p>
            </div>
          </div>

          {/* Full IP Ownership */}
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Full IP Ownership
              </p>

              <p className="text-xs text-white/60 mt-0.5">
                100% clean code & handover
              </p>
            </div>
          </div>

          {/* Agile Velocity */}
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Agile Velocity
              </p>

              <p className="text-xs text-white/60 mt-0.5">
                Bi-weekly sprints & demos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
