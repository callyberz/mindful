import { Link } from 'react-router-dom';
// import { BarChartIcon } from '../components/icons/BarChartIcon';
import { BookIcon } from '../components/icons/BookIcon';
// import { CodeIcon } from '../components/icons/CodeIcon';

export default function Home() {
  return (
    <div className="mt-6 mx-6">
      <h2 className="text-2xl font-semibold">What do you need today?</h2>

      <Link to={`app`}>
        <div className="mt-4 p-4 rounded-lg bg-white bg-opacity-10 flex items-center">
          <BookIcon className="text-white w-6 h-6 mr-2" />
          <div>
            <p className="font-semibold">Breathing Exercise</p>
            <p className="text-sm opacity-70">Stay clam and breath</p>
          </div>
        </div>
      </Link>
      {/* <div className="mt-4 p-4 rounded-lg bg-white bg-opacity-10 flex items-center">
        <BarChartIcon className="text-white w-6 h-6 mr-2" />
        <div>
          <p className="font-semibold">Data Analysis</p>
          <p className="text-sm opacity-70">Recommended In Afternoon</p>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-lg bg-white bg-opacity-10 flex items-center">
        <BookIcon className="text-white w-6 h-6 mr-2" />
        <div>
          <p className="font-semibold">Educational Reading</p>
          <p className="text-sm opacity-70">Recommended In Evening</p>
        </div>
      </div> */}
    </div>
  );
}
