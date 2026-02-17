import { useEffect } from 'react';
import { t } from '@/i18n';

const ensureMeta = (selector, attrs) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  return element;
};

const ensureCanonical = () => {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  return canonical;
};

export function usePageMeta(metaKey) {
  useEffect(() => {
    const title = t(`meta.${metaKey}.title`);
    const description = t(`meta.${metaKey}.description`);
    const siteName = t('app.siteName');

    document.title = title;

    ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute('content', description);
    ensureMeta('meta[name="robots"]', { name: 'robots' }).setAttribute('content', 'index, follow');
    ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', 'website');
    ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', title);
    ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description);
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale' }).setAttribute('content', 'ar_SA');
    ensureMeta('meta[property="twitter:card"]', { property: 'twitter:card' }).setAttribute('content', 'summary_large_image');
    ensureMeta('meta[property="twitter:title"]', { property: 'twitter:title' }).setAttribute('content', title);
    ensureMeta('meta[property="twitter:description"]', { property: 'twitter:description' }).setAttribute('content', description);
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name' }).setAttribute('content', siteName);

    const canonical = ensureCanonical();
    canonical.setAttribute('href', window.location.href);
  }, [metaKey]);
}
