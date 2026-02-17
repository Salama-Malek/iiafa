import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-center mb-12 md:mb-16"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-12 md:w-20" style={{ background: light ? 'rgba(255,255,255,0.3)' : 'var(--primary-solid)' }} />
        <div className="w-2.5 h-2.5 rotate-45" style={{ background: 'var(--primary-solid)' }} />
        <div className="h-px w-12 md:w-20" style={{ background: light ? 'rgba(255,255,255,0.3)' : 'var(--primary-solid)' }} />
      </div>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${light ? 'text-white' : ''}`} style={{ color: light ? 'white' : 'var(--secondary-solid)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${light ? 'text-white/85' : 'text-gray-700'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
