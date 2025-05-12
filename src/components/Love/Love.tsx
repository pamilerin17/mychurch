// import { useState } from 'react';
import Im from '../../assets/i1.png'
import Im2 from '../../assets/12.png'
import Im3 from '../../assets/13.png'
import { Link } from 'react-router-dom';

export default function Love() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Section - Love and Compassion */}
      <section className="mb-16">
        <div className="text-center mb-8">
          {/* <p className="text-sm uppercase tracking-wider text-gray-600">SUBHEADLINE</p> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">LOVE AND COMPASSION</h2>
          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-gray-700 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 font-medium py-2 px-8 rounded transition duration-300">
              READ MORE
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="overflow-hidden rounded-lg">
            <img 
              src={Im}
              alt="Man praying" 
              className="w-full h-64 object-cover border-0"
            />
          </div>
          <div className="overflow-hidden rounded-lg md:col-span-1 lg:col-span-1 mt-20">
            <img 
              src={Im2}
              alt="People reading" 
              className="w-full h-64 object-cover" 
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src={Im3}
              alt="Woman in church" 
              className="w-full h-64 object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Bottom Section - Celebrate With Us */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-600">OUR MISSION & VISION</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">CELEBRATE WITH US</h2>
          <div className="max-w-2xl mx-auto mt-6">
            <p className="text-gray-700 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <Link to="/About" className="inline-flex items-center text-gray-700 hover:text-gray-900">
              Read More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}