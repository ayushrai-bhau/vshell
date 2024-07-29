import React from 'react';
import { Link } from 'react-router-dom';
import Shop from "../assets/shop.png";
import Explore from "../assets/Explore.png";
import Cart from "../assets/Cart.png";
import Favourite from "../assets/favourite.png";
import Account from "../assets/Account.png";

const Footer = () => {
    return (
      <footer className="bg-white shadow fixed bottom-0 left-0 w-full">
        <div className="container mx-auto px-6 py-4 flex justify-between">
          {/* Navigation links for different sections */}
          <Link to="/shop" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <img src={Shop} alt="Shop" className="w-6 h-6 mb-1" />
            <span className="text-[15px] font-[600] text-[#181725]">Shop</span>
          </Link>
          <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <img src={Explore} alt="Explore" className="w-7 h-6 mb-1" />
            <span className="text-[15px] font-[600] text-[#181725]">Explore</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <img src={Cart} alt="Cart" className="w-6 h-6 mb-1" />
            <span className="text-[15px] font-[600] text-[#181725]">Cart</span>
          </Link>
          <Link to="/favourite" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <img src={Favourite} alt="Favourite" className="w-6 h-6 mb-1" />
            <span className="text-[15px] font-[600] text-[#181725]">Favourite</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <img src={Account} alt="Account" className="w-6 h-6 mb-1" />
            <span className="text-[15px] font-[600] text-[#181725]">Account</span>
          </Link>
        </div>
      </footer>
    );
  };

export default Footer;
