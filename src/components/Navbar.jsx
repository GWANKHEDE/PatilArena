import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[48px] mt-2 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={handleNavigation}
          className="group flex items-center"
        >
          <motion.img
            src={logo}
            alt="PatilArena"
            className="h-10 w-auto object-contain"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-semibold text-gray-600 transition-colors hover:text-[#18823b]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#18823b] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#16813b] px-3 py-1 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#126d32]"
          >
            Let's Build Together
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-xl border border-gray-200 bg-white p-2.5 text-gray-800 lg:hidden"
        >
          {mobileOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavigation}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 py-4 text-base font-semibold text-gray-700 last:border-0"
                >
                  {item.label}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={handleNavigation}
                className="mt-4 rounded-full bg-[#16813b] px-5 py-3 text-center text-sm font-bold text-white"
              >
                Let's Build Together
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
