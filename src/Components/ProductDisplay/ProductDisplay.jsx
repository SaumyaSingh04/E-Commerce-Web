import PropTypes from 'prop-types';
import star_icon from '../../Components/Assets/star_icon.png'; // Ensure you have a star icon image in the specified path
import arrow_icon from '../../Components/Assets/arrow.png'; // Ensure you have an arrow icon image in the specified path
import star_dull_icon from '../../Components/Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
  const ProductDisplay = ({ product }) => {
    const { 
      image, 
      name, 
      old_price, 
      new_price, 
      description = 'New Trendy Cloth With Comfortable Fabric', 
      sizes = ["S","M","L","XL","XXl"], 
      category, 
      tags = ["fancy","modern"] 
    } = product;
    const {addToCart} = useContext(ShopContext);
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-4xl">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-4">
          HOME <img src={arrow_icon} alt="Arrow" className="inline w-3 h-3 mx-1 bg-slate-200" />
          SHOP <img src={arrow_icon} alt="Arrow" className="inline w-3 h-3 mx-1  bg-slate-200" />
          {category} <img src={arrow_icon} alt="Arrow" className="inline w-3 h-3 mx-1  bg-slate-200" />
          {name}
        </div>
  
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8">
            <img src={image} alt={name} className="w-full lg:w-96 h-auto object-cover rounded-md" />
          </div>
  
          {/* Product Details */}
          <div className="flex-grow">
            <h1 className="text-2xl font-semibold mb-4">{name}</h1>
            
            {/* Star Rating */}
            <div className="flex items-center ">
              {[...Array(4)].map((_, i) => (
                <img key={i} src={star_icon} alt="Star Rating" className="w-4 h-4" />
              ))}
              <img src={star_dull_icon} alt="" />
            </div>
            <p className='mb-4'>(122)</p>
  
            {/* Pricing */}
            <div className="flex items-center mb-4">
              <span className="text-red-500 font-bold text-xl mr-4">${new_price}</span>
              <span className="text-gray-500 line-through">${old_price}</span>
            </div>
  
            {/* Description */}
            <p className="text-gray-700 mb-4">{description}</p>
  
            {/* Select Size */}
            {sizes.length > 0 ? (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Select Size</h3>
                <div className="flex space-x-4">
                  {sizes.map((size, index) => (
                    <button key={index} className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">{size}</button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Select Size</h3>
                <p className="text-gray-500">No sizes available</p>
              </div>
            )}
  
            {/* Add to Cart Button */}
            <div className="mb-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600" onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            </div>
  
            {/* Category and Tags */}
            <div className="text-gray-700">
              <p className="mb-2"><strong>Category:</strong> {category}</p>
              {tags.length > 0 && (
                <p><strong>Tags:</strong> {tags.join(', ')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProductDisplay;
