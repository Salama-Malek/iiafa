export default function Button({ className = '', ...props }) {
  return <button className={`px-4 py-2 rounded-lg font-medium transition ${className}`} {...props} />;
}
