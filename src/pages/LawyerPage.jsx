import { lawyerProfile } from '../content/ar/lawyer';

export default function LawyerPage() {
  return <div className="container-page py-12"><h1 className="text-3xl text-[#99141e] font-bold mb-4">المحامي</h1><div className="bg-white rounded-xl p-6"><h2 className="text-xl font-bold mb-2">{lawyerProfile.name}</h2><p className="text-[#a97c50] mb-3">{lawyerProfile.title}</p><p className="mb-4">{lawyerProfile.bio}</p><ul className="list-disc pr-6">{lawyerProfile.credentials.map((item) => <li key={item}>{item}</li>)}</ul></div></div>;
}
