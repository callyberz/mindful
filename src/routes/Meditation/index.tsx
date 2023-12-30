import { useEffect, useState } from 'react';
import { inahleExhaleIntervalInSecond } from '@/lib/constants';
import { BreathingCircle } from './components/BreathingCircle';
import './index.css';

export default function Meditation() {
  const [text, setText] = useState('Inhale');

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) => (prevText === 'Inhale' ? 'Exhale' : 'Inhale'));
      // 1/4 of the time, change the text
    }, (inahleExhaleIntervalInSecond * 1000) / 4);

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex-1 w-3/4"></div>
        <div className="w-3/4 max-w-md pt-8">
          <BreathingCircle
            text={text}
            inhaleSeconds={inahleExhaleIntervalInSecond / 2}
            exhaleSeconds={inahleExhaleIntervalInSecond}
          />
        </div>
      </div>
    </div>
  );
}
