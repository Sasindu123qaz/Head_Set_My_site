import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/image2.jpg';
import image2 from '../assets/image3.jpg';
import image3 from '../assets/image4.jpg';
import image4 from '../assets/image5.jpg';
import image5 from '../assets/image6.jpg';

const images = [image1, image2, image3, image4, image5];

const content = [
  {
    title: "THE SWORDFISH DIVER",
    description: "Explore the depths with this robust diving watch.",
    buttonText: "Shop Now",
  },
  {
    title: "EXPLORER PRO",
    description: "Your perfect companion for adventure.",
    buttonText: "Discover More",
  },
  {
    title: "OCEAN MASTER",
    description: "Built to withstand the harshest ocean conditions.",
    buttonText: "Explore Now",
  },
  {
    title: "TIMELESS ELEGANCE",
    description: "Luxury meets timeless design.",
    buttonText: "Buy Now",
  },
  {
    title: "URBAN STYLER",
    description: "For those who prefer elegance in the city.",
    buttonText: "Get Yours Today",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slideshow with framer-motion */}
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          custom={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
        />
      </AnimatePresence>

      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-left px-10 lg:px-20 font-mono"> {/* Added font-mono here */}
        <h1 className="text-white text-3xl lg:text-6xl font-semibold mb-4 uppercase tracking-wider">
          {content[currentIndex].title}
        </h1>
        <p className="text-white text-lg lg:text-xl mb-8">
          {content[currentIndex].description}
        </p>
        <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 lg:px-8 rounded-lg shadow-md hover:bg-red-600 hover:text-black transition-all">
          {content[currentIndex].buttonText}
        </button>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex justify-between items-center px-4">
        <button
          className="text-white text-3xl p-2 hover:bg-black hover:bg-opacity-50 rounded-full"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="text-white text-3xl p-2 hover:bg-black hover:bg-opacity-50 rounded-full"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Dots for manual image control */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
