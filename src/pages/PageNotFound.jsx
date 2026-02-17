import { Link } from 'react-router-dom';
export default function PageNotFound() {
  return <div className="container-page py-20 text-center"><h1 className="text-4xl font-bold text-[#99141e] mb-4">404</h1><p className="mb-4">الصفحة غير موجودة</p><Link to="/" className="bg-[#99141e] text-white px-4 py-2 rounded-lg">العودة للرئيسية</Link></div>;
}
