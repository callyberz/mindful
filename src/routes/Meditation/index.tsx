import { useState } from 'react';
import { inahleExhaleIntervalInSecond } from '@/lib/constants';
import { BreathingCircleMotion } from './components/BreathingCircleMotion';
import './index.css';

export default function Meditation() {
  const [breathingSeconds, setBreathingSeconds] = useState(
    inahleExhaleIntervalInSecond
  );

  return (
    <div className="px-6">
      <div className="flex justify-center items-center flex-col">
        <div className="flex-1 w-full">
          <h2 className="mt-6 text-2xl font-semibold">Customization Options</h2>
          <div className="mt-4 p-4 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
            <div className="w-full md:w-1/2 ">
              <p className="font-semibold text-center">Breathing Duration</p>
              <input
                className="mt-2 appearance-none bg-[#4338ca] h-2 rounded-full w-full"
                max="10"
                min="5"
                type="range"
                value={breathingSeconds}
                onChange={(e) => setBreathingSeconds(Number(e.target.value))}
              />
              {`Your current inhale duration is ${breathingSeconds} seconds`}
            </div>
          </div>
        </div>
        <div className="w-full max-w-md pt-10 flex justify-center">
          <BreathingCircleMotion magnifyingDuration={breathingSeconds} />
        </div>
      </div>
    </div>
  );
}
