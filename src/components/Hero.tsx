import React from 'react';
import { Zap, Shield, Headphones, RefreshCw, Globe, MousePointer2, MapPin, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const floatVariants = (delay: number) => ({
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  }
});

export const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[var(--bg-main)] font-sans transition-colors duration-300">
      
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
          
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--bg-surface)] text-[var(--brand-accent)] text-xs font-bold tracking-wider uppercase mb-6 shadow-[var(--neu-pressed-sm)] transition-colors duration-300">
          {t.hero.badge}
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-heading)] leading-tight mb-6 tracking-tight transition-colors duration-300">
          {t.hero.title1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">{t.hero.title2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-lg text-[var(--text-body)] font-medium max-w-2xl mx-auto mb-16 transition-colors duration-300">
          {t.hero.subtitle}
        </motion.p>

        {/* Visual Centerpiece (Rocket + 4 nodes) */}
        <motion.div variants={itemVariants} className="relative w-full max-w-4xl mx-auto h-[400px] mb-16 hidden md:flex items-center justify-center">
            {/* Connecting dashed lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full text-[var(--svg-stroke)] transition-colors duration-300" style={{ zIndex: 0 }}>
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Center Circle */}
            <motion.div 
              className="relative z-10 w-64 h-64 bg-[var(--bg-surface)] rounded-full shadow-[var(--neu-flat-2xl)] flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
            >
                {/* Rocket Icon (SVG) */}
                <div className="w-24 h-24 relative">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 10C50 10 30 30 30 60C30 70 35 80 40 85L50 75L60 85C65 80 70 70 70 60C70 30 50 10 50 10Z" fill="var(--rocket-body)"/>
                        <circle cx="50" cy="45" r="8" fill="var(--rocket-window)"/>
                        <path d="M40 85L35 100L45 90L50 100L55 90L65 100L60 85H40Z" fill="var(--rocket-flame-1)"/>
                        <path d="M30 60L20 75H35L30 60Z" fill="var(--rocket-flame-2)"/>
                        <path d="M70 60L80 75H65L70 60Z" fill="var(--rocket-flame-2)"/>
                    </svg>
                </div>
            </motion.div>

            {/* Top Left Card */}
            <motion.div 
              className="absolute top-[10%] left-[10%] z-20 bg-[var(--bg-card)] rounded-2xl p-3 flex items-center gap-3 shadow-[var(--neu-flat-md)] transition-colors duration-300"
              variants={floatVariants(0)}
              animate="animate"
            >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center text-white">
                    <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left rtl:text-right">
                    <div className="text-sm font-bold text-[var(--text-heading)]">{t.hero.card1Title}</div>
                    <div className="text-[10px] text-[var(--text-body)]">{t.hero.card1Sub}</div>
                </div>
            </motion.div>

            {/* Top Right Card */}
            <motion.div 
              className="absolute top-[10%] right-[10%] z-20 bg-[var(--bg-card)] rounded-2xl p-3 flex items-center gap-3 shadow-[var(--neu-flat-md)] transition-colors duration-300"
              variants={floatVariants(1)}
              animate="animate"
            >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-accent)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center text-white">
                    <Shield className="w-5 h-5 fill-current text-white" />
                </div>
                <div className="text-left rtl:text-right">
                    <div className="text-sm font-bold text-[var(--text-heading)]">{t.hero.card2Title}</div>
                    <div className="text-[10px] text-[var(--text-body)]">{t.hero.card2Sub}</div>
                </div>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div 
              className="absolute bottom-[10%] left-[10%] z-20 bg-[var(--bg-card)] rounded-2xl p-3 flex items-center gap-3 shadow-[var(--neu-flat-md)] transition-colors duration-300"
              variants={floatVariants(1.5)}
              animate="animate"
            >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center text-white">
                    <Headphones className="w-5 h-5" />
                </div>
                <div className="text-left rtl:text-right">
                    <div className="text-sm font-bold text-[var(--text-heading)]">{t.hero.card3Title}</div>
                    <div className="text-[10px] text-[var(--text-body)]">{t.hero.card3Sub}</div>
                </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div 
              className="absolute bottom-[10%] right-[10%] z-20 bg-[var(--bg-card)] rounded-2xl p-3 flex items-center gap-3 shadow-[var(--neu-flat-md)] transition-colors duration-300"
              variants={floatVariants(0.5)}
              animate="animate"
            >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-accent)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center text-white">
                    <RefreshCw className="w-5 h-5" />
                </div>
                <div className="text-left rtl:text-right">
                    <div className="text-sm font-bold text-[var(--text-heading)]">{t.hero.card4Title}</div>
                    <div className="text-[10px] text-[var(--text-body)]">{t.hero.card4Sub}</div>
                </div>
            </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div whileHover={{ y: -5 }} className="bg-[var(--bg-card)] rounded-3xl py-6 px-4 flex flex-col items-center justify-center shadow-[var(--neu-flat-lg)] hover:shadow-[var(--neu-flat-hover)] transition-all duration-300">
                <div className="text-3xl font-extrabold text-[var(--brand-primary)] mb-1">{t.hero.stats.apps.split(' ')[0]}</div>
                <div className="text-[10px] font-bold text-[var(--text-body)] uppercase tracking-wider">{t.hero.stats.apps.split(' ').slice(1).join(' ')}</div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-[var(--bg-card)] rounded-3xl py-6 px-4 flex flex-col items-center justify-center shadow-[var(--neu-flat-lg)] hover:shadow-[var(--neu-flat-hover)] transition-all duration-300">
                <div className="text-3xl font-extrabold text-[var(--brand-primary)] mb-1">99%</div>
                <div className="text-[10px] font-bold text-[var(--text-body)] uppercase tracking-wider">{t.hero.stats.satisfaction.replace('99%', '').trim()}</div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-[var(--bg-card)] rounded-3xl py-6 px-4 flex flex-col items-center justify-center shadow-[var(--neu-flat-lg)] hover:shadow-[var(--neu-flat-hover)] transition-all duration-300">
                <div className="text-3xl font-extrabold text-[var(--brand-primary)] mb-1">2x</div>
                <div className="text-[10px] font-bold text-[var(--text-body)] uppercase tracking-wider">{t.hero.stats.delivery.replace('2x', '').trim()}</div>
            </motion.div>
        </motion.div>

        {/* Feature Bar */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl mx-auto bg-[var(--bg-card)] rounded-2xl py-5 px-8 flex flex-wrap justify-between items-center gap-4 mb-16 shadow-[var(--neu-pressed-lg)] transition-colors duration-300">
            <div className="flex items-center gap-2 text-[var(--text-heading)] text-sm font-bold">
                <Globe className="w-4 h-4 text-[var(--brand-primary)]" /> {t.hero.tags[0]}
            </div>
            <div className="flex items-center gap-2 text-[var(--text-heading)] text-sm font-bold">
                <MousePointer2 className="w-4 h-4 text-[var(--brand-primary)]" /> {t.hero.tags[1]}
            </div>
            <div className="flex items-center gap-2 text-[var(--text-heading)] text-sm font-bold">
                <MapPin className="w-4 h-4 text-[var(--brand-primary)]" /> {t.hero.tags[2]}
            </div>
            <div className="flex items-center gap-2 text-[var(--text-heading)] text-sm font-bold">
                <CheckCircle2 className="w-4 h-4 text-[var(--brand-primary)]" /> {t.hero.tags[3]}
            </div>
        </motion.div>

        {/* CTA Area */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-body)] text-xs font-bold tracking-wider uppercase mb-6 shadow-[var(--neu-pressed-sm)] transition-colors duration-300">
                {t.hero.readyQuestion}
            </div>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 rounded-full text-lg font-bold text-[#ffffff] bg-[var(--brand-primary)] shadow-[var(--neu-flat-md)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3)] transition-all hover:bg-[var(--brand-primary-hover)] group gap-2"
            >
                {t.hero.cta} 
                {isRTL ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
            </motion.a>
            <p className="text-xs text-[var(--text-body)] font-medium mt-6">
                {t.hero.discussPrompt}
            </p>
        </motion.div>

      </motion.div>
    </section>
  );
};
