import { useEffect } from 'react';
import { t } from '@/i18n';

const SITE_URL = 'https://iiafa.info';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-1.webp`;

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

const ensureJsonLd = () => {
  let script = document.head.querySelector('script[data-meta="structured-data"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-meta', 'structured-data');
    document.head.appendChild(script);
  }
  return script;
};

const buildCanonicalUrl = () => {
  const currentPath = window.location.pathname || '/';
  return new URL(currentPath, SITE_URL).href;
};

export function usePageMeta(metaKey) {
  useEffect(() => {
    const title = t(`meta.${metaKey}.title`);
    const description = t(`meta.${metaKey}.description`);
    const siteName = t('app.siteName');
    const canonicalUrl = buildCanonicalUrl();

    document.title = title;

    ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute('content', description);
    ensureMeta('meta[name="robots"]', { name: 'robots' }).setAttribute('content', 'index, follow');

    ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', 'website');
    ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', title);
    ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description);
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale' }).setAttribute('content', 'ar_SA');
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name' }).setAttribute('content', siteName);
    ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', canonicalUrl);
    ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', DEFAULT_OG_IMAGE);

    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute('content', 'summary_large_image');
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute('content', title);
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute('content', description);
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute('content', DEFAULT_OG_IMAGE);

    const canonical = ensureCanonical();
    canonical.setAttribute('href', canonicalUrl);

    const jsonLd = ensureJsonLd();
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: siteName,
      url: SITE_URL,
      image: DEFAULT_OG_IMAGE,
      inLanguage: 'ar-SA',
      areaServed: 'SA',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'الرياض',
        addressCountry: 'SA',
      },
      sameAs: [
        'https://x.com/iiafalaw?s=11',
        'https://www.instagram.com/m.iiafa?igsh=MWRiemloZHd0dnVzaw%3D%3D&utm_source=qr',
        'https://www.linkedin.com/company/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A5%D8%B9%D9%81%D8%A7%D8%A1-%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9/',
      ],
    });
  }, [metaKey]);
}
