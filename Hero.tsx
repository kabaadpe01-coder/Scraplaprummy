'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [animatedCards, setAnimatedCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedCards(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxurious%20casino%20poker%20table%20with%20deep%20purple%20felt%20surface%2C%20golden%20ornate%20details%2C%20dramatic%20spotlighting%2C%20royal%20atmosphere%2C%20realistic%20casino%20environment%20with%20elegant%20chairs%2C%20professional%20gaming%20setup%2C%20rich%20textures%20and%20materials%2C%20sophisticated%20ambiance%2C%20premium%20quality%20table%20with%20gold%20accents%20and%20detailed%20craftsmanship&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-indigo-900/80"></div>
      
      {/* Animated floating cards */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`absolute w-16 h-24 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-2xl transform transition-all duration-3000 ${animatedCards ? 'animate-bounce' : ''}`}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${-30 + i * 15}deg)`
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <i className="ri-heart-fill text-white text-2xl"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Glowing chips animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={`chip-${i}`}
            className={`absolute w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl animate-pulse`}
            style={{
              right: `${5 + i * 15}%`,
              bottom: `${30 + i * 10}%`,
              boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)'
            }}
          >
            <div className="w-full h-full rounded-full border-4 border-yellow-300 flex items-center justify-center">
              <span className="text-yellow-900 font-bold text-xs">₹{i}00</span>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Play <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Real Cash</span>
            <br />
            Rummy Games
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Experience the thrill of authentic Rummy with secure transactions,
            <br className="hidden md:block" />
            fair gameplay, and instant cash rewards
          </p>

          {/* Key features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['₹10 Bonus', 'Instant Withdrawal', '24/7 Support', 'Safe & Secure'].map((badge, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap text-lg">
              <i className="ri-play-fill mr-2"></i>
              Play Now - Win ₹10,000
            </button>
            
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all cursor-pointer whitespace-nowrap text-lg">
              <i className="ri-smartphone-line mr-2"></i>
              Download App
            </button>
          </div>

          {/* Social login options */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-300 text-sm">Quick Login with</p>
            <div className="flex space-x-4">
              {[
                { icon: 'ri-google-fill', name: 'Google', color: 'from-red-500 to-red-600' },
                { icon: 'ri-facebook-fill', name: 'Facebook', color: 'from-blue-500 to-blue-600' },
                { icon: 'ri-phone-fill', name: 'Phone', color: 'from-green-500 to-green-600' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all cursor-pointer`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </button>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-6 mt-12 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="https://readdy.ai/api/search-image?query=Paytm%20logo%20icon%20simple%20clean%20design%20on%20transparent%20background%2C%20digital%20payment%20symbol%2C%20blue%20and%20white%20colors%2C%20modern%20fintech%20branding%2C%20recognizable%20Indian%20payment%20app%20logo&width=32&height=32&seq=paytm-icon&orientation=squarish" alt="Paytm" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-sm">Paytm</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-bank-card-fill text-lg"></i>
              </div>
              <span className="text-sm">UPI</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-shield-check-fill text-lg text-green-400"></i>
              </div>
              <span className="text-sm">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900 to-transparent"></div>
    </section>
  );
}