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
      className="w-64 h-64 md:w-96 md:h-96 bg-purple-400 border-4 border-purple-800 rounded-full flex justify-center items-center"
      animate={{
        scale: [1, 1.1, 1]
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
        className="w-36 h-36 md:w-64 md:h-64 bg-purple-400 border-4 border-purple-800 rounded-full flex justify-center items-center"
        animate={{
          scale: [1, 1.15, 1]
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
          className="text-2xl text-purple-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {breathingText}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
