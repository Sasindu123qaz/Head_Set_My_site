import  { useState, useEffect } from 'react';
import Homev from '../assets/Homev.mp4'; 
import deliveryIcon from '../assets/delivery-icon.png'
import returnsIcon from '../assets/return-icon.png'; 
import paymentIcon from '../assets/payment-icon.png'; 
import warrantyIcon from '../assets/warranty-icon.png'; 

// Review data
const reviews = [
  {
    quote: "Zelos takes a big step up in quality and refinement with its latest offering",
    author: "SPEARFISH",
  },
  {
    quote: "A remarkable watch with extraordinary craftsmanship and elegance",
    author: "WATCHFINDER & Co",
  },
  {
    quote: "An unbeatable combination of style and performance",
    author: "WORN & WOUND",
  },
  {
    quote: "Perfect for enthusiasts and collectors alike",
    author: "HODINKEE",
  },
  {
    quote: "Innovative designs with a touch of uniqueness",
    author: "FRATELLO",
  },
];

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleReviewClick = (index) => {
    setCurrentReview(index);
  };

  return (
    <section className="relative bg-black text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={Homev} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <p className="text-lg italic mb-2">
          &ldquo;{reviews[currentReview].quote}&rdquo;
        </p>
        <p className="text-sm font-semibold">
          {reviews[currentReview].author}
        </p>

        {/* Review Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleReviewClick(index)}
              className={`w-3 h-3 rounded-full ${index === currentReview ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>

      {/* Feature Bar */}
      <div className="relative z-10 flex justify-around items-center bg-white text-gray-800 py-6 mt-8">
        <div className="flex flex-col items-center">
          <img src={deliveryIcon} alt="Free Worldwide Delivery" className="h-6 mb-2" />
          <p className="text-sm">Free Worldwide Delivery</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={returnsIcon} alt="7 Day Returns" className="h-6 mb-2" />
          <p className="text-sm">7 Day Returns</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={paymentIcon} alt="Secured Payments" className="h-6 mb-2" />
          <p className="text-sm">Secured Payments</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={warrantyIcon} alt="1 Year Warranty" className="h-6 mb-2" />
          <p className="text-sm">1 Year Warranty</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
