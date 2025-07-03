import React from 'react';
import { cn } from '../../utils/cn';

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    success: 'bg-success-100 text-success-800 hover:bg-success-200',
    warning: 'bg-warning-100 text-warning-800 hover:bg-warning-200',
    error: 'bg-error-100 text-error-800 hover:bg-error-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';

export default Badge;