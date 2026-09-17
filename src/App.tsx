import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Offerings } from './components/Offerings';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function MainContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] font-sans selection:bg-[#7c3aed]/30 selection:text-[var(--text-heading)] overflow-x-hidden relative transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Offerings />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

