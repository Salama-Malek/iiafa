import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Home, ArrowRight } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center pattern-overlay" style={{ background: 'var(--cream)', fontFamily: "'Saudi', sans-serif" }}>
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold mb-4" style={{ color: '#99141e' }}>404</h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12" style={{ background: '#a97c50' }} />
          <div className="w-2 h-2 rotate-45" style={{ background: '#a97c50' }} />
          <div className="h-px w-12" style={{ background: '#a97c50' }} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">الصفحة غير موجودة</h2>
        <p className="text-gray-500 mb-8">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
        <Link
          to={createPageUrl('Home')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#99141e' }}
        >
          <Home className="w-5 h-5" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}