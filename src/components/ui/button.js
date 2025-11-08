import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const Button = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  href,
  target,
  onClick,
  disabled,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm";
  
  const variants = {
    default: "neon-border-primary neon-glow-primary bg-background/30 dark:bg-background/20 text-primary hover:text-foreground",
    nav: "neon-border-primary neon-glow-primary bg-background/20 text-primary hover:text-foreground",
    outline: "neon-border-primary bg-background/10 text-primary hover:bg-background/20",
    ghost: "text-foreground hover:text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const buttonClasses = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.05, y: -3 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400 }
  };

  const isExternalLink = href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('/') && target === '_blank';

  if (href) {
    const linkProps = {
      href,
      className: buttonClasses,
      target: isExternalLink ? target || '_blank' : target,
      rel: isExternalLink ? 'noopener noreferrer' : undefined,
      onClick,
      disabled,
      ...props
    };

    if (isExternalLink) {
      return <motion.a {...linkProps} {...motionProps}>{children}</motion.a>;
    }

    return (
      <Link {...linkProps}>
        <motion.span {...motionProps} className="inline-flex items-center justify-center w-full">
          {children}
        </motion.span>
      </Link>
    );
  }

  const buttonProps = {
    className: buttonClasses,
    onClick,
    disabled,
    ...props
  };

  return <motion.button {...buttonProps} {...motionProps}>{children}</motion.button>;
};
