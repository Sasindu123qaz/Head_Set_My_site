import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';  // Make sure the logo doesn't have a background

const Navbar = () => {
  return (
    <nav className="bg-white py-6 shadow-md fixed top-0 w-full z-50"> {/* Fixed navbar with white background */}
      <div className="container mx-auto flex justify-between items-center relative">

        {/* Left - Navigation Links */}
        <ul className="flex space-x-12 text-black text-lg font-mono font-semibold">
          <li className="relative group cursor-pointer transition-colors duration-300">
            <span className="hover:text-gray-700 transition-colors duration-300">Shop</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full"></span> {/* Slow red underline */}
          </li>
          <li className="relative group cursor-pointer transition-colors duration-300">
            <span className="hover:text-gray-700 transition-colors duration-300">Accessories</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer transition-colors duration-300">
            <span className="hover:text-gray-700 transition-colors duration-300">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer transition-colors duration-300">
            <span className="hover:text-gray-700 transition-colors duration-300">Retailers</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer transition-colors duration-300">
            <span className="hover:text-gray-700 transition-colors duration-300">Media</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img 
            src={logo} 
            alt="Zelos Logo" 
            className="h-16 w-auto bg-transparent opacity-50 hover:opacity-100 transition-opacity duration-300" 
          /> {/* Ensure the logo has no background */}
        </div>

        {/* Right - Icons */}
        <div className="flex space-x-8 text-black text-2xl font-mono">
          <FontAwesomeIcon 
            icon={faUser} 
            className="hover:text-red-500 cursor-pointer transition-colors duration-300" 
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="hover:text-red-500 cursor-pointer transition-colors duration-300" 
          />
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            className="hover:text-red-500 cursor-pointer transition-colors duration-300" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
