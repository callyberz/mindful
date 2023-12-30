interface BreathingCircleProps {
  inhaleSeconds?: number;
  exhaleSeconds?: number;
}

export const OptionsPanel = ({
  inhaleSeconds,
  exhaleSeconds
}: BreathingCircleProps) => {
  return (
    <>
      <h2 className="mt-6 text-2xl font-semibold">Customization Options</h2>
      <div className="mt-4 p-4 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
        <div className="w-1/2">
          <p className="font-semibold text-center">Inhale Duration</p>
          <input
            className="mt-2 appearance-none bg-[#4338ca] h-2 rounded-full w-full"
            max="60"
            min="1"
            type="range"
          />
        </div>
        <div className="w-1/2">
          <p className="font-semibold text-center">Hold Duration</p>
          <input
            className="mt-2 appearance-none bg-[#4338ca] h-2 rounded-full w-full"
            max="60"
            min="1"
            type="range"
          />
        </div>
        <div className="w-1/2">
          <p className="font-semibold text-center">Exhale Duration</p>
          <input
            className="mt-2 appearance-none bg-[#4338ca] h-2 rounded-full w-full"
            max="60"
            min="1"
            type="range"
          />
        </div>
        <div className="w-1/2">
          <p className="font-semibold text-center">Rest Duration</p>
          <input
            className="mt-2 appearance-none bg-[#4338ca] h-2 rounded-full w-full"
            max="60"
            min="1"
            type="range"
          />
        </div>
      </div>
    </>
  );
};
