import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t.faq.items;

  return (
    <motion.section 
      id="faq" 
      className="py-24 bg-[var(--bg-main)] transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] mb-4 transition-colors duration-300">
            {t.faq.title1} <span className="text-[var(--brand-primary)]">{t.faq.title2}</span>
          </h2>
          <p className="text-lg text-[var(--text-body)] font-medium transition-colors duration-300">
            {t.faq.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border-none ${
                  isOpen 
                    ? 'shadow-[var(--neu-pressed-lg)] bg-[var(--bg-card)]' 
                    : 'shadow-[var(--neu-flat-lg)] bg-[var(--bg-card)]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 flex items-center justify-between focus:outline-none cursor-pointer text-left rtl:text-right"
                >
                  <span className="font-bold text-[var(--text-heading)] text-lg transition-colors duration-300 flex-1">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 mx-2 ${
                    isOpen 
                      ? 'bg-[var(--brand-primary)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]' 
                      : 'bg-[var(--bg-card)] shadow-[var(--neu-flat-sm)]'
                  }`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ffffff]' : 'text-[var(--brand-accent)]'}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[var(--text-body)] font-medium leading-relaxed transition-colors duration-300 text-left rtl:text-right">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};
