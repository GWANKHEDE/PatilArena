import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Compass, Sparkles } from "lucide-react";

const stackItems = [
  {
    id: "01",
    tag: "Core Capability",
    title: "High-Performance Web & Cloud Architecture",
    description:
      "Enterprise-grade web applications engineered with precision. We construct resilient distributed frontends, robust API ecosystems, and lightning-fast digital interfaces designed for massive user scale.",
    features: [
      "Sub-second latency & optimized bundle sizes",
      "Modern React / Next.js ecosystem & state design",
      "End-to-end type safety & automated testing pipelines",
    ],
    metric: "99.98%",
    metricLabel: "Uptime & Operational Reliability",
    icon: Layers,
    accent: "#15803d",
    bgGradient: "from-white via-[#fbfdfb] to-[#f4f7f4]",
  },
  {
    id: "02",
    tag: "SaaS & MVP",
    title: "Agile SaaS & Minimum Viable Products",
    description:
      "From napkin idea to market-ready product in weeks. We help ambitious founders and businesses validate propositions rapidly with scalable database structures, authentication, and billing integrations.",
    features: [
      "Rapid prototype-to-production cycles",
      "Multi-tenant architecture & subscription billing",
      "Instrumented analytics for user retention insights",
    ],
    metric: "4-6 Wks",
    metricLabel: "Average Concept-to-Launch Velocity",
    icon: Sparkles,
    accent: "#d97706",
    bgGradient: "from-white via-[#fffdfa] to-[#fbf7f0]",
  },
  {
    id: "03",
    tag: "Internal Operations",
    title: "Intelligent Business Tools & Dashboards",
    description:
      "Eliminate repetitive manual overhead with custom operational consoles, inventory sync engines, and executive analytics dashboards tailored specifically to your workflow logic.",
    features: [
      "Granular role-based access control (RBAC)",
      "Real-time transactional sync & automated exports",
      "Bespoke data visualizations & KPI telemetry",
    ],
    metric: "3.5x",
    metricLabel: "Internal Efficiency & Throughput",
    icon: Cpu,
    accent: "#15803d",
    bgGradient: "from-white via-[#fafcfb] to-[#f1f6f2]",
  },
  {
    id: "04",
    tag: "Partnership",
    title: "Continuous Engineering & Growth Support",
    description:
      "We don't abandon software at launch. Our engineering team provides proactive performance audits, security patching, feature roadmaps, and elastic cloud optimization as your company expands.",
    features: [
      "Guaranteed SLA support & 24/7 telemetry monitoring",
      "Iterative quarterly roadmap execution",
      "Zero-downtime cloud migration & database optimization",
    ],
    metric: "100%",
    metricLabel: "Code Ownership & Transparent Delivery",
    icon: Compass,
    accent: "#047857",
    bgGradient: "from-white via-[#fafcfb] to-[#f2f7f4]",
  },
];

function StackCard({ item, index, total }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Calculate subtle dynamic scale & opacity for stacked effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.94 + index * 0.015, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  const IconComponent = item.icon;

  return (
    <div
      ref={cardRef}
      className="sticky top-24 sm:top-28 w-full transition-all duration-300"
      style={{
        zIndex: index + 10,
        marginBottom: index === total - 1 ? "0px" : "32px",
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className={`relative overflow-hidden rounded-3xl border border-black/[0.08] bg-gradient-to-br ${item.bgGradient} p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(20,50,30,0.06)] backdrop-blur-xl transition-shadow hover:shadow-[0_25px_60px_rgba(20,50,30,0.09)]`}
      >
        {/* Subtle decorative glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: item.accent }}
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            {/* Card badge & counter */}
            <div className="flex items-center gap-3">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white shadow-sm"
                style={{ backgroundColor: item.accent }}
              >
                {item.id}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                {item.tag}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#121814] sm:text-3xl lg:text-4xl">
              {item.title}
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#526057]">
              {item.description}
            </p>

            {/* Feature Bullets */}
            <ul className="mt-6 space-y-2.5">
              {item.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#2d3a31]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#15803d]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
                style={{ backgroundColor: item.accent }}
              >
                Consult on this
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Metric / Stat display side */}
          <div className="flex flex-col justify-center rounded-2xl border border-black/[0.05] bg-white/80 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm"
                style={{ backgroundColor: item.accent }}
              >
                <IconComponent className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a968e]">
                Proven Impact
              </span>
            </div>

            <div className="mt-6">
              <div
                className="text-4xl sm:text-5xl font-black tracking-tight"
                style={{ color: item.accent }}
              >
                {item.metric}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#526057]">
                {item.metricLabel}
              </p>
            </div>

            <div className="mt-6 border-t border-black/[0.06] pt-4 text-[11px] text-[#8a968e]">
              Engineered with PatilArena standard precision
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StickyStack() {
  return (
    <section id="capabilities" className="relative bg-[#fafbf9] py-12">
      {/* Architectural subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-emerald-100/40 blur-[130px]" />
        <div className="absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-amber-100/30 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-emerald-50/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Stacked Execution
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121814]">
            How We Deliver Value.
            <span className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-amber-700 bg-clip-text text-transparent">
              One Layer at a Time.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#526057] leading-relaxed">
            Scroll through our core engineering pillars. Each card locks seamlessly to highlight the end-to-end lifecycle of our client engagements.
          </p>
        </div>

        {/* Stack Container */}
        <div className="relative pb-16">
          {stackItems.map((item, index) => (
            <StackCard
              key={item.id}
              item={item}
              index={index}
              total={stackItems.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
