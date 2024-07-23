import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to='/login' className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-300">
      <button className="text-inherit">Login</button>
    </Link>
  );
}

export default LoginButton;
