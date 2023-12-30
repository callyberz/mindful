import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BreathingCircleProps {
  magnifyingDuration: number;
}

const repeatDelay = 1;

export const BreathingCircleMotion = ({
  magnifyingDuration
}: BreathingCircleProps) => {
  const [breathingText, setBreathingText] = useState('Inhale');

  useEffect(() => {
    const timer = setInterval(() => {
      setBreathingText((prevText) =>
        prevText === 'Inhale' ? 'Exhale' : 'Inhale'
      );
      // 1/4 duration of the magnifying circle, change the text
      // plus 1/2 of the repeatDelay
    }, (magnifyingDuration / 4 + repeatDelay / 2) * 1000);

    return () => clearInterval(timer);
  }, [magnifyingDuration]);

  return (
    <motion.div
      key={magnifyingDuration}
      className="w-96 h-96 bg-purple-400 border-2 border-purple-800 rounded-full flex justify-center items-center"
      animate={{
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: magnifyingDuration / 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: repeatDelay
      }}
    >
      <motion.div
        className="w-64 h-64 bg-purple-400 border-2 border-purple-800 rounded-full flex justify-center items-center text-2xl"
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: magnifyingDuration / 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: repeatDelay
        }}
      >
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {breathingText}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
