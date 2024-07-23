import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaTrash } from 'react-icons/fa'; // Import an icon for the remove button

const CartItem = () => {
  const { calculateTotalCartAmount,all_product, cartItem, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {Object.keys(cartItem).map((itemId) => {
          const itemQuantity = cartItem[itemId];
          if (itemQuantity > 0) {
            const product = all_product.find((prod) => prod.id === Number(itemId));
            return (
              <div key={itemId} className="flex items-center justify-between border-b py-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">${product.new_price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => removeFromCart(itemId)}
                    className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span>{itemQuantity}</span>
                  <button 
                    onClick={() => addToCart(itemId)}
                    className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <div className="text-lg font-semibold m-1">
                  ${product.new_price * itemQuantity}
                </div>
                <button 
                  onClick={() => removeFromCart(itemId)}
                  className="text-red-500 hover:text-red-700 m-1"
                >
                  <FaTrash />
                </button>
              </div>
            );
          }
          return null;
        })}
       {/* Cart total */}
       <div className="flex justify-between mt-4">
          <div className="text-lg font-semibold">Cart Total:</div>
          <div className="text-lg md:font-bold">${calculateTotalCartAmount()}</div>
        </div>

        {/* Shipping fees */}
        <div className="flex justify-between mb-4">
          <div className="text-lg font-semibold">Shipping Fees:</div>
          <div className="text-lg">Free</div>
        </div>
        <div>
            <p>Apply Promo Code</p>
        <input
            type="text"
            placeholder="Enter promo code"
            className="border border-gray-300 rounded px-1 py-1 w-30" 
          />
          <button className=" bg-gray-800 text-white px-1 py-1 m-1 rounded hover:bg-red-200">submit</button>
        </div>
        {/* Proceed to checkout button */}
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
          Proceed to Checkout
        </button>
        
      </div>
    </div>
  );
};

export default CartItem;