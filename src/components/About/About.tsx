// import React from 'react';
import Abt from '../../assets/welcome.png'
export default function About() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div 
        className="w-full h-64 md:h-96 bg-cover bg-center" 
        style={{ 
         backgroundImage: `url(${Abt})`,
          backgroundPosition: "center bottom"
        }}
      >
        {/* Overlay to make text more visible */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          <p className="text-2xl md:text-sm uppercase tracking-wider text-gray-900 font-large mb-2">
            ABOUT US
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            SERVING THE WORLD AROUND US
          </h1>
        </div>
      </div>
    </div>
  );
}