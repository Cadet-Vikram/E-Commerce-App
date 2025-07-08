// MusicBanner.jsx
import React from 'react';

const MusicBanner = () => {
  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="rounded-lg relative overflow-hidden text-white"
          style={{
            background: 'radial-gradient(circle at center, rgb(14, 12, 12), rgb(0, 0, 0))',
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[300px] lg:min-h-[400px] p-8 lg:p-12">
            
            {/* Left: Text Content */}
            <div className="flex-1 z-10 flex flex-col justify-center h-full">
              <span className="text-red-500 text-sm font-semibold mb-4 block">
                Categories
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Enhance Your<br />Music Experience
              </h2>

              <div className="flex gap-4 mb-8">
                {[
                  { label: 'Hours', value: '23' },
                  { label: 'Days', value: '05' },
                  { label: 'Minutes', value: '59' },
                  { label: 'Seconds', value: '35' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center"
                  >
                    <span className="text-sm font-bold">{item.value}</span>
                    <span className="text-xs">{item.label}</span>
                  </div>
                ))}
              </div>

              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-sm font-semibold w-fit">
                Buy Now!
              </button>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center h-full relative">
              <img
                src="../../assets/jbl.png"
                alt="JBL Speaker"
                className="object-contain h-full relative z-10 max-h-64 lg:max-h-80"
              />
              <img
                src="../../assets/elipse.png"
                alt="Ellipse"
                className="absolute left-1/2 -translate-x-1/2 z-0"
                style={{ pointerEvents: 'none', width: '110%', minWidth: '440px', minHeight:'500px' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicBanner;
