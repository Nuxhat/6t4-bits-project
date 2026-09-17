import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.offerings, href: '#offerings' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--bg-main)]/90 backdrop-blur-md shadow-[var(--neu-header-scroll)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center focus:outline-none"
            aria-label="6T4 Bits Home"
          >
            {/* Light Mode Logo */}
            <img
              src="/img.jpg"
              alt="6T4 Bits"
              className="h-20 w-auto object-contain dark:hidden"
            />

            {/* Dark Mode Logo */}
            <img
              src="/New%20logo.png"
              alt="6T4 Bits"
              className="hidden h-20 w-auto object-contain dark:block"
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-semibold text-[var(--text-body)] hover:text-[var(--brand-primary)] transition-colors inline-block"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Right Action CTA, Language Toggle & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageToggle />

            <ThemeToggle />

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-[#ffffff] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] transition-all shadow-[var(--neu-flat-sm)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3)]"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageToggle />

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-body)] hover:text-[var(--text-heading)] shadow-[var(--neu-flat-sm)] focus:outline-none active:shadow-[var(--neu-pressed-xs)] transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--bg-card)] mt-4 pt-4 pb-6 space-y-4 absolute left-4 right-4 px-4 shadow-[var(--neu-flat-lg)] rounded-2xl border border-[var(--border-subtle)]/40 transition-colors duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[var(--text-heading)] hover:text-[var(--brand-primary)] py-2 px-4 rounded-xl hover:shadow-[var(--neu-pressed-xs)] transition-all"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 flex items-center justify-between px-2 border-t border-[var(--divider)]">
                <span className="text-sm font-semibold text-[var(--text-body)]">
                  {t.nav.language}
                </span>
                <LanguageToggle showLabel />
              </div>

              <div className="pt-2 flex items-center justify-between px-2 border-t border-[var(--divider)]">
                <span className="text-sm font-semibold text-[var(--text-body)]">
                  {t.nav.theme}
                </span>
                <ThemeToggle showLabel />
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-full font-semibold text-[#ffffff] bg-[var(--brand-primary)] shadow-[var(--neu-flat-sm)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3)]"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};