import { inahleExhaleIntervalInSecond } from '@/lib/constants';
import styled, { keyframes } from 'styled-components';

interface BreathingCircleProps {
  text?: string;
  inhaleSeconds?: number;
  exhaleSeconds?: number;
}

interface StyledComponentProps {
  duration?: number;
}

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

const RotatingCircle = styled.circle<StyledComponentProps>`
  animation: ${rotation} ${(props) => props.duration || 1}s infinite linear;
  transform-origin: 50px 50px;
`;

const Magnify = styled.div<StyledComponentProps>`
  animation: ${magnify} ${(props) => props.duration || 2}s ease-in-out infinite;
`;

export const BreathingCircle = ({
  text,
  inhaleSeconds,
  exhaleSeconds
}: BreathingCircleProps) => {
  return (
    <Magnify duration={inhaleSeconds}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
        <RotatingCircle
          cx="50"
          cy="5"
          r="2"
          fill="white"
          duration={exhaleSeconds}
        />
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
