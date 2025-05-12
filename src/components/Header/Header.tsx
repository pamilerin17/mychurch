import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white w-full shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            {'{'}Finsweet{'}'}
          </div>

          {/* Centered Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
             <Link to="/" className=" text-sm font-medium">HOME</Link>
            <Link to="About" className=" text-sm font-medium">ABOUT US</Link>
            <Link to="Sermon" className=" text-sm font-medium">SERMON</Link>
            <Link to="Blog" className=" text-sm font-medium">BLOG</Link>
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex">
             <Link to='/Contact' className="bg-orange-200 text-black px-5 py-2 rounded-md  w-max">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pt-4 pb-6">
            <Link to="/" className=" text-sm font-medium">HOME</Link>
            <Link to="About" className=" text-sm font-medium">ABOUT US</Link>
            <Link to="Sermon" className=" text-sm font-medium">SERMON</Link>
            <Link to="Blog" className=" text-sm font-medium">BLOG</Link>
            <Link to='/Contact' className="bg-orange-200 text-black px-5 py-2 rounded-md  w-max">
              CONTACT US
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
