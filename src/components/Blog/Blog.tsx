// import React from 'react';
import Blo from '../../assets/blo.png'

const Blog = () => {
  return (
    <div className="w-full bg-stone-100 py-16 px-4 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-600 uppercase tracking-wide">OUR BLOG</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">MOST RECENT POST</h2>
        </div>
        
        {/* Blog Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Container - Full width on mobile, 40% on desktop */}
            <div className="w-full md:w-2/5">
              <img 
                src={Blo}
                alt="Children reading a book in sunset"
                className="h-full w-full object-cover" style={{ height: '320px', width: '100%' }}
              />
            </div>
            
            {/* Content Container - Full width on mobile, 60% on desktop */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-between">
              <div>
                {/* Post Meta */}
                <div className="flex flex-col md:flex-row md:justify-between mb-4 text-sm">
                  <p className="text-gray-600 mb-1 md:mb-0">TUESDAY 13 MAY, 2022</p>
                  <p className="text-gray-600">Rev. Wale Adesida</p>
                </div>
                
                {/* Post Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  CHURCH WAS DOING WHAT HE OFTEN DID WHEN DROPPED AN ORACLE
                </h3>
                
                {/* Post Excerpt */}
                <p className="text-gray-700 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor.
                </p>
              </div>
              
              {/* Read More Button */}
              <div>
                <button className="cursor-pointer bg-orange-200 hover:bg-orange-300 transition-colors px-6 py-3 text-gray-800 font-medium rounded">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;