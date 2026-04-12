'use client';

import { motion } from 'motion/react';

import { AnimatedSkillBadge } from './AnimatedSkillBadge';

interface AnimatedSkillsGridProps {
  skills: string[];
}

export function AnimatedSkillsGrid({ skills }: AnimatedSkillsGridProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {skills.map((skill, index) => (
        <AnimatedSkillBadge key={skill} skill={skill} delay={index * 0.05} />
      ))}
    </motion.div>
  );
}
