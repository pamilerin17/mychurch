// import React from 'react';
import B1 from '../../assets/b1.png'
import B2 from '../../assets/b2.png'
import B3 from '../../assets/b3.png'
import B4 from '../../assets/b4.png'

export default function Benefit() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-1">THE BENEFITS OF</h1>
        <h2 className="text-2xl font-bold">JOINING OUR CHURCH</h2>
      </div>

      {/* Benefits Section - Alternating layout */}
      <div className="space-y-20">
        {/* Benefit 1 - Fulfillment */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-lg font-bold uppercase mb-4">FIND FULFILLMENT AND JOY</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src={B1} 
              alt="Person looking at sunset" 
              className="w-full h-auto object-cover rounded-lg" style={{ height: '320px' }}
            />
          </div>
        </div>

        {/* Benefit 2 - Shared Values */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src={B2}
              alt="Hands on bible" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-bold uppercase mb-4">SHARED VALUES</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>

        {/* Benefit 3 - Charity Events */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-lg font-bold uppercase mb-4">CHARITY EVENTS</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src={B3}
              alt="People with raised hands" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Benefit 4 - All Are Welcome */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src={B4}
              alt="Stained glass window" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-bold uppercase mb-4">ALL ARE WELCOME</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}