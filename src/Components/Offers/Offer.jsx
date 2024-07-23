import exclusive_image from '../Assets/exclusive_image.png';

const Offer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-pink-200 p-8 rounded-lg text-gray-800 text-center w-96 mx-auto"> 
      <h2 className="text-3xl font-bold mb-2">Special Offer!</h2>
      <p className="mb-4">Dont miss out on our limited-time offer. Check out our latest collections and enjoy exclusive discounts.</p>
      <img 
        src={exclusive_image} 
        alt="Special Offer" 
        className="w-full h-48 object-contain rounded-lg mb-6"
      />
      <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-md hover:bg-purple-100 transition ease-in-out duration-300">
        Check Now
      </button>
    </div>
  );
};

export default Offer;
