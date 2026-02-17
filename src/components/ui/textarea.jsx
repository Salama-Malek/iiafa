import * as React from 'react';

const Textarea = React.forwardRef(({ className = '', ...props }, ref) => {
  return <textarea ref={ref} className={`w-full rounded-lg border border-gray-300 px-3 py-2 ${className}`.trim()} {...props} />;
});

Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;
