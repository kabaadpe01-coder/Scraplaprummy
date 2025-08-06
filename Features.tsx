'use client';

export default function Features() {
  const features = [
    {
      icon: 'ri-money-dollar-circle-fill',
      title: 'Real Cash Games',
      description: 'Play with real money and win instant cash rewards. Minimum entry fee starts from just ₹10.',
      color: 'from-green-500 to-emerald-600',
      glowColor: 'shadow-green-500/25'
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Secure Transactions',
      description: '256-bit SSL encryption ensures your money and personal data are completely safe and secure.',
      color: 'from-blue-500 to-cyan-600',
      glowColor: 'shadow-blue-500/25'
    },
    {
      icon: 'ri-customer-service-2-fill',
      title: '24x7 Support',
      description: 'Round the clock customer support via chat, email, and phone. Get help whenever you need it.',
      color: 'from-purple-500 to-violet-600',
      glowColor: 'shadow-purple-500/25'
    },
    {
      icon: 'ri-scales-3-fill',
      title: 'Fair Play Guaranteed',
      description: 'Advanced RNG system ensures completely fair gameplay. Certified by international gaming authorities.',
      color: 'from-orange-500 to-red-600',
      glowColor: 'shadow-orange-500/25'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Scraplab Rummy?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate online Rummy platform with cutting-edge security, fair gameplay, and instant rewards
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-105">
                {/* Glowing background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 hover:shadow-2xl ${feature.glowColor} transition-all duration-300`}>
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                  <i className="ri-arrow-right-line text-white text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <i className="ri-verified-badge-fill text-white text-xl"></i>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-800 dark:text-white">₹50 Cr+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Winnings Paid</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <i className="ri-user-star-fill text-white text-xl"></i>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-800 dark:text-white">10 Lakh+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Happy Players</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <i className="ri-time-fill text-white text-xl"></i>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-800 dark:text-white">2 Minutes</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Instant Withdrawal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}