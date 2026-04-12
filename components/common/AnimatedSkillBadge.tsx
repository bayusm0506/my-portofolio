'use client';

import { motion } from 'motion/react';

interface AnimatedSkillBadgeProps {
  skill: string;
  delay?: number;
}

export function AnimatedSkillBadge({ skill, delay = 0 }: AnimatedSkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 0.4,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100">
        {skill}
      </div>
    </motion.div>
  );
}
