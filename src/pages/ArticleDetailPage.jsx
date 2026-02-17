import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../lib/articles';
import { siteContent } from '../content/ar/site';
import PageNotFound from './PageNotFound';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const article = getArticleBySlug(slug);
  if (!article) return <PageNotFound />;
  const related = getRelatedArticles(slug, 3);
  const copy = async () => { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return <div className="container-page py-12"><img src={article.coverImage} alt={article.title} className="w-full max-h-96 object-cover rounded-xl mb-6" /><h1 className="text-3xl text-[#99141e] font-bold mb-2">{article.title}</h1><p className="text-sm text-gray-500 mb-6">{article.publishDate} • {article.readingTime} دقائق</p><p className="leading-8 mb-6">{article.content}</p><button onClick={copy} className="bg-[#a97c50] text-white px-4 py-2 rounded-lg">{copied ? 'تم نسخ الرابط' : 'مشاركة'}</button><a href={siteContent.brand.whatsappUrl} target="_blank" rel="noreferrer" className="mr-3 bg-green-600 text-white px-4 py-2 rounded-lg inline-block">تواصل واتساب</a><h2 className="font-bold mt-10 mb-3">مقالات ذات صلة</h2><div className="grid md:grid-cols-3 gap-3">{related.map((item)=><a key={item.slug} href={`/المقالات/${item.slug}`} className="bg-white p-3 rounded-lg">{item.title}</a>)}</div></div>;
}
