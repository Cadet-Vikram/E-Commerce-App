import React from "react";

const NewArrival = () => {
  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-8 rounded bg-red-500 inline-block"></span>
              <h3 className="text-red-500 font-semibold text-md">Featured</h3>
            </div>
            <h1 className="text-3xl font-semibold text-black mt-3">New Arrival</h1>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PlayStation */}
          <div className="relative rounded-lg overflow-hidden h-[600px] bg-black">
            <img
              src="../../assets/play.png"
              alt="PlayStation 5"
              className="w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
              <h3 className="text-2xl font-bold">PlayStation 5</h3>
              <p className="text-gray-200 mt-2 w-[250px]">Black and White version of the PS5 coming out on sale.</p>
              <button className="mt-4 text-white border-b border-white hover:text-red-500 hover:border-red-500 w-max">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-6">
            {/* Women's Collection */}
            <div className="relative rounded-lg overflow-hidden h-[300px] bg-black">
              <img
                src="../../assets/women.png"
                alt="Women's Collection"
                className="w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10 space-y-6">
                <h3 className="text-2xl font-bold">Women's Collections</h3>
                <p className="text-md text-gray-300 mt-1 w-[250px]">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="mt-3 text-white border-b border-white hover:text-red-500 hover:border-red-500 w-max text-sm">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Speakers */}
              <div className="relative rounded-lg overflow-hidden h-[275px] bg-black">
                <img
                  src="../../assets/alexa.png"
                  alt="Speakers"
                  className="w-[350px] h-[250px] object-contain z-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10 space-y-2">
                  <h3 className="text-xl font-bold">Speakers</h3>
                  <p className="text-md text-gray-200 mt-1">Amazon wireless speakers</p>
                  <button className="mt-3 text-white border-b border-white hover:text-red-500 hover:border-red-500 w-max text-sm">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative rounded-lg overflow-hidden h-[275px] bg-black">
                <img
                  src="../../assets/gucci.png"
                  alt="Perfume"
                  className="w-[350px] h-[250px] object-contain z-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10 space-y-2">
                  <h3 className="text-xl font-bold">Perfume</h3>
                  <p className="text-md text-gray-200 mt-1">GUCCI INTENSE OUD EDP</p>
                  <button className="mt-3 text-white border-b border-white hover:text-red-500 hover:border-red-500 w-max text-sm">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
