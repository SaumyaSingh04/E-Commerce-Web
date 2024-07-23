
const LoginSignup = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label htmlFor="agree" className="text-sm text-gray-700">I agree to the Terms and Conditions</label>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Continue</button>
      </form>
      <p className="text-center mt-4">Already have an account? <a href="#" className="text-blue-500">Log in here</a></p>
    </div>
  );
};

export default LoginSignup;
