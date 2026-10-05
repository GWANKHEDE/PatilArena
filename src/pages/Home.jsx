import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StickyStack from "../components/StickyStack";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Process from "../components/Process";
import About from "../components/About";
import WhyPatilArena from "../components/WhyPatilArena";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fafbf9] text-[#121814] selection:bg-emerald-100 selection:text-emerald-950">
      {/* Top progress indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-emerald-600 to-amber-600"
      />
      <Navbar />

      <main>
        <Hero />
        <StickyStack />
        <Section><Services /></Section>
        <Section><Projects /></Section>
        <Section><Technologies /></Section>
        <Section><Process /></Section>
        <Section><About /></Section>
        <Section><WhyPatilArena /></Section>
        <Section><CTA /></Section>
        <Section><Contact /></Section>
      </main>

      <Footer />
    </div>
  );
}
