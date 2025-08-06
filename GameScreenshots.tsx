'use client';

export default function GameScreenshots() {
  const screenshots = [
    {
      title: 'Classic Rummy',
      description: 'Traditional 13-card Rummy with stunning visuals',
      image: 'https://readdy.ai/api/search-image?query=Modern%20mobile%20rummy%20card%20game%20interface%20screenshot%20showing%2013%20playing%20cards%20in%20hand%2C%20elegant%20purple%20and%20gold%20UI%20design%2C%20realistic%20card%20graphics%2C%20game%20table%20background%2C%20professional%20gaming%20app%20interface%20with%20smooth%20gradients%20and%20modern%20typography&width=300&height=600&seq=rummy-classic&orientation=portrait'
    },
    {
      title: 'Pool Rummy',
      description: 'Eliminate opponents in this exciting variant',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20rummy%20pool%20game%20interface%20with%20multiple%20players%20around%20virtual%20table%2C%20cash%20prize%20pool%20display%2C%20elegant%20gaming%20UI%20with%20purple%20theme%2C%20realistic%20card%20deck%20and%20chips%2C%20modern%20app%20design%20with%20glassmorphism%20effects&width=300&height=600&seq=rummy-pool&orientation=portrait'
    },
    {
      title: 'Points Rummy',
      description: 'Quick games with instant cash rewards',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20points%20rummy%20game%20screen%20showing%20scoring%20system%2C%20cash%20rewards%20counter%2C%20modern%20purple%20and%20gold%20gaming%20interface%2C%20playing%20cards%20arranged%20on%20table%2C%20sleek%20UI%20design%20with%20premium%20feel%20and%20realistic%20graphics&width=300&height=600&seq=rummy-points&orientation=portrait'
    }
  ];

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Experience <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Premium Gaming</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in beautifully crafted game interfaces designed for the ultimate Rummy experience
          </p>
        </div>

        {/* Screenshots showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Mobile device frame */}
              <div className="relative mx-auto max-w-sm">
                {/* Device frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-3xl shadow-2xl">
                  {/* Screen bezel */}
                  <div className="bg-black rounded-2xl p-1">
                    {/* Screen content */}
                    <div className="relative aspect-[9/16] bg-white rounded-xl overflow-hidden">
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover object-top"
                      />
                      
                      {/* Overlay gradient for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Game info overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-1">{screenshot.title}</h3>
                        <p className="text-white/80 text-sm">{screenshot.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Device details */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Play?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Download the app now and get ₹51 welcome bonus + ₹10 for first game
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all cursor-pointer whitespace-nowrap">
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <i className="ri-apple-fill text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all cursor-pointer whitespace-nowrap">
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <i className="ri-google-play-fill text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}