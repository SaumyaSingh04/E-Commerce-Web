import { Link } from 'react-router-dom';
import hero_image from "../Assets/hero_image.png"

const HeroSection = () => {
  return (
    <div
      className="relative bg-contain bg-no-repeat bg-right-bottom h-screen w-full"
      style={{ backgroundImage: `url(${hero_image})` }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-500 px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg mb-8">Discover the best products for men, women, and kids. Shop now and enjoy amazing discounts!</p>

          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
            <p className="text-lg mb-4">Check out our latest collections and stay ahead of the fashion trends. Our new arrivals include stylish and trendy apparel for all ages.</p>
          </div>

          <Link to="/latest-collection" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            View Latest Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
