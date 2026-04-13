'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight';
}

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
};

export function MotionContainer({
  children,
  className,
  delay = 0,
  variant = 'fadeInUp',
}: MotionContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
