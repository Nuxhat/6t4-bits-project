import React from 'react';
import { Globe, Users, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.section 
      id="about" 
      className="py-24 bg-[var(--bg-main)] overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image Composition */}
          <div className="relative h-[450px] lg:h-[550px] w-full flex items-center justify-center order-2 lg:order-1 mt-12 lg:mt-0">
            {/* Main Center Image */}
            <div className="absolute z-10 w-64 h-80 sm:w-72 sm:h-96 rounded-[3rem] p-2 bg-[var(--bg-card)] shadow-[var(--neu-flat-xl)] transition-colors duration-300">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative shadow-[var(--neu-img-frame)]">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/70 to-transparent"></div>
              </div>
            </div>

            {/* Top Right Floating Card */}
            <motion.div 
              className="absolute top-[10%] right-[-5%] sm:right-[5%] z-20 bg-[var(--bg-card)] rounded-2xl p-3 flex items-center gap-3 shadow-[var(--neu-flat-lg)] transition-colors duration-300"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0 }}
            >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center text-white">
                    <Globe className="w-6 h-6" />
                </div>
                <div className="text-left rtl:text-right px-2">
                    <div className="text-[15px] font-extrabold text-[var(--text-heading)] leading-tight">{t.about.globalReach}</div>
                    <div className="text-xs font-medium text-[var(--text-body)]">{t.about.globalDesc}</div>
                </div>
            </motion.div>

            {/* Bottom Left Floating Card */}
            <motion.div 
              className="absolute bottom-[10%] left-[-5%] sm:left-[5%] z-20 bg-[var(--bg-card)] rounded-2xl p-3 flex items-center gap-3 shadow-[var(--neu-flat-lg)] transition-colors duration-300"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                </div>
                <div className="text-left rtl:text-right px-2">
                    <div className="text-[15px] font-extrabold text-[var(--text-heading)] leading-tight">{t.about.topTier}</div>
                    <div className="text-xs font-medium text-[var(--text-body)]">{t.about.topTierDesc}</div>
                </div>
            </motion.div>
            
            {/* Top Left Small Floating Node */}
            <motion.div 
              className="absolute top-[30%] left-[10%] w-16 h-16 bg-[var(--bg-card)] rounded-full shadow-[var(--neu-flat-lg)] flex items-center justify-center z-0 transition-colors duration-300"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            >
                <Trophy className="w-6 h-6 text-[var(--brand-accent)]" />
            </motion.div>

            {/* Decorative background element */}
            <div className="absolute right-[15%] bottom-[25%] w-24 h-24 bg-[var(--bg-surface)] rounded-full shadow-[var(--neu-pressed-lg)] z-0 transition-colors duration-300"></div>
          </div>

          {/* Right Text Content */}
          <div className="text-left rtl:text-right space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-heading)] leading-tight mb-2 transition-colors duration-300">
                {t.about.title1}
              </h2>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] pb-2">
                {t.about.title2}
              </h3>
            </div>
            
            <div className="space-y-6 text-base text-[var(--text-body)] leading-relaxed font-medium transition-colors duration-300">
              <p>
                {t.about.p1Start}
                <strong className="font-bold text-[var(--text-heading)]">{t.about.p1Brand}</strong>
                {t.about.p1End}
              </p>
              <p>
                {t.about.p2}
              </p>
            </div>

            <div className="pt-4">
              <motion.a
                href="#offerings"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-bold text-[#ffffff] bg-[var(--brand-primary)] shadow-[var(--neu-flat-md)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3)] hover:bg-[var(--brand-primary-hover)] transition-all"
              >
                {t.about.cta}
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};
