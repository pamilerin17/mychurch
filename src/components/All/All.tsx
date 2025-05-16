import React from 'react';

const BlogPosts = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      category: "RELATIONSHIP",
      title: "THE BEST WAY TO INSPIRE PEOPLE",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    },
    {
      id: 2,
      category: "RELATIONSHIP",
      title: "HOW TO SHOW COMPASSION",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    },
    {
      id: 3,
      category: "RELATIONSHIP",
      title: "THE BIBLICAL PURPOSE OF MONEY",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    },
    {
      id: 4,
      category: "RELATIONSHIP",
      title: "THE BEST WAY TO INSPIRE PEOPLE",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    },
    {
      id: 5,
      category: "RELATIONSHIP",
      title: "WHAT IT MEANS TO BE A DISCIPLE",
      excerpt: "We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    },
    {
      id: 6,
      category: "RELATIONSHIP",
      title: "WHAT IT MEANS TO BELIEVE",
      excerpt: "We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    },
    {
      id: 7,
      category: "RELATIONSHIP",
      title: "THE MODERN CHRUCH IN 2022",
      excerpt: "We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    },
     {
      id: 8,
      category: "RELATIONSHIP",
      title: "THE MODERN CHRUCH IN 2022",
      excerpt: "We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want",
      author: "Rev. Wale Adesida",
      date: "Tuesday 13 May, 2018"
    }
  ];

  return (
    <div className="w-full bg-stone-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Blog Posts Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ALL BLOG POSTS</h2>
          <div className="w-32 h-1 bg-orange-400 mx-auto mt-2"></div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded group cursor-pointer overflow-hidden transform transition-all duration-300 hover:shadow-md"
            >
              <div className="p-6 pb-3 relative">
                {/* Line that appears on hover - using scale transform for animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Category */}
                <p className="text-orange-500 text-sm font-medium mb-2">{post.category}</p>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{post.title}</h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-6">{post.excerpt}</p>
                
                {/* Author & Date */}
                <div className="text-xs text-gray-500">
                  <p>By {post.author}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;