import { Link, Outlet } from 'react-router-dom';
import { HomeIcon } from '../components/icons/HomeIcon';
import { ClockIcon } from '../components/icons/ClockIcon';
import { PersonStandingIcon } from '../components/icons/PersonStandingIcon';

export default function Root() {
  const currentDate = new Date();
  const currentDateTimeString = currentDate.toLocaleString();

  return (
    <>
      <div className="bg-[#6f5de6] min-h-screen text-white">
        <div className="pt-8 px-6">
          <h1 className="text-4xl font-bold">Welcome</h1>
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
