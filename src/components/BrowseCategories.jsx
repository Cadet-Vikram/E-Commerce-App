import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const BrowseCategories = ({ categoryItems }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                  <div className="flex flex-col gap-2">

          <div className="flex items-center gap-2">
            <span className="w-3 h-8 rounded bg-red-500 inline-block"></span>
            <h3 className="text-red-500 font-semibold text-md">Categories</h3>
          </div>
        

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mt-3">
            <h1 className="text-3xl font-semibold text-black">Browse By Category</h1>
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
          {categoryItems.map((category, index) => (
            <div key={index} className="px-2">
              <div className="border border-gray-400 rounded-sm p-6 text-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer group">
                <div className="text-4xl mb-4 justify-items-center group-hover:text-white transition-colors">{category.icon}</div>
                <span>{category.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <hr className='mt-[80px]'></hr>
    </section>
  );
};

export default BrowseCategories;
