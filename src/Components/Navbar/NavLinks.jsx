import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-400"
        >
          Shop
        </Link>
        <Link
          to="/mens"
          className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-400"
        >
          Mens
        </Link>
        <Link
          to="/womens"
          className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-400"
        >
          Womens
        </Link>
        <Link
          to="/kids"
          className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-400"
        >
          Kids
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
