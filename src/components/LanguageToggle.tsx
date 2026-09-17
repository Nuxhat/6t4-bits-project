import React from 'react';
import { Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', showLabel = false }) => {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isArabic ? 'English' : 'Arabic'}`}
      title={`Switch to ${isArabic ? 'English' : 'العربية'}`}
      className={`relative inline-flex items-center gap-1.5 h-10 px-3 rounded-full cursor-pointer focus:outline-none transition-colors duration-300 font-bold text-xs bg-[var(--bg-card)] text-[var(--text-heading)] shadow-[var(--neu-flat-sm)] hover:text-[var(--brand-primary)] active:shadow-[var(--neu-pressed-xs)] border border-[var(--border-subtle)]/30 ${className}`}
    >
      <Languages className="w-4 h-4 text-[var(--brand-primary)] shrink-0" />
      <span className="font-bold tracking-wide uppercase">
        {isArabic ? 'العربية' : 'EN'}
      </span>
      {showLabel && (
        <span className="text-xs text-[var(--text-body)] font-normal ml-1 rtl:mr-1 rtl:ml-0">
          ({isArabic ? 'English' : 'العربية'})
        </span>
      )}
    </motion.button>
  );
};

