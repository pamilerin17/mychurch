// import React from 'react';
import W1 from '../../assets/w1.png';
import W2 from '../../assets/w2.png';
import W3 from '../../assets/w3.png';
import W4 from '../../assets/w4.png';

export default function Watch() {
  // Array of sermon card data
  const sermons = [
    {
      id: 1,
      image: W1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    },
    {
      id: 2,
      image: W2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    },
    {
      id: 3,
      image: W3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    },
    {
      id: 4,
      image: W4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wider mb-2">WATCH AND LISTEN</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            THE BENEFITS OF<br />
            JOINING OUR CHURCH
          </h2>
        </div>

        {/* Sermon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sermons.map((sermon, index) => (
            <div key={sermon.id} className="relative overflow-hidden rounded group">
              {/* Card Image with Overlay */}
              <div className="relative bg-gray-900" style={{ height: '320px', width: '100%' }}>
                <img 
                  src={sermon.image} 
                  alt={`Sermon ${sermon.id}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity duration-300"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0  bg-opacity-50"></div>
                
                {/* Content positioned on the image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-lg font-bold uppercase mb-2">
                    WATCH AND LISTEN TO OUR SERMONS
                  </h3>
                  {index === 0 && sermon.description && (
                    <p className="text-sm text-gray-200">{sermon.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}