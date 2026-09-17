import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center gap-2 p-2.5 rounded-full cursor-pointer focus:outline-none transition-colors duration-300 ${
        isDark
          ? 'bg-[#161129] text-[#e2d9f8] shadow-[4px_4px_10px_#06040b,-4px_-4px_10px_#231b3e] active:shadow-[inset_2px_2px_5px_#06040b,inset_-2px_-2px_5px_#231b3e]'
          : 'bg-[#f9f5ff] text-[#5e5873] hover:text-[#2a1b54] shadow-[4px_4px_8px_#eaddff,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#eaddff,inset_-2px_-2px_4px_#ffffff]'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 90,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center text-[#c084fc]"
        >
          <Moon className="w-5 h-5 fill-current" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? -90 : 0,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center text-[#eab308]"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-sm font-bold tracking-tight">
          {isDark ? 'Dark' : 'Light'} Mode
        </span>
      )}
    </motion.button>
  );
};
