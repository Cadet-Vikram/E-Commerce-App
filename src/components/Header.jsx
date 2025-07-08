import React, { useState, useRef, useEffect } from 'react';
import AccountDropdown from './AccountDropdown';
import { Heart, ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
{/* Top Banner */}
<div className="bg-black text-white px-4 py-3">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between relative">
    
    {/* Sale Text */}
    <div className="w-full text-center mb-2 sm:mb-0">
      <span className="text-xs sm:text-sm leading-snug">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline font-bold">ShopNow</span>
      </span>
    </div>

    {/* Language Selector */}
    <div className="w-full sm:w-auto text-center sm:text-right">
      <select className="bg-transparent border-none text-white text-xs sm:text-sm outline-none">
        <option>English</option>
      </select>
    </div>
  </div>
</div>





      {/* Header */}
      <header className="bg-white shadow-sm border-b mt-4">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">Exclusive</div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation links  */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 border-b-2 border-gray-800 pb-1 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1">Contact</a>
            <a href="#" className="text-gray-700 hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-500 hover:border-b-2 hover:border-gray-500 pb-1">Sign Up</a>
          </nav>

          {/* Icons and Search */}
          <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="pl-4 pr-10 py-2 bg-gray-100 w-64 text-gray-600 placeholder-gray-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-900" />
                        </div>

                        {/* Wishlist */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-6 h-6" />
            </button>

            {/* Cart */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Account Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(prev => !prev)}
                className={`flex items-center gap-2 hover:bg-gray-100 text-sm font-medium rounded-full transition-colors
                  ${showDropdown ? 'bg-red-500 text-white' : 'text-gray-900'} p-2`}
              >
                <User className="w-5 h-5" />
              </button>
              {showDropdown && <AccountDropdown />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4">
            {/* Mobile nav links */}
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-red-500">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-500">Contact</a>
              <a href="#" className="text-gray-700 hover:text-red-500">About</a>
              <a href="#" className="text-gray-700 hover:text-red-500">Sign Up</a>
            </nav>

            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6 text-gray-700" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(prev => !prev)}
                  className={`flex items-center gap-2 text-sm font-medium rounded-full transition-colors
                    ${showDropdown ? 'bg-red-500 text-white' : 'text-gray-800'} p-2`}
                >
                  <User className="w-5 h-5" />
                </button>
                {showDropdown && <AccountDropdown />}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
