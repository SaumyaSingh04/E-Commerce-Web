import arrow_icon from '../../Components/Assets/arrow.png';

function BreadCrumb({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);

  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <span>HOME</span>
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      <span>SHOP</span>
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      <span>{product.name}</span>
    </div>
  );
}

export default BreadCrumb;
