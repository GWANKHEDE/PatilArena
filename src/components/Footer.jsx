import { HiArrowUp, HiOutlineMail } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import logo from "../assets/logo.png";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { MapPin } from "lucide-react";



const companyLinks = [
  ["About Us", "#about"],
  ["Careers", "#careers"],
  ["Contact", "#contact"],
];

const serviceLinks = [
  ["Web Development", "#services"],
  ["SaaS & MVP", "#services"],
  ["Backend & APIs", "#services"],
  ["Business Applications", "#services"],
  ["Mobile Development", "#services"],
  ["Product Support", "#services"],
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "#",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];



function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-red-200 to-blue-300 text-[#17221b]">
      {/* Soft ambient gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-green-200/30 blur-[100px]" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-200/25 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            TOP BRAND STRIP
        ====================================================== */}

        <div className="flex items-center justify-between border-b border-gray-200/80 py-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16813b]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              PatilArena Technologies
            </span>
          </div>

          <span className="hidden text-[10px] font-medium text-gray-400 sm:block">
            Software · Products · Innovation
          </span>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-6 py-4 lg:grid-cols-[1.5fr_0.7fr_1.15fr_0.9fr]">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-2">
                <img
                  src={logo}
                  alt="PatilArena Technologies"
                  className="h-16 w-auto object-contain"
                />
              </div>

              <div className="hidden h-8 w-px bg-gray-200 sm:block" />

              <span className="hidden text-xs font-medium leading-4 text-gray-600 sm:block">
                Technology that
                <br />
                moves ideas forward.
              </span>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-6 text-gray-500">
              We build modern web applications, SaaS products and digital
              solutions that help businesses turn ideas into meaningful
              technology.
            </p>

            {/* Gradient accent */}

            <div className="mt-4 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#16813b] to-[#e58b35]" />

              <span className="text-[10px] font-bold text-[#16813b]">
                Rooted in Values. Built for the World.
              </span>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-gray-800">
              Company
            </h3>

            <nav className="mt-4 space-y-2.5">
              {companyLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-1 text-xs text-gray-500 transition-colors hover:text-[#16813b]"
                >
                  {label}

                  <HiOutlineArrowUpRight className="text-[10px] opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-gray-800">
              What We Build
            </h3>

            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {serviceLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-[#16813b]"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-300 transition-colors group-hover:bg-[#16813b]" />

                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-gray-800">
              Get in Touch
            </h3>

            <div className="mt-3 flex items-start gap-2.5 text-sm text-gray-800 font-mono">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-90 text-blue-900">
                <MapPin className="h-4 w-4" strokeWidth={2} />
              </span>

              <div className="leading-5">
                <p className="font-medium text-gray-600">Pune, Maharashtra</p>
                <p className="text-gray-400">411062 INDIA</p>
              </div>
            </div>

            <a
              href="mailto:contact@patilarena.com"
              className="group mt-4 flex items-center gap-2.5 text-xs text-gray-500 transition-colors hover:text-[#16813b]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-50 text-[#16813b] transition-colors group-hover:bg-green-100">
                <HiOutlineMail className="h-4 w-4" />
              </span>

              contact@patilarena.com
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-[#16813b]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>


          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-3 border-t border-gray-200/80 py-3 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} PatilArena Technologies Private
            Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-gray-400">PatilArena™</span>

            <a
              href="#home"
              className="group flex items-center gap-1.5 font-semibold text-gray-500 transition-colors hover:text-[#16813b]"
            >
              Back to top

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 transition-all group-hover:bg-green-50">
                <HiArrowUp className="transition-transform group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

