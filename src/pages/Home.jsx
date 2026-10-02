import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Process from "../components/Process";
import WhyPatilArena from "../components/WhyPatilArena";
import Projects from "../components/Projects";
import GroundedThinking from "../components/GroundedThinking";
import GlobalSection from "../components/GlobalSection";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { motion, useScroll, useSpring } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-green-600" />
      <Navbar />

      <main>
        <Section><Hero /></Section>
        <Section><About /></Section>
        <Section><Services /></Section>
        <Section><Technologies /></Section>
        <Section><Process /></Section>
        <Section><WhyPatilArena /></Section>
        <Section><Projects /></Section>
        <Section><GroundedThinking /></Section>
        <Section><GlobalSection /></Section>
        <Section><CTA /></Section>
        <Section><Contact /></Section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
