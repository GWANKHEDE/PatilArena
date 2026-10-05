import { HiArrowUp, HiOutlineMail } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import logo from "../assets/logo.png";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { MapPin } from "lucide-react";

const companyLinks = [
  ["About Us", "#about"],
  ["Careers", "#career"],
  ["Work", "#work"],
  ["Capabilities", "#capabilities"],
];

const serviceLinks = [
  ["Web Apps", "#capabilities"],
  ["SaaS & MVPs", "#capabilities"],
  ["Backend & APIs", "#services"],
  ["Dashboards", "#services"],
  ["Mobile Apps", "#services"],
  ["Cloud & Support", "#capabilities"],
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.06] bg-gradient-to-r from-red-200 to-blue-300 text-[#121814]">
      {/* Subtle architectural ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-100 blur-[100px]" />
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-amber-100 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]">
          {/* Brand Info */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="PatilArena Technologies"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-[#526057]">
              PatilArena Technologies partners with visionary founders and enterprises to engineer
              scalable software, high-performance web products, and resilient digital systems.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-50/70 px-3 py-1 text-[11px] font-bold text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Rooted in Values · Built for the World
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#121814]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1 text-xs sm:text-sm text-[#526057] transition-colors hover:text-[#15803d]"
                  >
                    {label}
                    <HiOutlineArrowUpRight className="text-[10px] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#121814]">
              Capabilities
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#526057] transition-colors hover:text-[#15803d]"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-700/40" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#121814]">
              Connect
            </h3>
            <div className="mt-4 flex items-start gap-2 text-xs sm:text-sm text-[#526057]">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#15803d]" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <a
              href="mailto:connect@patilarena.com"
              className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-[#526057] transition-colors hover:text-[#15803d]"
            >
              <HiOutlineMail className="h-4 w-4 text-[#15803d]" />
              connect@patilarena.com
            </a>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#526057] shadow-2xs transition-all hover:border-emerald-600 hover:text-emerald-700 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/[0.06] pt-4 text-xs text-[#8a968e]">
          <p>© {new Date().getFullYear()} PatilArena Technologies. All rights reserved.</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 font-semibold text-[#526057] transition-colors hover:text-[#15803d]"
          >
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/[0.04] transition-colors group-hover:bg-emerald-100 group-hover:text-emerald-800">
              <HiArrowUp className="h-3 w-3" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
