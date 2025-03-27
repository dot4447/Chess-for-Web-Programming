import React, { useState } from 'react'

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Play Online",
      description: "Challenge players globally, anytime, anywhere",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Learn & Improve",
      description: "Unlock your potential with AI-powered lessons",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Puzzle Challenge",
      description: "Sharpen your skills with daily chess puzzles",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2747] via-black to-[#0A1128] text-white pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
            Master Your Chess Journey
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            MyChess is your ultimate platform to play, learn, and excel in the world's most strategic game. Compete globally, improve your skills, and become a chess master.
          </p>
          <div className='flex justify-center'>
          <div className="flex space-x-4">
            <button 
              className="bg-[#D4AF37] text-black px-8 py-3 rounded-full 
              font-bold hover:bg-opacity-90 transition-all duration-300 
              transform hover:scale-105"
              
            >
              Play Now
            </button>   
          </div>
          </div>
          
        </div>

        {/* Right Content - Chess Board Illustration */}
        <div className="relative hidden md:flex justify-center items-center">
          <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 600 600" 
            className="relative z-10 w-full h-auto text-white opacity-20"
          >
            <pattern id="chessboard" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="#2C3E50" />
              <rect x="50" width="50" height="50" fill="#34495E" />
              <rect y="50" width="50" height="50" fill="#34495E" />
              <rect x="50" y="50" width="50" height="50" fill="#2C3E50" />
            </pattern>
            <rect width="600" height="600" fill="url(#chessboard)" />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your Chess Journey Starts Here
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActiveFeature(index)}
              className={`
                bg-[#1A2747] bg-opacity-50 backdrop-blur-lg rounded-xl p-6 text-center
                transition-all duration-500 transform
                ${activeFeature === index 
                  ? 'scale-105 shadow-2xl border-2 border-[#D4AF37]' 
                  : 'hover:scale-105'}
              `}
            >
              <div className="flex justify-center mb-4 text-[#D4AF37]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A1128] py-8 text-center">
        <p className="text-gray-400">
          © 2025 MyChess. All rights reserved.
        </p>
      </footer>
    </div>
  )
}