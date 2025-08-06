'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b border-purple-200/20`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <i className="ri-heart-3-fill text-white text-xl"></i>
              </div>
              <span className={`font-['Pacifico'] text-2xl ${darkMode ? 'text-white' : 'text-gray-800'} cursor-pointer`}>
                Scraplab Rummy
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'} transition-colors cursor-pointer whitespace-nowrap`}>
              Features
            </Link>
            <Link href="#screenshots" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'} transition-colors cursor-pointer whitespace-nowrap`}>
              Screenshots
            </Link>
            <Link href="#leaderboard" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'} transition-colors cursor-pointer whitespace-nowrap`}>
              Leaderboard
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'} transition-all cursor-pointer`}
            >
              <i className={`${darkMode ? 'ri-sun-line' : 'ri-moon-line'} text-lg`}></i>
            </button>
            
            <button className={`px-4 py-2 rounded-xl ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-gray-700 border border-gray-200'} hover:shadow-lg transition-all cursor-pointer whitespace-nowrap`}>
              Login
            </button>
            
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all cursor-pointer whitespace-nowrap">
              Sign Up
            </button>
          </div>

          <button 
            className={`md:hidden w-8 h-8 flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-600'} cursor-pointer`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t border-purple-200/20 py-4`}>
            <div className="flex flex-col space-y-2">
              <Link href="#features" className={`px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} cursor-pointer`}>Features</Link>
              <Link href="#screenshots" className={`px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} cursor-pointer`}>Screenshots</Link>
              <Link href="#leaderboard" className={`px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} cursor-pointer`}>Leaderboard</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}