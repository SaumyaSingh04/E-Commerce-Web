import { useContext} from 'react';
import { Link } from 'react-router-dom';
import cart_logo from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const CartButton = () => {
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <Link to='/cart' className="relative inline-block">
      <div className="text-gray-900 hover:bg-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ease-in-out duration-300">
        <span><img src={cart_logo} alt="cart" /></span>
      </div>
      {/* Absolute positioned div to show the cart item count */}
      {getTotalCartItems() > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs">
          {getTotalCartItems()}
        </div>
      )}
    </Link>
  );
}

export default CartButton;
