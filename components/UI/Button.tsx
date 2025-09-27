import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium shadow-lg transition-all";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-xl",
    secondary: "bg-white text-purple-600 hover:shadow-xl"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};