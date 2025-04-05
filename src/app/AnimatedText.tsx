'use client';

import { motion, useMotionValue, animate, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

const words = ['Write', 'Edit', 'Share', 'Collaborate', 'Powered By AI'] as string[];

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};
const BlinkingCursor = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-16 w-2 bg-amber-400 translate-y-4"
    />
  );
};

const AnimatedText = () => {
  const wordIndex = useMotionValue(0);
  const baseText = useTransform(wordIndex, latest => words[latest] || '');
  const count = useMotionValue(0);
  const countRef = useRef(count);
  const rounded = useTransform(count, latest => Math.round(latest));
  const displayText = useTransform(rounded, latest => baseText.get().slice(0, latest));
  const updatedThisRound = useMotionValue(true);
  useEffect(() => {
    const controls = animate(countRef.current, 20, {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          updatedThisRound.set(true);
          if (wordIndex.get() === words.length - 1) {
            wordIndex.set(0);
          } else {
            wordIndex.set(wordIndex.get() + 1);
          }
        }
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <BlinkingCursor />
    </span>
  );
};
export default AnimatedText;
