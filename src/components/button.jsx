export function Button({ 
  children, 
  className = "", 
  variant = "default", 
  ...props 
}) {
  const base = "px-4 py-2 font-medium rounded-lg transition";
  const variants = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    subtle: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button 
      className={`${base} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
