'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' }
    ],
    'Support': [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faqs' },
      { name: '24/7 Chat Support', href: '/chat' }
    ],
    'Legal': [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Responsible Gaming', href: '/responsible-gaming' },
      { name: 'Fair Play Policy', href: '/fair-play' }
    ],
    'Games': [
      { name: 'Classic Rummy', href: '/games/classic' },
      { name: 'Pool Rummy', href: '/games/pool' },
      { name: 'Points Rummy', href: '/games/points' },
      { name: 'Tournaments', href: '/tournaments' }
    ]
  };

  const socialLinks = [
    { icon: 'ri-facebook-fill', href: '#', color: 'from-blue-500 to-blue-600' },
    { icon: 'ri-twitter-fill', href: '#', color: 'from-sky-500 to-sky-600' },
    { icon: 'ri-instagram-line', href: '#', color: 'from-pink-500 to-pink-600' },
    { icon: 'ri-youtube-fill', href: '#', color: 'from-red-500 to-red-600' },
    { icon: 'ri-telegram-fill', href: '#', color: 'from-blue-400 to-blue-500' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <i className="ri-heart-3-fill text-white text-2xl"></i>
              </div>
              <span className="font-['Pacifico'] text-3xl text-white cursor-pointer">
                Scraplab Rummy
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              India's most trusted online Rummy platform with over 10 lakh+ players. 
              Play responsibly and win real cash rewards.
            </p>

            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer`}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download section */}
        <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-3xl p-8 mb-12 border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Download Scraplab Rummy App
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the ultimate gaming experience on your mobile device. Available for both Android and iOS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all cursor-pointer whitespace-nowrap">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-google-play-fill text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all cursor-pointer whitespace-nowrap">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-apple-fill text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <i className="ri-shield-check-fill text-white text-xl"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Safe</div>
              <div className="text-xs text-gray-300">SSL Secured</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-bank-card-fill text-white text-xl"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Instant Withdrawal</div>
              <div className="text-xs text-gray-300">2 Min Process</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
              <i className="ri-customer-service-2-fill text-white text-xl"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-white">24x7 Support</div>
              <div className="text-xs text-gray-300">Always Available</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
              <i className="ri-verified-badge-fill text-white text-xl"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Certified</div>
              <div className="text-xs text-gray-300">Fair Play</div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Scraplab Rummy. All rights reserved. | RNG Certified | Responsible Gaming
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <i className="ri-shield-star-fill text-green-400"></i>
                <span>Age 18+</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <i className="ri-map-pin-fill text-blue-400"></i>
                <span>Made in India</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-yellow-600/10 border border-yellow-500/20 rounded-xl">
            <p className="text-yellow-300 text-xs leading-relaxed">
              <i className="ri-information-fill mr-2"></i>
              <strong>Responsible Gaming:</strong> This game involves financial risk and may be addictive. Please play responsibly. 
              Players must be 18+ years old. This game is not available in Assam, Odisha, Sikkim, Nagaland, and Telangana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}