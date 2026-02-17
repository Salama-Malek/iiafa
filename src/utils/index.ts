const routeMap: Record<string, string> = {
  Home: '/',
  About: '/من-نحن',
  Services: '/الخدمات',
  ServiceDetail: '/الخدمات',
  Lawyer: '/المحامي',
  Articles: '/المقالات',
  ArticleDetail: '/المقالات',
  Contact: '/تواصل'
};

export function createPageUrl(pageName: string) {
  const [name, query] = pageName.split('?');
  if (name === 'ServiceDetail' && query) {
    const params = new URLSearchParams(query);
    const slug = params.get('service');
    return slug ? `/الخدمات/${slug}` : '/الخدمات';
  }
  if (name === 'ArticleDetail' && query) {
    const params = new URLSearchParams(query);
    const slug = params.get('slug');
    return slug ? `/المقالات/${slug}` : '/المقالات';
  }
  return routeMap[name] ?? '/';
}
