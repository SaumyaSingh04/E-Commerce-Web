import ProductCard from '../../Popular/ProductCard.jsx'; 
import new_collection from '../Assets/new_collections'; 


const NewCollection = () => {
  return (
    <div className=" py-12 ">
      <h2 className="text-4xl font-bold text-center mb-5">New Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {new_collection.map((product,i) => { 
          return<ProductCard
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
})}
      </div>
    </div>
  );
};

export default NewCollection;
