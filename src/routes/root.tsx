import { Link, Outlet } from 'react-router-dom';
import { HomeIcon } from '../components/icons/HomeIcon';
import { ClockIcon } from '../components/icons/ClockIcon';
import { PersonStandingIcon } from '../components/icons/PersonStandingIcon';
import { useState, useEffect } from 'react';

export default function Root() {
  const [currentDateTimeString, setCurrentDateTimeString] = useState<string>(
    new Date().toLocaleString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTimeString(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-[#6f5de6] min-h-screen text-white">
        <div className="pt-8 px-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome
          </h1>
          <p className="text-sm opacity-70">{currentDateTimeString}</p>
        </div>

        <div id="content">
          <Outlet />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 p-4 bg-[#4338ca] bg-opacity-90">
        <div className="flex justify-between">
          <Link to="/">
            <HomeIcon className="text-white w-6 h-6" />
          </Link>
          <ClockIcon className="text-white w-6 h-6" />
          <PersonStandingIcon className="text-white w-6 h-6" />
        </div>
      </div>
    </>
  );
}
