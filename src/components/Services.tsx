import React from 'react';
import { Sparkles, Code2, Smartphone, PenTool, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const serviceIcons = [Code2, Smartphone, PenTool, Server];

  const services = t.services.items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index % serviceIcons.length]
  }));

  return (
    <motion.section 
      id="services" 
      className="relative py-24 bg-[var(--bg-main)] overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Background blurred orbs to match Hero */}
      <div className="absolute top-1/4 left-[-100px] w-[400px] h-[400px] bg-[#8b5cf6]/10 dark:bg-[#7c3aed]/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#8b5cf6]/10 dark:bg-[#7c3aed]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Hero aesthetic */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] text-[var(--brand-accent)] text-xs font-bold tracking-wider uppercase mb-6 shadow-[var(--neu-pressed-sm)] transition-colors duration-300">
            <Sparkles className="w-4 h-4" /> {t.services.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-heading)] leading-tight mb-6 tracking-tight transition-colors duration-300">
            {t.services.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">{t.services.title2}</span>
          </h2>
          <p className="text-lg text-[var(--text-body)] font-medium max-w-2xl mx-auto transition-colors duration-300">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              animate={{
                y: [0, -6, 0]
              }}
              transition={{
                y: {
                  duration: 4.5 + index * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4
                }
              }}
              className="flex items-center gap-5 group cursor-pointer bg-[var(--bg-card)] rounded-3xl p-6 shadow-[var(--neu-flat-lg)] hover:shadow-[var(--neu-flat-hover)] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--brand-primary)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center text-white shrink-0 transition-colors duration-300 group-hover:bg-[var(--brand-accent)]">
                <service.icon 
                  className="w-7 h-7" 
                  strokeWidth={2} 
                />
              </div>
              <div className="text-left rtl:text-right flex-1">
                <h3 className="font-extrabold text-[var(--text-heading)] text-lg leading-tight mb-1 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[var(--text-body)] text-sm font-medium transition-colors duration-300">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};
