import React from 'react';
import Background from '../../assets/pra.jpg'
import { Link } from 'react-router-dom';

const Body: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest text-orange-300 mb-2">
            Welcome to our church
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Become a Part <br /> of Our Community
          </h1>
         <Link
  to="/about"
  className="inline-block bg-orange-300 text-black px-6 py-3 rounded-md hover:bg-orange-400 transition mb-6"
>
  Learn More
</Link>
          <p className="text-sm text-gray-200 border-l-4 border-orange-300 pl-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Body;
