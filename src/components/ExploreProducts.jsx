import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowLeft,ArrowRight, Heart, Eye } from 'lucide-react';
import StarRating from './StarRating';

const ExploreProducts = ({ exploreProducts }) => {
  const sliderRef = useRef();


  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const productChunks = chunkArray(exploreProducts, 8);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                  <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-8 rounded bg-red-500 inline-block"></span>
            <h3 className="text-red-500 font-semibold text-md">Our Products</h3>
          </div>
        

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mt-3">
            <h1 className="text-3xl font-semibold text-black">Explore Our Products</h1>
          </div>
        </div>
        
        
        
                  <div className="flex items-center space-x-2 mt-12">
                    <button
                      onClick={() => sliderRef.current?.slickPrev()}
                      className="p-2 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => sliderRef.current?.slickNext()}
                      className="p-2 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>


        <Slider ref={sliderRef} {...settings}>
          {productChunks.map((chunk, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {chunk.map((product, idx) => (

                  <div
                    key={product.id}
                    className="bg-white overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                  
                    <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm">NEW</span>
                      )}
                      <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                      <img src={product.image} className='w-[100px]'></img>


                      <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 rounded-b-sm hover:bg-red-500 transition-all opacity-0 group-hover:opacity-100 z-20">
            Add To Cart
          </button>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 text-sm truncate">{product.name}</h3>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-red-500 font-bold text-lg">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={product.rating} />
                        <span className="text-gray-500 text-sm">({product.reviews})</span>
                      </div>
                      
{idx >= 4 && (
  <div className="flex space-x-2 mt-2">
    {product.colors?.map((color, i) => (
      <span
        key={i}
        className={`w-4 h-4 rounded-full border-2 ${
          color === 'red' ? 'bg-red-500' :
          color === 'green' ? 'bg-green-500' :
          color === 'black' ? 'bg-black' :
          color === 'pink' ? 'bg-pink-500' :
          color === 'yellow' ? 'bg-yellow-400' :
          color === 'gray' ? 'bg-gray-500' :
          'bg-white'
        }`}
      ></span>
    ))}
  </div>
)}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>


        <div className="text-center mt-8">
          <button className="bg-red-600 hover:bg-red-800 text-white px-8 py-3 rounded-sm font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
