import swordfish1Image from '../assets/productgrid1.jpg';  
import swordfish2Image from '../assets/productgrid2.jpg';  
import swordfish3Image from '../assets/productgrid3.jpg';  
import swordfish4Image from '../assets/productgrid4.jpg';  

const ProductGridSection = () => {
  const products = [
    {
      image: swordfish1Image,
      title: "Swordfish 40mm SS Teal MOP Launch Special",
      price: "$399 USD",
    },
    {
      image: swordfish2Image,
      title: "Swordfish 40mm SS Crimson Red Launch Special",
      price: "$399 USD",
    },
    {
      image: swordfish3Image,
      title: "Swordfish 40mm SS DLC Meteorite Launch Special",
      price: "$499 USD",
    },
    {
      image: swordfish4Image,
      title: "Swordfish 42mm SS Sky Blue Launch Special",
      price: "$299 USD",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black font-mono">
          The Swordfish Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover mb-4 transform transition duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-mono text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-red-600 font-mono">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="relative inline-block font-medium border border-red-600 bg-transparent py-2.5 px-5 uppercase text-red-600 transition-colors duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:text-white hover:before:scale-x-100 z-10"
          >
            Browse Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;
