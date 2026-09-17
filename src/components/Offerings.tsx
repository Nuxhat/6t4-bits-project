import React from 'react';
import { Smartphone, Layout, Cloud, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Offerings: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.section 
      id="offerings" 
      className="py-24 bg-[var(--bg-main)] relative overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Decorative Orbs */}
      <div className="absolute top-40 right-[10%] w-24 h-24 bg-[var(--bg-surface)] rounded-full shadow-[var(--neu-pressed-lg)] z-0 transition-colors duration-300"></div>
      <div className="absolute bottom-40 left-[5%] w-32 h-32 bg-[var(--bg-surface)] rounded-full shadow-[var(--neu-pressed-lg)] z-0 transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--bg-surface)] text-[var(--brand-accent)] text-xs font-bold tracking-wider uppercase mb-6 shadow-[var(--neu-pressed-sm)] transition-colors duration-300">
            {t.offerings.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-heading)] leading-tight mb-6 transition-colors duration-300">
            {t.offerings.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">{t.offerings.title2}</span>
          </h2>
          <p className="text-lg text-[var(--text-body)] font-medium max-w-2xl mx-auto transition-colors duration-300">
            {t.offerings.subtitle}
          </p>
        </div>

        {/* Offerings Content */}
        <div className="space-y-32">
          
          {/* Offering 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 text-left rtl:text-right">
              <div className="w-16 h-16 rounded-2xl bg-[var(--bg-card)] shadow-[var(--neu-flat-lg)] flex items-center justify-center mb-8 transition-colors duration-300">
                <Smartphone className="w-8 h-8 text-[var(--brand-primary)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] mb-6 leading-tight transition-colors duration-300">
                {t.offerings.endToEnd.title1} <br/> <span className="text-[var(--brand-primary)]">{t.offerings.endToEnd.title2}</span>
              </h3>
              <p className="text-base text-[var(--text-body)] leading-relaxed font-medium mb-8 transition-colors duration-300">
                {t.offerings.endToEnd.desc}
              </p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {t.offerings.endToEnd.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 bg-[var(--bg-card)] p-3 rounded-xl shadow-[var(--neu-pressed-md)] transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] shrink-0" />
                    <span className="text-sm font-bold text-[var(--text-heading)]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] w-full flex items-center justify-center">
               {/* Main Image Frame */}
               <div className="absolute z-10 w-full max-w-md h-full rounded-[3rem] p-3 bg-[var(--bg-card)] shadow-[var(--neu-flat-xl)] transition-colors duration-300">
                 <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative shadow-[var(--neu-img-frame)]">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                        alt="Mobile App Development" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/50 to-transparent"></div>
                 </div>
               </div>

               {/* Floating Badges */}
               <motion.div 
                 className="absolute bottom-[15%] left-[-10%] sm:left-[-5%] z-20 bg-[var(--bg-card)] rounded-2xl p-4 flex items-center gap-4 shadow-[var(--neu-flat-lg)] transition-colors duration-300"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
               >
                   <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center text-white">
                       <Layout className="w-6 h-6" />
                   </div>
                   <div className="text-left rtl:text-right px-2">
                       <div className="text-[15px] font-extrabold text-[var(--text-heading)] leading-tight">{t.offerings.badges.pixelPerfect}</div>
                       <div className="text-xs font-medium text-[var(--text-body)]">{t.offerings.badges.uiUx}</div>
                   </div>
               </motion.div>
            </div>
          </div>

          {/* Offering 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 relative h-[400px] sm:h-[500px] w-full flex items-center justify-center">
               {/* Main Image Frame */}
               <div className="absolute z-10 w-full max-w-md h-full rounded-[3rem] p-3 bg-[var(--bg-card)] shadow-[var(--neu-flat-xl)] transition-colors duration-300">
                 <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative shadow-[var(--neu-img-frame)]">
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                        alt="Cloud Architecture" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/50 to-transparent"></div>
                 </div>
               </div>

               {/* Floating Badges */}
               <motion.div 
                 className="absolute top-[15%] right-[-10%] sm:right-[-5%] z-20 bg-[var(--bg-card)] rounded-2xl p-4 flex items-center gap-4 shadow-[var(--neu-flat-lg)] transition-colors duration-300"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0 }}
               >
                   <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center text-white">
                       <Shield className="w-6 h-6" />
                   </div>
                   <div className="text-left rtl:text-right px-2">
                       <div className="text-[15px] font-extrabold text-[var(--text-heading)] leading-tight">{t.offerings.badges.enterprise}</div>
                       <div className="text-xs font-medium text-[var(--text-body)]">{t.offerings.badges.security}</div>
                   </div>
               </motion.div>
            </div>

            <div className="order-2 text-left rtl:text-right">
              <div className="w-16 h-16 rounded-2xl bg-[var(--bg-card)] shadow-[var(--neu-flat-lg)] flex items-center justify-center mb-8 transition-colors duration-300">
                <Cloud className="w-8 h-8 text-[var(--brand-accent)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] mb-6 leading-tight transition-colors duration-300">
                {t.offerings.cloud.title1} <br/> <span className="text-[var(--brand-accent)]">{t.offerings.cloud.title2}</span>
              </h3>
              <p className="text-base text-[var(--text-body)] leading-relaxed font-medium mb-8 transition-colors duration-300">
                {t.offerings.cloud.desc}
              </p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {t.offerings.cloud.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 bg-[var(--bg-card)] p-3 rounded-xl shadow-[var(--neu-pressed-md)] transition-colors duration-300"
                  >
                    <Zap className="w-5 h-5 text-[var(--brand-primary)] shrink-0" />
                    <span className="text-sm font-bold text-[var(--text-heading)]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
