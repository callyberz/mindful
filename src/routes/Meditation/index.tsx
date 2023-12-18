import './index.css';

const BreathingExerciseCircle = () => {
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
    </svg>
  );
};
export default function Meditation() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <BreathingExerciseCircle />
      </div>
    </div>
  );
}
