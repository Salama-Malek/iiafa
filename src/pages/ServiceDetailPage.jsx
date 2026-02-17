import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../lib/services';
import PageNotFound from './PageNotFound';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) return <PageNotFound />;
  return <div className="container-page py-12"><h1 className="text-3xl text-[#99141e] font-bold mb-4">{service.title}</h1><p className="mb-4">{service.body}</p><ul className="list-disc pr-6 mb-6">{service.points.map((point) => <li key={point}>{point}</li>)}</ul><Link to="/تواصل" className="bg-[#99141e] text-white rounded-lg px-4 py-2">اطلب الخدمة</Link></div>;
}
