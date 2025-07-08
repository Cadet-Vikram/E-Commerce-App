// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import FlashSales from './components/FlashSales';
import BrowseCategories from './components/BrowseCategories';
import BestSelling from './components/BestSelling';
import MusicBanner from './components/MusicBanner';
import ExploreProducts from './components/ExploreProducts';
import NewArrival from './components/NewArrival';
import Services from './components/Services';
import Footer from './components/Footer';
import northCoat from '../assets/coat.png';
import gucciBagImg from '../assets/bag.png';
import audio from '../assets/audio.png';
import bookshelfImg from '../assets/shelf.png';
import raincoat from '../assets/raincoat.png';
import boot from '../assets/boots.png';
import curo from '../assets/curo.png';
import laptop from '../assets/laptop.png';
import joystick from '../assets/joystick.png';
import dog from '../assets/dog.png';
import car from '../assets/car.png';
import camera from '../assets/camera.png';
import chair from '../assets/chair.png';
import keyboard from '../assets/keyboard.png';
import monitor from '../assets/monitor.png';
import gamer from '../assets/gamer.png';
import head from '../assets/head.png';
import smart from '../assets/smart.png';
import ScrollToTopButton from './components/ScrollToTopButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2, Tv, Volleyball } from 'lucide-react';


// Data arrays for demo
const categories = [
  { name: "Woman's Fashion", hasSubmenu: true },
  { name: "Men's Fashion", hasSubmenu: true },
  { name: "Electronics", hasSubmenu: false },
  { name: "Home & Lifestyle", hasSubmenu: false },
  { name: "Medicine", hasSubmenu: false },
  { name: "Sports & Outdoor", hasSubmenu: false },
  { name: "Baby's & Toys", hasSubmenu: false },
  { name: "Groceries & Pets", hasSubmenu: false },
  { name: "Health & Beauty", hasSubmenu: false }
];

const products = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, discount: 40, rating: 5, reviews: 88, image: gamer },
  { id: 2, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75, image: keyboard },
  { id: 3, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, discount: 30, rating: 5, reviews: 99, image: monitor },
  { id: 4, name: "S-Series Comfort Chair", price: 375, originalPrice: 400, discount: 25, rating: 4, reviews: 99, image: chair },
  { id: 5, name: "Wireless Headphones", price: 299, originalPrice: 399, discount: 25, rating: 4, reviews: 156, image: head },
  { id: 6, name: "Smart Watch Pro", price: 450, originalPrice: 550, discount: 18, rating: 5, reviews: 89, image: smart },
  { id: 7, name: "The north coat", price: 260, originalPrice: 360, rating: 5, reviews: 65, image: northCoat},
  { id: 8, name: "Gucci duffle bag", price: 960, originalPrice: 1160, rating: 4, reviews: 65, image: gucciBagImg },
  { id: 9, name: "RGB liquid CPU Cooler", price: 160, originalPrice: 170, rating: 4, reviews: 65, image: audio },
  { id: 10, name: "Small BookShelf", price: 360, originalPrice: null, rating: 5, reviews: 65, image: bookshelfImg },
  { id: 11, name: "Breed Dry Dog Food", price: 100, originalPrice: null, rating: 3, reviews: 35, image: dog, colors: ["red", "blue"] },
  { id: 12, name: "CANON EOS DSLR Camera", price: 360, originalPrice: null, rating: 4, reviews: 95, image: camera, colors: ["black"] },
  { id: 13, name: "ASUS FHD Gaming Laptop", price: 700, originalPrice: null, rating: 5, reviews: 325, image: laptop, colors: ["silver", "black"] },
  { id: 14, name: "Curology Product Set", price: 500, originalPrice: null, rating: 4, reviews: 145, image: curo, colors: ["white", "pink"] },
  { id: 15, name: "Kids Electric Car", price: 960, originalPrice: null, rating: 5, reviews: 65, image: car, colors: ["red", "blue"], isNew: true },
  { id: 16, name: "Jr. Zoom Soccer Cleats", price: 1160, originalPrice: null, rating: 5, reviews: 35, image: boot, colors: ["yellow", "red"] },
  { id: 17, name: "GP11 Shooter USB Gamepad", price: 660, originalPrice: null, rating: 4, reviews: 55, image: joystick, colors: ["black", "red"], isNew: true },
  { id: 18, name: "Quilted Satin Jacket", price: 660, originalPrice: null, rating: 4, reviews: 55, image: raincoat, colors: ["green", "black"] },
];

const categoryItems = [
{ name: 'Phones', icon: <Smartphone className="w-10 h-10" strokeWidth={1} /> },
  { name: 'Computers', icon: <Monitor className="w-10 h-10" strokeWidth={1} /> },
  { name: 'SmartWatch', icon: <Watch className="w-10 h-10" strokeWidth={1} /> },
  { name: 'Camera', icon: <Camera className="w-10 h-10" strokeWidth={1} />  },
  { name: 'HeadPhones', icon: <Headphones className="w-10 h-10" strokeWidth={1}/> },
  { name: 'Gaming', icon: <Gamepad2 className="w-10 h-10" strokeWidth={1}/> },
  { name: 'TV & Audio', icon: <Tv className="w-10 h-10" strokeWidth={1}/> },
  { name: 'Sports', icon: <Volleyball className="w-10 h-10" strokeWidth={1}/> }
];

