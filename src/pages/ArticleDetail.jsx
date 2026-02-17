import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, User, Share2, Copy, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles';

export default function ArticleDetail() {
  const { slug } = useParams();
  const isLoading = false;
  const article = getArticleBySlug(slug);
  const related = getRelatedArticles(slug, 3);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('تم نسخ الرابط');
  };

  if (isLoading) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-64 bg-gray-200 rounded-2xl" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-xl text-gray-500 mb-4">المقال غير موجود</p>
        <Link to={createPageUrl('Articles')} className="text-[#a97c50] font-bold">
          العودة للمقالات
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2c1d13, #a97c50, #2c1d13)' }}>
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <Link to={createPageUrl('Articles')} className="text-white/60 hover:text-white transition-colors text-sm inline-flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              العودة للمقالات
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {article.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap text-white/60 text-sm"
          >
            {article.author && (
              <span className="flex items-center gap-1"><User className="w-4 h-4" />{article.author}</span>
            )}
            {article.publish_date && (
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{format(new Date(article.publish_date), 'yyyy/MM/dd')}</span>
            )}
            {article.reading_time && (
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.reading_time} دقائق للقراءة</span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {/* Cover image */}
          {article.cover_image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl overflow-hidden shadow-lg mb-10 -mt-10 md:-mt-16 relative z-10"
            >
              <img src={article.cover_image} alt={article.title} className="w-full object-cover max-h-[500px]" />
            </motion.div>
          )}

          {/* Tags */}
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs" style={{ background: '#99141e15', color: '#99141e' }}>{tag}</Badge>
              ))}
            </div>
          )}

          {/* Article body */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="prose-arabic">
              {(article.content || '').split('\n').filter(Boolean).map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="text-gray-500 text-sm">مشاركة المقال:</span>
            <Button variant="outline" size="sm" onClick={copyLink} className="gap-1">
              <Copy className="w-4 h-4" />
              نسخ الرابط
            </Button>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(to left, #a97c50, #8b643f)' }}
          >
            <h3 className="text-xl font-bold text-white mb-2">هل لديك استفسار حول هذا الموضوع؟</h3>
            <p className="text-white/70 mb-5 text-sm">تواصل معنا للحصول على استشارة قانونية متخصصة</p>
            <a
              href="https://wa.me/message/35TT3ASVVP7GF1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: '#25D366' }}
            >
              <MessageCircle className="w-5 h-5" />
              اطلب استشارة عبر واتساب
            </a>
          </motion.div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#a97c50' }}>مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    to={createPageUrl(`ArticleDetail?slug=${r.slug}`)}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-[#99141e]/20"
                  >
                    {r.cover_image && (
                      <img src={r.cover_image} alt={r.title} className="w-full h-32 object-cover" />
                    )}
                    <div className="p-4">
                      <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#a97c50] transition-colors leading-relaxed">
                        {r.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
