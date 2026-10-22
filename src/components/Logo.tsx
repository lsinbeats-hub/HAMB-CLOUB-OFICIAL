interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeStyles = {
    sm: 'text-lg tracking-[0.2em]',
    md: 'text-[25px] tracking-[0.22em]',
    lg: 'text-3xl sm:text-4xl tracking-[0.25em]',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <span className={`font-display font-black text-[#F5F4F0] uppercase ${sizeStyles[size]}`}>
        CLOUD
      </span>
    </div>
  );
}
