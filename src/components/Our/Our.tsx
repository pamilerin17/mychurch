// import React from 'react';
import Im from '../../assets/i1.png'
import Im2 from '../../assets/12.png'
import Im3 from '../../assets/13.png'
export default function Our() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
          WELCOME TO OUR CHURCH
        </p>
        <h1 className="text-4xl font-bold mb-6">
          LOVE AND COMPASSION
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
      </div>

        {/* Image Gallery Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-12">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <div className="rounded-3xl overflow-hidden h-64 md:h-80">
            <img 
              src={Im}
              alt="Person praying" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3">
          <div className="rounded-3xl overflow-hidden h-64 md:h-80">
            <img 
              src={Im2}
              alt="People reading bible" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <div className="rounded-3xl overflow-hidden h-64 md:h-80">
            <img 
              src={Im3}
              alt="Church service" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission and Vision Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Left Column */}
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
            OUR MISSION & VISION
          </p>
          <h2 className="text-2xl font-bold mb-4">
            STRIVING FOR A BETTER TOMORROW
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
            WHAT WE DO
          </p>
          <h2 className="text-2xl font-bold mb-4">
            BRINGING PEACE AND JOY TO THE WORLD
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </div>
    </div>
  );
}