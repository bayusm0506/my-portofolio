'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MotionGridProps {
  children: ReactNode;
  className?: string;
}

export function MotionGrid({ children, className }: MotionGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
