import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  icon: Icon,
  className = ''
}) => {
  const baseStyles = 'font-semibold rounded transition-all duration-200 flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300',
    success: 'bg-green-600 hover:bg-green-700 text-white disabled:bg-green-300',
    danger: 'bg-red-600 hover:bg-red-700 text-white disabled:bg-red-300',
    warning: 'bg-yellow-600 hover:bg-yellow-700 text-white disabled:bg-yellow-300',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-100',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
    </button>
  );
};

export default Button;