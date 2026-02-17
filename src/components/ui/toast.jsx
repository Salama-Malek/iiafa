export function Toast({ show, message }) {
  if (!show) return null;
  return <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-[#99141e] text-white px-4 py-2 rounded-lg z-50">{message}</div>;
}
