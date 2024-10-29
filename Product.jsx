
import p1 from '../assets/p1.jpg'; 
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';

const ProductSection = () => {
  const products = [
    {
      image: p1,
      title: ' BEATS EAGLE 2',
      buttonText: 'SHOP NOW',
    },
    {
      image: p2,
      title: 'BEATS TI 41MM',
      buttonText: 'SHOP NOW',
    },
    {
      image: p3,
      title: 'BEATS SOLO4',
      buttonText: 'SHOP NOW',
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-mono text-gray-800">
          Innovative Watchmaking That Dares
        </h2>
        <p className="text-gray-600 mt-2 font-mono">
          At Zelos, we draw inspiration from the rarest places. From miles beneath the sea, or above the clouds. From prized ancient materials and modern alloys.
        </p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
              <h2 className="text-white text-2xl font-semibold mb-4 font-mono">
                {product.title}
              </h2>
              <button className="bg-red-500 text-black py-2 px-6 rounded hover:bg-gray-300  duration-300 font-mono transition-colors before">
                {product.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
