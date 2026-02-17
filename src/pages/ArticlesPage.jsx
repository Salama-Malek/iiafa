import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../content/ar/articles';

const PAGE_SIZE = 2;

export default function ArticlesPage() {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const tags = [...new Set(articles.flatMap((article) => article.tags))];
  const filtered = useMemo(() => articles.filter((article) => article.title.includes(search) && (!tag || article.tags.includes(tag))), [search, tag]);
  const featured = articles.filter((article) => article.featured);
  return <div className="container-page py-12"><h1 className="text-3xl text-[#99141e] font-bold mb-6">المقالات</h1><div className="bg-white rounded-xl p-4 mb-6 flex flex-col gap-3"><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="ابحث في المقالات" className="border rounded-lg p-2" /><div className="flex flex-wrap gap-2"><button onClick={()=>setTag('')} className={`px-3 py-1 rounded ${tag===''?'bg-[#99141e] text-white':'bg-gray-100'}`}>الكل</button>{tags.map((item) => <button key={item} onClick={()=>setTag(item)} className={`px-3 py-1 rounded ${tag===item?'bg-[#a97c50] text-white':'bg-gray-100'}`}>{item}</button>)}</div></div>{!search && !tag && <section className="mb-8"><h2 className="font-bold mb-3">مميزة</h2><div className="grid md:grid-cols-2 gap-4">{featured.map((article)=><ArticleCard key={article.slug} article={article} />)}</div></section>}<section className="grid md:grid-cols-2 gap-4">{filtered.slice(0, visible).map((article)=><ArticleCard key={article.slug} article={article} />)}</section>{visible < filtered.length && <button onClick={()=>setVisible((v)=>v+PAGE_SIZE)} className="mt-6 bg-[#99141e] text-white px-4 py-2 rounded-lg">عرض المزيد</button>}</div>;
}
function ArticleCard({ article }) { return <Link to={`/المقالات/${article.slug}`} className="bg-white rounded-xl p-4 block"><img src={article.coverImage} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-3" /><h3 className="font-bold mb-1">{article.title}</h3><p className="text-sm text-gray-600">{article.excerpt}</p></Link>; }
