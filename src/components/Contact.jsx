import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  HiOutlineArrowUpRight,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Reveal from "./Reveal";

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

const projectTypes = [
  ["web", "Web App"],
  ["saas", "SaaS / MVP"],
  ["backend", "Backend / API"],
  ["business", "Business App"],
  ["mobile", "Mobile App"],
  ["support", "Support"],
];

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-[#fafcfb] px-3.5 py-2.5 text-xs text-gray-700 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#16813b] focus:bg-white focus:ring-4 focus:ring-green-50";

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Project enquiry:", form);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7faf7] py-8 sm:py-8"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-green-200/25 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-orange-200/20 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="mt-2 text-3xl font-black leading-none tracking-[-0.045em] text-[#17201b] sm:text-4xl lg:text-5xl">
                Let&apos;s turn your idea into{" "}
                <span className="bg-gradient-to-r from-[#16813b] to-[#e58b35] bg-clip-text text-transparent">
                  something real.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Main */}
        <div className="grid items-start gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Contact information */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-orange-50 p-5 shadow-[0_12px_40px_rgba(20,70,40,0.05)]">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-green-100/40 blur-2xl" />

              <div className="relative">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  PatilArena
                </span>

                <h3 className="mt-2 text-xl font-black leading-tight tracking-tight text-[#17201b]">
                  Let&apos;s create
                  <br />
                  something useful.
                </h3>

                <p className="mt-3 text-xs leading-6 text-gray-500">
                  We work with startups and businesses to design, build and
                  improve modern digital products.
                </p>

                <div className="mt-5 space-y-2">
                  <ContactLink
                    icon={<HiOutlineMail />}
                    label="Email"
                    value="connect@patilarena.com"
                    href="mailto:connect@patilarena.com"
                  />

                  <ContactLink
                    icon={<HiOutlineLocationMarker />}
                    label="Based in"
                    value="India · Working Worldwide"
                  />
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4">
                  <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-[#16813b] to-[#e58b35]" />
                  <span className="text-[9px] font-bold text-gray-400">
                    Ideas → Products → Growth
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-orange-50 p-5 shadow-[0_12px_40px_rgba(20,70,40,0.05)] sm:p-6"
            >
              {/* Form header */}
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-[#17201b]">
                    Tell us about your project
                  </h3>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Fields marked with * are required.
                  </p>
                </div>

                <div className="hidden h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-50 to-orange-50 text-[#16813b] sm:flex">
                  <HiOutlineArrowUpRight className="text-sm" />
                </div>
              </div>

              {/* Basic information */}
              <div className="grid gap-3 sm:grid-cols-3">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />

                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />

                <Field
                  label="Company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[10px] font-bold text-gray-700"
                >
                  Tell us more <span className="text-[#16813b]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="What are you trying to build, solve or improve?"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {/* Success */}
              {submitted && (
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2.5 text-[10px] font-semibold text-[#16813b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16813b]" />
                  Thanks! Your enquiry has been captured locally.
                </div>
              )}

              {/* Submit */}
              <div className="mt-2 flex flex-col gap-3 border-t border-gray-100 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[9px] leading-4 text-gray-400">
                  Your information is only used to respond to your project
                  enquiry.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16813b] px-4 py-2 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(22,129,59,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#126d32]"
                >
                  Send Enquiry

                  <HiOutlineArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[10px] font-bold text-gray-700"
      >
        {label} {required && <span className="text-[#16813b]">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={fieldClass}
      />
    </div>
  );
}

function ContactLink({ icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#16813b]">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="block text-[8px] font-bold uppercase tracking-wider text-gray-400">
          {label}
        </span>

        <span className="block truncate text-[11px] font-bold text-gray-700">
          {value}
        </span>
      </span>

      {href && (
        <HiOutlineArrowUpRight className="ml-auto text-gray-300" />
      )}
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-[#fafcfa] p-2.5 transition hover:border-green-200 hover:bg-white"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-[#fafcfa] p-2.5">
      {content}
    </div>
  );
}

export default Contact;
