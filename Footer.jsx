import paypal from '../assets/paypal-icon.png'; // Import PayPal icon image

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-0">
        
        {/* Watches Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">WATCHES</h3>
          <ul>
            <li><a href="#" className="hover:underline">Collections</a></li>
            <li><a href="#" className="hover:underline">All Headsets</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
          </ul>
        </div>
        
        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
          <ul>
            <li><a href="#" className="hover:underline">Reviews</a></li>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Retailers</a></li>
            <li><a href="#" className="hover:underline">Media</a></li>
          </ul>
        </div>
        
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SUPPORT</h3>
          <ul>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Refunds</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <p className="mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-1 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
              SUBSCRIBE
            </button>
          </form>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="container mx-auto mt-10 px-6 md:px-0">
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; BEATS</p>
          <p className="text-sm">SITE BY HELLO POMELO.</p>
          <img src={paypal} alt="Paypal" className="h-6 mt-4 md:mt-0" /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
