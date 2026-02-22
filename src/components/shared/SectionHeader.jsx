import React from 'react';

export default function SectionHeader({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16 animate-fade-up">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-12 md:w-20" style={{ background: light ? 'rgba(255,255,255,0.3)' : '#99141e' }} />
        <div className="w-2.5 h-2.5 rotate-45" style={{ background: '#99141e' }} />
        <div className="h-px w-12 md:w-20" style={{ background: light ? 'rgba(255,255,255,0.3)' : '#99141e' }} />
      </div>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${light ? 'text-white' : ''}`} style={{ color: light ? 'white' : '#a97c50' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${light ? 'text-white/85' : 'text-gray-700'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
