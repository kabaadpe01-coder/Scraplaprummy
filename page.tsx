
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GameScreenshots from '../components/GameScreenshots';
import Testimonials from '../components/Testimonials';
import Leaderboard from '../components/Leaderboard';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-white to-indigo-50'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <GameScreenshots />
      <Testimonials />
      <Leaderboard />
      <Footer />
    </div>
  );
}
