import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 rounded-3xl mt-3 mx-10 py-2! ${scrolled
        ? "border-b border-black/[0.06] bg-white/85 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-lg"
        : "bg-white/60 py-2 backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
              <img
                src={logo}
                alt="PatilArena Technologies"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-extrabold tracking-tight bg-gradient-to-r from-red-600 via-blue-700 to-green-900 bg-clip-text text-transparent">
              PatilArena
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-red-600 via-blue-700 to-green-900 bg-clip-text text-transparent0">
              Technologies
            </span>
          </div>
        </a>


        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold text-[#526057] tracking-wide transition-colors hover:text-[#15803d]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#15803d] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#126d33] hover:shadow-md hover:-translate-y-0.5"
          >
            Let&apos;s Build Together
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-xl border border-black/10 bg-white/80 p-2 text-[#121814] lg:hidden backdrop-blur-md"
        >
          {mobileOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-gradient-to-r from-red-200 to-blue-300 mx-2 rounded-2xl px-6 py-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-[#121814] transition-colors hover:text-[#15803d]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-[#15803d] py-2.5 text-center text-xs font-semibold text-white"
              >
                Let&apos;s Build Together
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
