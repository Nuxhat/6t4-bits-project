import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      className="bg-[var(--bg-main)] py-12 relative transition-colors duration-300 border-t border-[var(--border-subtle)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Footer Logo */}
          <div className="flex items-center">

            {/* Light Mode Logo */}
            <img
              src="/image.jpg"
              alt="6T4 Bits"
              className="h-16 w-auto object-contain dark:hidden"
            />

            {/* Dark Mode Logo */}
            <img
              src="/New%20logo.png"
              alt="6T4 Bits"
              className="hidden h-16 w-auto object-contain dark:block"
            />

          </div>

          {/* Footer Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-[var(--text-body)]">
            <a
              href="#home"
              className="hover:text-[var(--brand-primary)] transition-colors"
            >
              {t.nav.home}
            </a>

            <a
              href="#about"
              className="hover:text-[var(--brand-primary)] transition-colors"
            >
              {t.nav.about}
            </a>

            <a
              href="#offerings"
              className="hover:text-[var(--brand-primary)] transition-colors"
            >
              {t.nav.offerings}
            </a>

            <a
              href="#faq"
              className="hover:text-[var(--brand-primary)] transition-colors"
            >
              {t.nav.faq}
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-[var(--bg-card)] shadow-[var(--neu-flat-sm)] hover:text-[var(--brand-primary)] transition-all active:shadow-[var(--neu-pressed-sm)]"
            >
              {t.nav.contact}
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] text-center text-xs text-[var(--text-body)] font-medium transition-colors duration-300">
          {t.footer.rights.replace(
            '{year}',
            new Date().getFullYear().toString()
          )}
        </div>

      </div>
    </motion.footer>
  );
};