import { motion, useScroll, useSpring } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { MenuSection } from './components/MenuSection';
import { Spotlight } from './components/Spotlight';
import { Story } from './components/Story';
import { BurgerAnatomy } from './components/BurgerAnatomy';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#F5F4F0] flex flex-col font-sans selection:bg-[#FFD429] selection:text-[#0A0B0D]">
      {/* Interactive Golden Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD429] via-[#ffe066] to-[#FFD429] origin-left z-[60] pointer-events-none shadow-[0_0_12px_rgba(255,212,41,0.85)]"
      />

      <Header />
      <main className="flex-grow">
        <Hero />
        <Manifesto />
        <MenuSection />
        <Spotlight />
        <Story />
        <BurgerAnatomy />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
