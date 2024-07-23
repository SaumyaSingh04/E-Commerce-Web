import Navbar from './Components/Navbar/NavLayout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <ShopContextProvider>
      <div className="bg-pink-50 min-h-screen">
        <BrowserRouter>
          <Navbar />
          <div className="mr-14 ml-14">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
              <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
              <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignup />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ShopContextProvider>
  );
}

export default App;
