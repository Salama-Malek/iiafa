import { services } from '../content/ar/services';
export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);
