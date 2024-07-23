import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import RelatedProduct from "../RelatedProducts/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
