import { Link } from 'react-router-dom';
import { FaVirus } from 'react-icons/fa';
import SearchBox from './SearchBox';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white shadow-md">
      <div className="flex items-center ml-5">
        <Link
          to="/"
          className="flex items-center text-xl max-md:text-sm font-bold"
        >
          <FaVirus className="mr-2" /> COVID Tracker
        </Link>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <SearchBox />
      </div>
    </nav>
  );
};

export default Navbar;
