import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Search, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export default function Articles() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: () => base44.entities.Article.list('-publish_date'),
  });

  const allTags = [...new Set(articles.flatMap(a => a.tags || []))];
  
  const featured = articles.filter(a => a.featured);
  const filtered = articles.filter(a => {
    const matchSearch = !search || a.title?.includes(search) || a.excerpt?.includes(search);
    const matchTag = !selectedTag || (a.tags || []).includes(selectedTag);
    return matchSearch && matchTag;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a0c, #99141e, #1a0a0c)' }}>
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            المقالات
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            مقالات ومواضيع قانونية من فريق شركة إعفاء
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 pattern-overlay" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="ابحث في المقالات..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pr-10 bg-white border-gray-200 rounded-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag('')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!selectedTag ? 'text-white' : 'text-gray-600 bg-white border border-gray-200 hover:border-[#a97c50]'}`}
                style={!selectedTag ? { background: '#99141e' } : {}}
              >
                الكل
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedTag === tag ? 'text-white' : 'text-gray-600 bg-white border border-gray-200 hover:border-[#a97c50]'}`}
                  style={selectedTag === tag ? { background: '#a97c50' } : {}}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          {!search && !selectedTag && featured.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#99141e' }}>مقالات مميزة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.slice(0, 2).map(article => (
                  <ArticleCard key={article.id} article={article} featured />
                ))}
              </div>
            </div>
          )}

          {/* All Articles */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">لا توجد مقالات حالياً</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ article, featured = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        to={createPageUrl(`ArticleDetail?slug=${article.slug}`)}
        className={`group block bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#a97c50]/30 shadow-sm hover:shadow-xl transition-all duration-500 ${featured ? 'md:flex' : ''}`}
      >
        {article.cover_image && (
          <div className={`overflow-hidden ${featured ? 'md:w-1/2' : 'h-48'}`}>
            <img
              src={article.cover_image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ minHeight: featured ? '250px' : 'auto' }}
            />
          </div>
        )}
        <div className={`p-5 md:p-6 ${featured ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
            {article.publish_date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {format(new Date(article.publish_date), 'yyyy/MM/dd')}
              </span>
            )}
            {article.reading_time && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.reading_time} دقائق
              </span>
            )}
          </div>
          <h3 className={`font-bold text-gray-900 group-hover:text-[#99141e] transition-colors leading-relaxed ${featured ? 'text-xl md:text-2xl mb-3' : 'text-lg mb-2'}`}>
            {article.title}
          </h3>
          {article.excerpt && (
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-3">{article.excerpt}</p>
          )}
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-600">{tag}</Badge>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}