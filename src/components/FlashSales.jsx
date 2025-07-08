import React from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FlashSaleCard from './FlashSaleCard';

const FlashSales = ({ products, countdown }) => {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false, 
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="mb-12 mt-28">
      {/* ✅ CONTAINER:  */}
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ HEADER ROW */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          {/* Left: Title + Timer */}
          <div className="flex flex-col gap-2">
  {/* Top row: Icon + Today's */}
  <div className="flex items-center gap-2">
    <span className="w-3 h-8 rounded bg-red-500 inline-block"></span>
    <h3 className="text-red-500 font-semibold text-md">Today's</h3>
  </div>

  {/* Bottom row: Flash Sales + Timer */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 mt-3">
    <h1 className="text-3xl font-semibold text-black">Flash Sales</h1>

    {/* Countdown Timer */}
    <div className="flex items-center gap-4 mb-2 ml-8 lg:mt-0">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
        const value = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds][i];
        return (
          <React.Fragment key={label}>
            {i > 0 && <span className="text-red-500 text-xl font-bold">:</span>}
            <div className="text-center">
              <div className="text-xs text-black">{label}</div>
              <div className="text-2xl font-bold text-black">
                {value.toString().padStart(2, '0')}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  </div>
</div>



          {/* Right:  */}
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

        {/*  SLIDER CONTENT */}
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <FlashSaleCard key={product.id} product={product} />
          ))}
        </Slider>

        <div className="text-center mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-sm font-semibold">
            View All Products
          </button>
        </div>
      </div>
      <hr className='mt-[60px]'></hr>
    
    </section>
  );
};

export default FlashSales;
