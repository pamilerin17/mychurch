// import React from 'react';
import { FaHandsHelping, FaBroadcastTower, FaHandHoldingHeart } from 'react-icons/fa';

const Church = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-12">
          A CHURCH THAT'S RELEVANT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-orange-50 p-4 rounded-md shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-orange-300 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ABOUT US</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="h-1 bg-orange-200 w-full"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-50 p-6 rounded-md shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaBroadcastTower className="text-orange-300 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GET INVOLVED</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="h-1 bg-orange-200 w-full"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-orange-50 p-6 rounded-md shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaHandHoldingHeart className="text-orange-300 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GIVING BACK</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="h-1 bg-orange-200 w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Church;
