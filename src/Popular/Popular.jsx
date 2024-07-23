import ProductCard from './ProductCard';
import data_product from '../Components/Assets/data';

const PopularInWomen = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Popular in Womens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data_product.map((productitem) => (
          <ProductCard
            key={productitem.id} 
            id={productitem.id}
            name={productitem.name}
            image={productitem.image}
            new_price={productitem.new_price.toString()}
            old_price={productitem.old_price.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularInWomen;
