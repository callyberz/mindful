import { useEffect, useState } from 'react';
import './index.css';

const BreathingExerciseCircle = ({ text }: { text?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="magnify"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle className="rotating-circle" cx="50" cy="5" r="2" fill="white" />

      {text && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
        >
          {text}
        </text>
      )}
    </svg>
  );
};

const InhaleSeconds = 5000;

export default function Meditation() {
  const [text, setText] = useState('Inhale');

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) => (prevText === 'Inhale' ? 'Exhale' : 'Inhale'));
    }, InhaleSeconds);

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 md:w-1/2">
        <BreathingExerciseCircle text={text} />
      </div>
    </div>
  );
}
