'use client';

import { useState, useEffect } from 'react';

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('daily');
  const [animatedRankings, setAnimatedRankings] = useState(false);

  const leaderboardData = {
    daily: [
      { rank: 1, name: 'RummyKing_2024', winnings: '₹15,250', games: 23, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20crown%20symbol%2C%20golden%20background%2C%20winner%20portrait%20style%2C%20digital%20art%20character%20design%2C%20modern%20gaming%20aesthetics&width=50&height=50&seq=leader-1&orientation=squarish' },
      { rank: 2, name: 'CardMaster_Pro', winnings: '₹12,890', games: 19, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20silver%20theme%2C%20confident%20player%20portrait%2C%20digital%20art%20style%2C%20modern%20gaming%20character%20design&width=50&height=50&seq=leader-2&orientation=squarish' },
      { rank: 3, name: 'AcePlayer_123', winnings: '₹11,430', games: 16, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20bronze%20theme%2C%20skilled%20player%20portrait%2C%20digital%20art%20character%2C%20contemporary%20gaming%20design&width=50&height=50&seq=leader-3&orientation=squarish' },
      { rank: 4, name: 'LuckyWinner_99', winnings: '₹9,750', games: 21, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20portrait%2C%20lucky%20player%20character%20design%2C%20modern%20digital%20art%20style%2C%20colorful%20gaming%20aesthetics&width=50&height=50&seq=leader-4&orientation=squarish' },
      { rank: 5, name: 'RummyChamp', winnings: '₹8,920', games: 18, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20of%20champion%20player%2C%20confident%20character%20portrait%2C%20modern%20digital%20gaming%20art%20style&width=50&height=50&seq=leader-5&orientation=squarish' },
      { rank: 6, name: 'PokerFace_Pro', winnings: '₹7,650', games: 15, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20poker%20theme%2C%20mysterious%20player%20character%2C%20modern%20digital%20art%20design&width=50&height=50&seq=leader-6&orientation=squarish' },
      { rank: 7, name: 'GoldenCards', winnings: '₹6,840', games: 14, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20golden%20card%20theme%2C%20elegant%20player%20portrait%2C%20premium%20digital%20character%20design&width=50&height=50&seq=leader-7&orientation=squarish' },
      { rank: 8, name: 'WinStreak_Max', winnings: '₹5,920', games: 12, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20winning%20streak%20theme%2C%20successful%20player%20portrait%2C%20modern%20gaming%20character%20art&width=50&height=50&seq=leader-8&orientation=squarish' }
    ],
    weekly: [
      { rank: 1, name: 'MegaWinner_2024', winnings: '₹75,250', games: 156, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20mega%20winner%20theme%2C%20champion%20portrait%20with%20crown%2C%20luxurious%20golden%20design&width=50&height=50&seq=weekly-1&orientation=squarish' },
      { rank: 2, name: 'RummyLegend', winnings: '₹68,890', games: 142, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20legend%20theme%2C%20prestigious%20player%20portrait%2C%20silver%20and%20blue%20design&width=50&height=50&seq=weekly-2&orientation=squarish' },
      { rank: 3, name: 'CardShark_Elite', winnings: '₹61,430', games: 138, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20shark%20theme%2C%20elite%20player%20character%2C%20bronze%20and%20orange%20design%20elements&width=50&height=50&seq=weekly-3&orientation=squarish' },
      { rank: 4, name: 'ProGamer_X', winnings: '₹55,750', games: 129, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20pro%20gamer%20theme%2C%20skilled%20player%20portrait%2C%20modern%20esports%20character%20design&width=50&height=50&seq=weekly-4&orientation=squarish' },
      { rank: 5, name: 'RummyMaster', winnings: '₹48,920', games: 115, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20master%20theme%2C%20expert%20player%20character%2C%20sophisticated%20digital%20art%20design&width=50&height=50&seq=weekly-5&orientation=squarish' },
      { rank: 6, name: 'VictoryKing', winnings: '₹42,650', games: 98, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20victory%20theme%2C%20royal%20player%20portrait%2C%20majestic%20character%20design&width=50&height=50&seq=weekly-6&orientation=squarish' },
      { rank: 7, name: 'ChampionAce', winnings: '₹38,840', games: 87, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20champion%20ace%20theme%2C%20winning%20player%20portrait%2C%20premium%20digital%20character&width=50&height=50&seq=weekly-7&orientation=squarish' },
      { rank: 8, name: 'GrandMaster', winnings: '₹35,920', games: 82, avatar: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20avatar%20with%20grandmaster%20theme%2C%20wise%20player%20character%2C%20elegant%20and%20sophisticated%20design&width=50&height=50&seq=weekly-8&orientation=squarish' }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedRankings(true), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentData = leaderboardData[activeTab as keyof typeof leaderboardData];

  return (
    <section id="leaderboard" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Top Winners</span> Leaderboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See who's winning big and climb your way to the top of the leaderboard
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-full p-1 border border-white/20 dark:border-gray-700/20">
            {[
              { key: 'daily', label: 'Daily', icon: 'ri-calendar-line' },
              { key: 'weekly', label: 'Weekly', icon: 'ri-calendar-week-line' }
            ].map((tab) => (
              <button
                key={tab.key}
                className={`px-6 py-3 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
                onClick={() => {
                  setActiveTab(tab.key);
                  setAnimatedRankings(false);
                }}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label} Winners
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          {/* Top 3 winners podium */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {currentData.slice(0, 3).map((player, index) => {
              const positions = [1, 0, 2]; // Center the #1 winner
              const actualIndex = positions[index];
              const winner = currentData[actualIndex];
              const podiumHeights = ['h-32', 'h-40', 'h-24'];
              const crownColors = ['from-yellow-400 to-yellow-600', 'from-gray-300 to-gray-400', 'from-orange-400 to-orange-600'];
              
              return (
                <div key={actualIndex} className="text-center">
                  <div className={`relative ${podiumHeights[actualIndex]} bg-gradient-to-br ${crownColors[actualIndex]} rounded-t-3xl flex items-end justify-center p-4 mb-4`}>
                    <div className="text-white">
                      <div className="text-3xl font-bold">#{winner.rank}</div>
                      <div className="text-sm opacity-80">{winner.winnings}</div>
                    </div>
                    
                    {/* Crown for #1 */}
                    {actualIndex === 0 && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <i className="ri-vip-crown-fill text-white text-xl"></i>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Winner info */}
                  <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-4 border border-white/20 dark:border-gray-700/20">
                    <img
                      src={winner.avatar}
                      alt={winner.name}
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-white/30 object-cover"
                    />
                    <div className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                      {winner.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {winner.games} games played
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Complete leaderboard */}
          <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 dark:border-gray-700/20">
            <div className="space-y-4">
              {currentData.map((player, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 bg-white/10 dark:bg-gray-800/10 rounded-2xl border border-white/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all ${
                    animatedRankings ? 'transform translate-x-0' : 'transform translate-x-full'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transitionDuration: '500ms'
                  }}
                >
                  {/* Rank */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    player.rank <= 3
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {player.rank}
                  </div>

                  {/* Avatar */}
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="flex-shrink-0 w-12 h-12 rounded-full ml-4 object-cover border-2 border-white/30"
                  />

                  {/* Player info */}
                  <div className="flex-1 ml-4">
                    <div className="text-lg font-bold text-gray-800 dark:text-white">
                      {player.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {player.games} games played
                    </div>
                  </div>

                  {/* Winnings */}
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">
                      {player.winnings}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      winnings
                    </div>
                  </div>

                  {/* Trophy icon for top 3 */}
                  {player.rank <= 3 && (
                    <div className="ml-4">
                      <i className={`ri-trophy-fill text-2xl ${
                        player.rank === 1 ? 'text-yellow-500' :
                        player.rank === 2 ? 'text-gray-400' : 'text-orange-500'
                      }`}></i>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Join leaderboard CTA */}
            <div className="mt-8 text-center p-6 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Want to see your name here?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Start playing now and climb the leaderboard to win amazing cash prizes!
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-trophy-line mr-2"></i>
                Join Competition
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}