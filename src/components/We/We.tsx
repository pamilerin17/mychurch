// import React from 'react';
import Back from '../../assets/back.jpg'
export default function We() {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={Back}
          alt="Church dome architecture" 
          className="w-full h-full object-cover" style={{ height: '560px', width: '100%' }}
        />
      </div>
      
      {/* Content Card */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 md:p-16 max-w-lg shadow-lg relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            WE WANT TO<br />
            SERVE THE WORLD<br />
            AROUND US
          </h2>
          
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          
          {/* <button className="bg-orange-200 hover:bg-orange-300 text-gray-900 font-medium py-3 px-8 rounded transition duration-300 uppercase text-sm">
            Visit
          </button> */}
          
          {/* Quote marks decoration */}
          <div className="absolute right-6 top-12 text-orange-100 opacity-70">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50H80C80 66.5 66.5 80 50 80C33.5 80 20 66.5 20 50C20 33.5 33.5 20 50 20V0Z" />
              <path d="M120 0C92.4 0 70 22.4 70 50C70 77.6 92.4 100 120 100V80C103.5 80 90 66.5 90 50C90 33.5 103.5 20 120 20V0Z" />
            </svg>
          </div>
           <div className="h-2 bg-orange-300 w-full"></div>
        </div>
      </div>
    </div>
  );
}