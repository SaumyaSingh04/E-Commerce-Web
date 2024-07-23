import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import footer_logo from '../Assets/logo_big.png'

const Footer = () => {
    return (
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-4">
              <img src={footer_logo} alt="Logo" className="h-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">SHOPPER</h2>
            <div className="flex space-x-6 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-700 transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-gray-700 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-700 transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-700 transition duration-300" />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Company</h4>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Product</h4>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">About</h4>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Offices</h4>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact</h4>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;