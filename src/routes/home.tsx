import { Link } from 'react-router-dom';
import { BookIcon } from '../components/icons/BookIcon';

export default function Home() {
  return (
    <div className="mt-6 mx-6">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        What do you need today?
      </h2>

      <Link to={`app`}>
        <div className="mt-4 p-4 rounded-lg bg-white bg-opacity-10 flex items-center">
          <BookIcon className="text-white w-6 h-6 mr-2" />
          <div>
            <p className="font-semibold">Breathing Exercise</p>
            <p className="text-sm opacity-70">Stay clam and breath</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
