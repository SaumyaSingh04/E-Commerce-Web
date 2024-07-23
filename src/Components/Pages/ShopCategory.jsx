import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import ProductCard from "../../Popular/ProductCard";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  // Handle loading state
  if (!all_product || !Array.isArray(all_product)) {
    return <div>Loading...</div>;
  }

  const filteredProducts = all_product.filter(product => product.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <img src={banner} alt="Category Banner" className="w-full h-64 object-cover mb-8" />
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700">
          <span className="font-semibold">Showing 1 - {filteredProducts.length}</span> out of {all_product.length} Products
        </p>
        <div className="text-gray-700">
          Sort by <img src="/path/to/dropdown_icon.png" alt="Sort Dropdown" className="inline-block w-4 h-4 ml-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
      <div className="text-center py-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
