export const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${className}`} {...props}>
    {children}
  </button>
);
