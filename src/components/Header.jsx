import React from 'react';
import { FaSearch } from "react-icons/fa";
import Ham from "../assets/Ham.png";

// Header component containing the logo and search bar
const Header = () => {
    return (
      <header className="bg-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">VSell</h1>
          <img src={Ham} alt="Menu" className="w-5 h-5" />
        </div>
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-center">Find Products</h1>
          <div className="mt-4 relative">
            <input
              type="text"
              className="w-full h-12 px-4 py-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2F3F2]"
              placeholder="Search Store"
              aria-label="Search Store"
            />
            <FaSearch className="absolute left-3 top-4 text-gray-500" />
          </div>
        </div>
      </header>
    );
  };
export default Header;
