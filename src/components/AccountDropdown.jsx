import React from 'react';
import {
  User,
  Package,
  XCircle,
  Star,
  LogOut
} from 'lucide-react';

const menuItems = [
  { label: 'Manage My Account', icon: <User className="w-5 h-5" /> },
  { label: 'My Order', icon: <Package className="w-5 h-5" /> },
  { label: 'My Cancellations', icon: <XCircle className="w-5 h-5" /> },
  { label: 'My Reviews', icon: <Star className="w-5 h-5" /> },
  { label: 'Logout', icon: <LogOut className="w-5 h-5" /> }
];

const AccountDropdown = () => {
  return (
    <div className="absolute top-full right-0 mt-2 w-56 rounded-md bg-gradient-to-br from-gray-700/20 to-black/40 backdrop-blur-3xl shadow-lg text-white overflow-hidden z-50">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`flex items-center gap-3 px-5 py-3 w-full text-left hover:bg-white/10 transition`}
        >
          {item.icon}
          <span className="text-sm ">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AccountDropdown;
