'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  delay = 0,
  direction = 'up' 
}) => {  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '50px'  
  });

  const directionOffset = {
    up: { y: 30 },     
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  };

  const initialOffset = directionOffset[direction] || directionOffset.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...initialOffset
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : initialOffset.y,
        x: inView ? 0 : initialOffset.x
      }}
      transition={{
        duration: 0.4,   
        delay: delay,
        ease: 'easeOut'  
      }}
    >
      {children}
    </motion.div>
  );
};
