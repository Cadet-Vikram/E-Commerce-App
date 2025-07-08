import React from 'react';
import { ChevronRight, Heart, Eye } from 'lucide-react';
import StarRating from './StarRating';

const BestSelling = ({ bestSellingProducts }) => {
  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                  <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-8 rounded bg-red-500 inline-block"></span>
            <h3 className="text-red-500 font-semibold text-md">This Month</h3>
          </div>
        
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mt-3">
            <h1 className="text-3xl font-semibold text-black">Best Selling Products</h1>
          </div>
        </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-sm font-semibold flex items-center gap-2 mt-10">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-sm  hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <img src={product.image} className='w-[100px]'></img>

                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 rounded-b-sm hover:bg-red-500 transition-all opacity-0 group-hover:opacity-100 z-20">
            Add To Cart
          </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-2 truncate">{product.name}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-red-500 font-bold text-base">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <StarRating rating={product.rating} />
                  <span className="text-gray-500 text-xs">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
