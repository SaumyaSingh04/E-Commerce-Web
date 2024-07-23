import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-3">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} className="h-55 w-full object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 line-through">${old_price}</span>
          <span className="text-red-500 font-bold">${new_price}</span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductCard;
