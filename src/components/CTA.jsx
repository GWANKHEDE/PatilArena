import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";
import Reveal from "./Reveal";

function CTA() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-green-50 via-white to-orange-50 p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#16813b]">
                Let's Build
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#17201b] sm:text-5xl">
                Have an Idea? Let's Build It.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Tell us what you're building, what problem you're solving and
                where you want to take it. We'll help turn the idea into a
                practical digital product.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16813b] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-green-900/10"
                >
                  Start a Conversation
                  <HiArrowRight />
                </motion.a>

                <a
                  href="mailto:contact@patilarena.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 transition-colors hover:border-green-200 hover:text-[#16813b]"
                >
                  <HiOutlineMail />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTA;
