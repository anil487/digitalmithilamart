import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-aqua-500">
      <div className="max-w-6xl m-auto px-4 sm:px-1 lg:px-5">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-yellow-500">
                 Digital Mithila<span className="text-blue-500"> Mart</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4 px-3">
              <Link to="/home" className="font-bold text-white-300">
                Home
              </Link>
              <Link to="/products" className="font-bold text-white-300 ">
                Products
              </Link>

              <Link to="/contact" className="font-bold text-white-30">
                Contact
              </Link>
              <Link to="/about" className="font-bold text-white-30">
               AboutUs
              </Link>
            </div>
            <div className="ml-6 flex items-center ms-7">
              <Link to="/login" className="font-bold text-white-300">
                <i className="fas fa-user"></i> Login
              </Link>
              <Link to="/register" className="ml-4 font-bold text-white-300 ">
                <i className="fas fa-user-plus"></i> Register
              </Link>
              <Link to="/cart" className="ml-4 font-bold text-white-300">
                <i className="bi bi-cart4"></i> Cart
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button className="text-gray-20 focus:outline-none"></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
