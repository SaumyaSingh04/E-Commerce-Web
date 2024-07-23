import data_product from "../Assets/data"
import ProductCard from "../../Popular/ProductCard"

function RelatedProduct() {
  return (
    <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Related Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{data_product.map((product,i)=>{
    return <ProductCard
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
  )
}

export default RelatedProduct