
import product1 from '../assets/product1.jpg';  
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';

const products = [
  {
    image: product1,
    title: 'SWORDFISH 40MM AQUA DIAL',
    price: '$499.00 USD',
  },
  {
    image: product2,
    title: 'PERFORATED RACING LEATHER STRAP 20MM - VINTAGE BROWN',
    price: '$59.00 USD',
  },
  {
    image: product3,
    title: 'PERFORATED RACING LEATHER STRAP 20MM - SKY BLUE',
    price: '$59.00 USD',
  },
  {
    image: product4,
    title: 'RUBBER STRAP 22MM - GRAY',
    price: '$45.00 USD',
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-xl font-semibold font-mono text-red-600 uppercase tracking-wider">
          Timepieces In Stock
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="mx-auto w-60 h-60 object-contain"
              />
              <h3 className="mt-4 text-lg font-mono text-gray-700">{product.title}</h3>
              <p className="text-red-600 mt-2">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 ">
          <button className="relative bottom-2 font-medium border-red-600 bg-transparent py-2.5 px-5 uppercase text-red-600 transition-colors: before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
