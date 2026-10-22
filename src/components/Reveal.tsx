import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  scale?: boolean;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 32,
  duration = 0.65,
  scale = false,
}: RevealProps) {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: scale ? 0.95 : 1, ...getOffset() }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
