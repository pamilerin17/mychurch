// import React from 'react';

import { Link } from "react-router-dom";

export default function Read() {
  // Array of blog posts data
  const blogPosts = [
    {
      id: 1,
      category: "RELATIONSHIP",
      title: "WATCH AND LISTEN TO OUR SERMONS",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2021"
    },
    {
      id: 2,
      category: "RELATIONSHIP",
      title: "WATCH AND LISTEN TO OUR SERMONS",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      author: "Rev. Chineye Adesida",
      date: "Tuesday 13 May, 2021"
    },
    {
      id: 3,
      category: "RELATIONSHIP",
      title: "WATCH AND LISTEN TO OUR SERMONS",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      author: "Pst. Moses Enefiok",
      date: "Tuesday 13 May, 2021"
    },
    {
      id: 4,
      category: "RELATIONSHIP",
      title: "WATCH AND LISTEN TO OUR SERMONS",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      author: "Pst. Bowale Okusanya",
      date: "Tuesday 13 May, 2021"
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wider mb-2">READ OUR BLOG</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            SHARE, INSPIRE, INNOVATE
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-orange-50 flex flex-col h-full">
              {/* Post Content */}
              <div className="p-6 flex-grow">
                <span className="text-orange-600 text-xs font-medium uppercase tracking-wider mb-3 block">
                  {post.category}
                </span>
                
                <Link to='/' className="font-bold text-lg uppercase mb-4">
                  {post.title}
                </Link >
                
                <p className="text-sm text-gray-700 mb-8">
                  {post.excerpt}
                </p>
                
                <div className="text-xs text-gray-700">
                  <p className="font-medium">By {post.author}</p>
                  <p>{post.date}</p>
                </div>
              </div>
              
              {/* Orange Bar at Bottom */}
              <div className="h-2 bg-orange-300 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}