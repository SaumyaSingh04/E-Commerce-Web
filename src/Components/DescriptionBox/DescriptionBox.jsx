
const DescriptionBox = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-4xl mt-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700">
          Welcome to our e-commerce website, your one-stop shop for all your fashion needs. We offer a wide range of products 
          from clothing and accessories to shoes and beauty products. Our mission is to provide our customers with high-quality 
          products at competitive prices. We believe in making fashion accessible to everyone and strive to deliver the best 
          online shopping experience. Our team works tirelessly to source the latest trends and timeless pieces, ensuring that 
          you always find something you love. We are committed to excellent customer service and offer easy returns and exchanges 
          to make your shopping experience hassle-free. Shop with us today and discover the joy of online shopping with a brand 
          you can trust.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        <p className="text-gray-700">
          Our customers love shopping with us! Here is what they have to say:
        </p>
        <div className="mt-4">
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-600 mb-2">★★★★★</p>
            <p className="text-gray-700">
              I had a fantastic experience shopping on this site. The products are top-notch, and the customer service is excellent. 
              I received my order quickly and everything was exactly as described. Highly recommend!
            </p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">John Smith</h3>
            <p className="text-gray-600 mb-2">★★★★☆</p>
            <p className="text-gray-700">
              Great selection of products and competitive prices. The website is easy to navigate, and the checkout process is smooth. 
              I found everything I was looking for and more. Will definitely shop here again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
