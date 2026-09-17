import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock email service delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section 
      id="contact" 
      className="py-24 bg-[var(--bg-main)] relative overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--bg-surface)] text-[var(--brand-accent)] text-xs font-bold tracking-wider uppercase mb-6 shadow-[var(--neu-pressed-sm)] transition-colors duration-300">
            {t.contact.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-heading)] leading-tight mb-4 transition-colors duration-300">
            {t.contact.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-[var(--text-body)] font-medium max-w-2xl mx-auto transition-colors duration-300">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="bg-[var(--bg-card)] rounded-[3rem] p-8 sm:p-12 shadow-[var(--neu-flat-xl)] max-w-3xl mx-auto relative transition-colors duration-300">
          
          {/* Decorative Corner Node */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--bg-card)] rounded-full shadow-[var(--neu-flat-md)] z-0 transition-colors duration-300"></div>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[var(--bg-card)] shadow-[var(--neu-pressed-lg)] flex items-center justify-center mb-6 transition-colors duration-300">
                <CheckCircle className="w-12 h-12 text-[var(--brand-accent)]" />
              </div>
              <h3 className="text-3xl font-extrabold text-[var(--text-heading)] mb-3 transition-colors duration-300">{t.contact.success}</h3>
              <p className="text-[var(--text-body)] font-medium text-lg transition-colors duration-300">{t.contact.successDesc}</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 relative z-10"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
                  <label htmlFor="name" className="block text-sm font-bold text-[var(--text-heading)] mb-2 px-2 transition-colors duration-300 text-left rtl:text-right">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-input)] text-[var(--text-heading)] font-bold rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]/30 shadow-[var(--neu-pressed-md)] transition-all placeholder:text-[var(--text-body)]/40 placeholder:font-medium"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
                  <label htmlFor="email" className="block text-sm font-bold text-[var(--text-heading)] mb-2 px-2 transition-colors duration-300 text-left rtl:text-right">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg-input)] text-[var(--text-heading)] font-bold rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]/30 shadow-[var(--neu-pressed-md)] transition-all placeholder:text-[var(--text-body)]/40 placeholder:font-medium"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </motion.div>
              </div>
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
                <label htmlFor="message" className="block text-sm font-bold text-[var(--text-heading)] mb-2 px-2 transition-colors duration-300 text-left rtl:text-right">{t.contact.form.projectDetails}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-input)] text-[var(--text-heading)] font-bold rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]/30 shadow-[var(--neu-pressed-md)] transition-all placeholder:text-[var(--text-body)]/40 placeholder:font-medium resize-none"
                  placeholder={t.contact.form.projectPlaceholder}
                />
              </motion.div>
              <motion.div 
                className="pt-6 text-center sm:text-left rtl:sm:text-right"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-base font-bold text-[#ffffff] bg-[var(--brand-primary)] shadow-[var(--neu-flat-md)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3)] hover:bg-[var(--brand-primary-hover)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:group-hover:-translate-x-1" />}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </div>
    </motion.section>
  );
};
