'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      comment: 'Amazing platform! Won ₹5,000 in my first week. The gameplay is smooth and withdrawals are instant.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20portrait%20headshot%2C%20confident%20businessman%20in%20formal%20attire%2C%20clean%20background%2C%20trustworthy%20appearance%2C%20modern%20professional%20photography%20style%2C%20realistic%20facial%20features&width=80&height=80&seq=avatar-1&orientation=squarish',
      winAmount: '₹45,000'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi, NCR',
      rating: 5,
      comment: 'Love the fair play guarantee! Customer support is excellent and the app design is beautiful.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20portrait%20headshot%2C%20confident%20businesswoman%20with%20modern%20hairstyle%2C%20clean%20background%2C%20professional%20attire%2C%20trustworthy%20appearance%2C%20realistic%20facial%20features&width=80&height=80&seq=avatar-2&orientation=squarish',
      winAmount: '₹28,500'
    },
    {
      name: 'Arun Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      comment: 'Best Rummy app I have ever used. Security is top-notch and the games are really exciting!',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20middle-aged%20male%20portrait%2C%20businessman%20with%20glasses%2C%20confident%20smile%2C%20formal%20shirt%2C%20clean%20background%2C%20trustworthy%20appearance%2C%20realistic%20photography&width=80&height=80&seq=avatar-3&orientation=squarish',
      winAmount: '₹67,200'
    },
    {
      name: 'Sneha Reddy',
      location: 'Bangalore, Karnataka',
      rating: 5,
      comment: 'Started with ₹100, now I have won over ₹20,000! Genuine platform with real cash rewards.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indian%20female%20portrait%2C%20software%20engineer%20with%20modern%20look%2C%20clean%20background%2C%20confident%20expression%2C%20contemporary%20professional%20style%2C%20realistic%20features&width=80&height=80&seq=avatar-4&orientation=squarish',
      winAmount: '₹32,800'
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      comment: 'Fantastic experience! The tournaments are thrilling and payouts are always on time.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20portrait%20with%20traditional%20touch%2C%20confident%20businessman%2C%20clean%20background%2C%20formal%20attire%2C%20trustworthy%20appearance%2C%20realistic%20facial%20features&width=80&height=80&seq=avatar-5&orientation=squarish',
      winAmount: '₹54,300'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            What Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Winners Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy players who are winning real cash daily
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Main testimonial */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <i className="ri-double-quotes-l text-white text-xl"></i>
              </div>

              <div className="text-center pt-8">
                {/* Rating stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed font-medium">
                  "{testimonials[activeIndex].comment}"
                </p>

                {/* User info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
                  />
                  <div className="text-left">
                    <div className="text-lg font-bold text-gray-800 dark:text-white">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      {testimonials[activeIndex].location}
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-bold text-sm">
                      Total Winnings: {testimonials[activeIndex].winAmount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === activeIndex
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Small testimonial cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-4 bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl border transition-all cursor-pointer ${
                  index === activeIndex
                    ? 'border-purple-500/50 bg-white/10 dark:bg-gray-800/10'
                    : 'border-white/10 dark:border-gray-700/10 hover:bg-white/10 dark:hover:bg-gray-800/10'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-800 dark:text-white">
                      {testimonial.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-bold">
                      {testimonial.winAmount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <i className="ri-shield-check-fill text-green-500 text-xl"></i>
              <span className="text-sm">Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <i className="ri-star-fill text-yellow-500 text-xl"></i>
              <span className="text-sm">4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <i className="ri-user-heart-fill text-red-500 text-xl"></i>
              <span className="text-sm">50,000+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}