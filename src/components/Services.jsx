import { motion } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineDeviceMobile,
  HiOutlineGlobeAlt,
  HiOutlineServer,
  HiOutlineSupport,
} from "react-icons/hi";

import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "./Reveal";

const services = [
  {
    title: "Web Application Development",
    description:
      "React, modern frontend architecture, responsive interfaces and scalable business applications.",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "SaaS & MVP Development",
    description:
      "Transform startup ideas into functional MVPs and scalable SaaS products.",
    icon: HiOutlineCog,
  },
  {
    title: "Backend & API Development",
    description:
      "Secure, maintainable APIs and backend systems for modern applications.",
    icon: HiOutlineServer,
  },
  {
    title: "Business Dashboards",
    description:
      "Admin panels, analytics dashboards, management systems and internal business tools.",
    icon: HiOutlineChartBar,
  },
  {
    title: "Mobile Application Development",
    description:
      "Modern mobile experiences for businesses and digital products.",
    icon: HiOutlineDeviceMobile,
  },
  {
    title: "Maintenance & Product Support",
    description:
      "Ongoing improvements, bug fixes, optimization, deployment and technical support.",
    icon: HiOutlineSupport,
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f7faf7] py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#16813b]">
            What We Build
          </p>

          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#17201b] sm:text-5xl">
            From idea to production.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            From idea to production, we help businesses build reliable digital
            products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.07}>
                <motion.article
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-7 shadow-sm"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#16813b] transition-all duration-300 group-hover:bg-[#16813b] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-7 text-xl font-extrabold text-gray-800">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                      {service.description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#16813b]">
                      Learn More
                      <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
