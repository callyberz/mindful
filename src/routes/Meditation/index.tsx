import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './index.css';

const inahleExhaleIntervalInSecond = 10;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const magnify = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const RotatingCircle = styled.circle`
  animation: ${rotation} ${inahleExhaleIntervalInSecond}s infinite linear;
  transform-origin: 50px 50px;
`;

export const Magnify = styled.div`
  animation: ${magnify} ${inahleExhaleIntervalInSecond / 2}s ease-in-out
    infinite;
`;

const BreathingExerciseCircle = ({ text }: { text?: string }) => {
  return (
    <Magnify>
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
        <RotatingCircle cx="50" cy="5" r="2" fill="white" />
        {/* <circle className="rotating-circle" cx="50" cy="5" r="2" fill="white" /> */}
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
    </Magnify>
  );
};

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
    <div className="flex justify-center items-center">
      <div className="w-3/4 max-w-md">
        <BreathingExerciseCircle text={text} />
      </div>
    </div>
  );
}
