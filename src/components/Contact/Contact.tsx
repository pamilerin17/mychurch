// import React from 'react';
import Cont from '../../assets/cont.png'
const Contact = () => {
  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden bg-gray-900">
      {/* Background overlay with dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>
      
      {/* Image placeholder (would typically be replaced with an actual image) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Cont}
          alt="Hands raised in worship"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
        <div className="max-w-lg">
          {/* Subtitle */}
          <p className="text-orange-300 text-sm font-medium tracking-wide uppercase mb-2">CONTACT</p>
          
          {/* Main heading */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            GET IN TOUCH WITH<br />
            OUR CHURCH
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;