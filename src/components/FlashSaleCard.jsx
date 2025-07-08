import React from 'react';
import { Eye, Heart } from 'lucide-react';
import StarRating from './StarRating';

const FlashSaleCard = ({ product }) => {
  return (
    <div className="p-2">
      <div className="bg-white hover:shadow-lg transition-shadow overflow-hidden group">
        {/* Image Section */}
        <div className="relative bg-gray-100 h-56 flex items-center justify-center overflow-hidden group-hover:rounded-b-none transition-all">
          {/* Discount Badge */}
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs">
            -{product.discount}%
          </span>

          {/* Icons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Image */}
          <img
  src={product.image || 'https://picsum.photos/200'}
  alt={product.name}
  className="h-32 object-contain z-0 transition-all duration-300 group-hover:rounded-b-none"
/>


          {/* Add to Cart Button on Hover */}
          <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 rounded-b-md hover:bg-red-500 transition-all opacity-0 group-hover:opacity-100 z-20">
            Add To Cart
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 text-sm mb-2 truncate">{product.name}</h3>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-red-500 font-bold text-base">${product.price}</span>
            <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
          </div>

          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-gray-500 text-xs">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
