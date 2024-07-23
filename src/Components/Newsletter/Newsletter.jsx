
const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-200 p-8 rounded-lg text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-4">Get Exclusive Offers on Your Email</h2>
      <p className="mb-6">Subscribe to our newsletter and stay updated on the latest products, offers, and news.</p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <button 
          type="submit" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
