// HeroSection.jsx
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';


import phone1 from '../../assets/phon.png';
import phone2 from '../../assets/phon.png';
import phone3 from '../../assets/phon.png';
import phone4 from '../../assets/phon.png';
import phone5 from '../../assets/phon.png';

const slides = [
  { image: phone1 },
  { image: phone2 },
  { image: phone3 },
  { image: phone4 },
  { image: phone5 },
];

const HeroSlider = ({ currentSlide, setCurrentSlide }) => {
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [setCurrentSlide, totalSlides]);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full mt-10 bg-black h-[360px] flex items-center justify-between px-10 overflow-hidden">
      
      {/* Overlay Text + Button */}
      <div className="text-white max-w-md space-y-3 z-10">
        {/* Logo and Title side-by-side */}
        <div className="flex items-center gap-3">
          <img src="../assets/log.png" alt="Apple Logo" className="w-12 h-12 object-contain" />
          <h2 className="text-md">iPhone 14 Series</h2>
        </div>
        
        <p className="text-white font-semibold text-6xl">
          Up to 10% off voucher
        </p>

        {/* Shop Now + Arrow in the same line */}
        <a
  href="#"
  className="inline-flex items-center gap-2 text-white hover:text-gray-500 transition px-2 py-1 w-fit group"
>
  <span className="border-b border-gray-400 hover:border-gray-500">Shop Now</span>
  <ArrowRight size={20} className="group-hover:text-gray-500" />
</a>

      </div>

      {/* Image aligned to the right */}
      <div className="h-full flex items-center justify-center z-0">
        <img
          src={slide.image}
          alt={`Slide ${currentSlide + 1}`}
          className="h-full object-contain max-w-[460px]"
        />
      </div>

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
  {slides.map((_, index) => (
    <button
      key={index}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        index === currentSlide
          ? 'bg-red-500 border-2 border-white'
          : 'bg-white opacity-50'
      }`}
      onClick={() => setCurrentSlide(index)}
    />
  ))}
</div>
    </section>
  );
};

export default HeroSlider;
