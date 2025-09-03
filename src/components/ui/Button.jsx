export default function Button({
  variant = "primary",
  size = "full",
  children,
  onClick,
  ...props
}) {
  const baseStyle = "rounded-sm transition-all cursor-pointer";

  const variants = {
    primary: "bg-gray-900 hover:bg-gray-600 text-white",
    secondary: "bg-neutral-200 hover:bg-neutral-100",
  };

  const sizes = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4",
    lg: "py-4 px-6 text-lg",
    full: "w-full py-2 px-4 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
