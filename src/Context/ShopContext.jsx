import { createContext } from "react";
import all_product from '../Components/Assets/all_product'; 
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultcart=()=>{
  let cart ={};
  for (let index = 0; index < all_product.length+1; index++) {
   cart[index]=0;
    
  } return cart;
}

const ShopContextProvider = ({children}) => {
  const [cartItem, setcartItem] = useState(getDefaultcart)
  
  const addToCart = (ItemId) => {
setcartItem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
console.log(cartItem);
  }

  const removeFromCart = (ItemId) => {
setcartItem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
  }

  const calculateTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      const quantity = cartItem[itemId];
      if (quantity > 0) {
        const product = all_product.find((prod) => prod.id === Number(itemId));
        if (product) {
          totalAmount += quantity * product.new_price;
        }
      }
    }
    return totalAmount;
  };

const getTotalCartItems = () => {
  let totalItems = 0;
  for (const itemId in cartItem) {
    totalItems += cartItem[itemId];
  }
  return totalItems;
};


  const ContextValue = {getTotalCartItems,calculateTotalCartAmount , all_product , cartItem , addToCart , removeFromCart};


  return (
    <ShopContext.Provider value={ContextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
