// Sidebar.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Sidebar = ({ categories }) => {
  return (
    <aside className="w-full lg:w-64 lg:border-r lg:border-gray-300 pr-6 py-10 h-[400px]">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="pb-1.5 pt-2">
            <a href="#" className="flex items-center justify-between text-[18px] text-black hover:text-red-500">
              <span>{category.name}</span>
              {category.hasSubmenu && <ChevronRight className="w-5 h-5" />}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
