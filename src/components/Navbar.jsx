import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const navItems = [
  ["Home", "#home"],
  ["Capabilities", "#capabilities"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    const scroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", scroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2">
      <div
        className={`flex items-center gap-3 rounded-4xl border border-white/70 bg-white/65 px-2 py-1 backdrop-blur-2xl backdrop-saturate-150 transition-shadow ${
          scrolled
            ? "shadow-[0_12px_40px_rgba(0,0,0,.12)]"
            : "shadow-[0_8px_30px_rgba(0,0,0,.07)]"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => go("#home")}
          className="flex items-center gap-2 rounded-[16px] p-1"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">
            <img src={logo} alt="PatilArena" className="h-8" />
          </span>

          <span className="hidden text-left sm:block">
            <strong className="block bg-gradient-to-r from-red-600 via-blue-700 to-green-800 bg-clip-text text-sm text-transparent">
              PatilArena
            </strong>
             <span className="text-xs">Technologies</span> 
            
          </span>
        </button>

        {/* Navigation */}
        <nav className="mx-auto hidden items-center rounded-full lg:flex">
          {navItems.map(([label, href]) => {
            const isActive = active === href.slice(1);

            return (
              <button
                key={label}
                onClick={() => go(href)}
                className="relative rounded-full px-3.5 py-0.5 text-xs font-semibold"
              >
                {isActive && (
                  <motion.span
                    layoutId="active"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-red-400 via-blue-400 to-green-400 "
                  >
                    <span className="block h-full w-full rounded-full bg-white/80" />
                  </motion.span>
                )}

                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <button
          onClick={() => go("#contact")}
          className="hidden rounded-full bg-green-700 px-5 py-2.5 text-[11px] font-bold text-white transition hover:bg-green-800 lg:block"
        >
          Let&apos;s Build Together
        </button>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm lg:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="mt-2 rounded-[20px] border border-white/70 bg-white/75 p-2 shadow-xl backdrop-blur-2xl lg:hidden">
          {navItems.map(([label, href]) => {
            const isActive = active === href.slice(1);

            return (
              <button
                key={label}
                onClick={() => go(href)}
                className={`relative block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                  isActive
                    ? "bg-white text-green-700 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-500" />
                )}
              </button>
            );
          })}

          <button
            onClick={() => go("#contact")}
            className="mt-1 w-full rounded-full bg-green-700 py-3 text-xs font-bold text-white"
          >
            Let&apos;s Build Together
          </button>
        </nav>
      )}
    </header>
  );
}
