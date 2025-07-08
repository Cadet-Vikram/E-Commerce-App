
import React from 'react';
import { Send } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Exclusive */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-2">Exclusive</h3>
            <p className="text-gray-400">Subscribe</p>
            <p className="text-gray-400">Get 10% off your first order</p>
<div className="relative w-full max-w-md">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 pr-10 py-[10px] bg-black text-white border border-white rounded-sm focus:outline-none"
  />
  <button className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-red-700">
    <Send className="w-5 h-5" />
  </button>
</div>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-gray-400">exclusive@gmail.com</p>
            <p className="text-gray-400">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-2">Account</h3>
            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((item, idx) => (
              <a key={idx} href="#" className="text-gray-400 hover:text-white block">
                {item}
              </a>
            ))}
          </div>

          {/* Quick Link */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-2">Quick Link</h3>
            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item, idx) => (
              <a key={idx} href="#" className="text-gray-400 hover:text-white block">
                {item}
              </a>
            ))}
          </div>

          {/* Download App */}

<div className="space-y-4">
  <h3 className="text-xl font-semibold mb-2">Download App</h3>
  <p className="text-gray-400 text-sm">Save $3 with App New User Only</p>

  {/* QR + Badges */}
  <div className="flex items-center gap-4">
    {/* QR Code Image Placeholder */}
    <div className="w-20 h-20 rounded overflow-hidden">
      <a href="#"><img src="../../assets/qr.png" alt="QR Code" className="w-full h-full object-cover" /></a>
    </div>

    {/* App Badges */}
    <div className="flex flex-col gap-2">
      <a href="#"><img src="../../assets/store.png" alt="Google Play" className="h-8" /></a>
      <a href="#"><img src="../../assets/AppStore.png" alt="App Store" className="h-8" /></a>
    </div>
  </div>

  {/* Social Icons */}
  <div className="flex space-x-4 pt-2 text-gray-400">
    <a href="#" className="hover:text-white"><Facebook size={20} /></a>
    <a href="#" className="hover:text-white"><Twitter size={20} /></a>
    <a href="#" className="hover:text-white"><Instagram size={20} /></a>
    <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
  </div>
</div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-6 text-center text-gray-700 text-sm">
          <p>&copy; Copyright Rimel 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;