const bestSellingProducts = [
  { id: 1, name: "The north coat", price: 260, originalPrice: 360, rating: 5, reviews: 65, image: northCoat},
  { id: 2, name: "Gucci duffle bag", price: 960, originalPrice: 1160, rating: 4, reviews: 65, image: gucciBagImg },
  { id: 3, name: "RGB liquid CPU Cooler", price: 160, originalPrice: 170, rating: 4, reviews: 65, image: audio },
  { id: 4, name: "Small BookShelf", price: 360, originalPrice: null, rating: 5, reviews: 65, image: bookshelfImg },
  { id: 5, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, discount: 40, rating: 5, reviews: 88, image: gamer },
  { id: 6, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75, image: keyboard },
  { id: 7, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, discount: 30, rating: 5, reviews: 99, image: monitor },
  { id: 8, name: "S-Series Comfort Chair", price: 375, originalPrice: 400, discount: 25, rating: 4, reviews: 99, image: chair },
  { id: 9, name: "Wireless Headphones", price: 299, originalPrice: 399, discount: 25, rating: 4, reviews: 156, image: head },
  { id: 10, name: "Smart Watch Pro", price: 450, originalPrice: 550, discount: 18, rating: 5, reviews: 89, image: smart },
  { id: 11, name: "Breed Dry Dog Food", price: 100, originalPrice: null, rating: 3, reviews: 35, image: dog, colors: ["red", "blue"] },
  { id: 12, name: "CANON EOS DSLR Camera", price: 360, originalPrice: null, rating: 4, reviews: 95, image: camera, colors: ["black"] },
  { id: 13, name: "ASUS FHD Gaming Laptop", price: 700, originalPrice: null, rating: 5, reviews: 325, image: laptop, colors: ["silver", "black"] },
  { id: 14, name: "Curology Product Set", price: 500, originalPrice: null, rating: 4, reviews: 145, image: curo, colors: ["white", "pink"] },
  { id: 15, name: "Kids Electric Car", price: 960, originalPrice: null, rating: 5, reviews: 65, image: car, colors: ["red", "blue"], isNew: true },
  { id: 16, name: "Jr. Zoom Soccer Cleats", price: 1160, originalPrice: null, rating: 5, reviews: 35, image: boot, colors: ["yellow", "red"] },
  { id: 17, name: "GP11 Shooter USB Gamepad", price: 660, originalPrice: null, rating: 4, reviews: 55, image: joystick, colors: ["black", "red"], isNew: true },
  { id: 18, name: "Quilted Satin Jacket", price: 660, originalPrice: null, rating: 4, reviews: 55, image: raincoat, colors: ["green", "black"] },
];

const exploreProducts = [
  { id: 1, name: "Breed Dry Dog Food", price: 100, originalPrice: null, rating: 3, reviews: 35, image: dog, colors: ["red", "blue"] },
  { id: 2, name: "CANON EOS DSLR Camera", price: 360, originalPrice: null, rating: 4, reviews: 95, image: camera, colors: ["black"] },
  { id: 3, name: "ASUS FHD Gaming Laptop", price: 700, originalPrice: null, rating: 5, reviews: 325, image: laptop, colors: ["silver", "black"] },
  { id: 4, name: "Curology Product Set", price: 500, originalPrice: null, rating: 4, reviews: 145, image: curo, colors: ["white", "pink"] },
  { id: 5, name: "Kids Electric Car", price: 960, originalPrice: null, rating: 5, reviews: 65, image: car, colors: ["red", "blue"], isNew: true },
  { id: 6, name: "Jr. Zoom Soccer Cleats", price: 1160, originalPrice: null, rating: 5, reviews: 35, image: boot, colors: ["yellow", "red"] },
  { id: 7, name: "GP11 Shooter USB Gamepad", price: 660, originalPrice: null, rating: 4, reviews: 55, image: joystick, colors: ["black", "red"], isNew: true },
  { id: 8, name: "Quilted Satin Jacket", price: 660, originalPrice: null, rating: 4, reviews: 55, image: raincoat, colors: ["green", "black"] },
  { id: 9, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, discount: 40, rating: 5, reviews: 88, image: gamer },
  { id: 10, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75, image: keyboard },
  { id: 11, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, discount: 30, rating: 5, reviews: 99, image: monitor },
  { id: 12, name: "S-Series Comfort Chair", price: 375, originalPrice: 400, discount: 25, rating: 4, reviews: 99, image: chair },
  { id: 13, name: "Wireless Headphones", price: 299, originalPrice: 399, discount: 25, rating: 4, reviews: 156, image: head },
  { id: 14, name: "Smart Watch Pro", price: 450, originalPrice: 550, discount: 18, rating: 5, reviews: 89, image: smart },
  { id: 15, name: "The north coat", price: 260, originalPrice: 360, rating: 5, reviews: 65, image: northCoat},
  { id: 16, name: "Gucci duffle bag", price: 960, originalPrice: 1160, rating: 4, reviews: 65, image: gucciBagImg },
];


const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [flashSaleSlide, setFlashSaleSlide] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 3, hours: 23, minutes: 19, seconds: 56
  });

 
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (current, setter, max) => setter(current >= max - 1 ? 0 : current + 1);
  const prevSlide = (current, setter, max) => setter(current <= 0 ? max - 1 : current - 1);
  const getVisibleItems = (items, slide, perPage) => items.slice(slide * perPage, slide * perPage + perPage);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Wrap Sidebar + HeroSection  */}
      <section className="max-w-7xl mx-auto px-4 pt-0 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Sidebar categories={categories} />
          </aside>
          <div className="lg:col-span-3">
            <HeroSection currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
          </div>
        </div>
      </section>

     
      <FlashSales
        products={products}
        flashSaleSlide={flashSaleSlide}
        setFlashSaleSlide={setFlashSaleSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        getVisibleItems={getVisibleItems}
        countdown={countdown}
      />
      <BrowseCategories
        categoryItems={categoryItems}
      />
      <BestSelling
        bestSellingProducts={bestSellingProducts}
      />
      <MusicBanner />
      <ExploreProducts
        exploreProducts={exploreProducts}
      />
      <NewArrival />
      <Services />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;