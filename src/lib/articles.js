import { articles } from '../content/ar/articles';
export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug);
export const getRelatedArticles = (slug, limit = 3) =>
  articles.filter((article) => article.slug !== slug).slice(0, limit);
