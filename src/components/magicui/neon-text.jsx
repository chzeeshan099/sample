'use client';
import { motion } from 'framer-motion';

export const NeonText = ({ children, className = '' }) => {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        {children}
      </span>     
       <motion.span
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-[2px] rounded-lg -z-10"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.span>
  );
};
