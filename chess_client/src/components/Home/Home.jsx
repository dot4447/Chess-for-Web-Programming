import React, { useState } from 'react'
import chessImage from './assets/A.jpg'

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
      title: "Chess Puzzles",
      description: "Coming Soon...",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v10m5-5H7" />
        </svg>
      )
    },
    {
      title: "Chess Coaching",
      description: "Coming Soon...",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H18.4a2 2 0 00-1.94 1.555L16 12h-2.414l-.707-2.121A2 2 0 0011 8H8.414l-.707-2.121A2 2 0 006.757 4H4.242a1 1 0 00-.97 1.243l1.713 6.457a2 2 0 001.684 1.517l4.493.618a2 2 0 001.857-1.257l1.257-3.143" />
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

        {/* Right Content - Flickering Chess Board Image */}
        <div className="relative hidden md:flex justify-center items-center rounded-b-full">
          {/* Flickering effect layers */}
          <div className="absolute inset-0 bg-[#2123C8]/20 rounded-full blur-2xl animate-pulse"></div>
          
          <div className="relative z-10 w-full max-w-[500px] group">
            <img 
              src={chessImage} 
              alt="Chess Board"
              className="w-full h-auto rounded-xl shadow-2xl 
              transition-all duration-500 
              group-hover:scale-105
              animate-flicker"
            />
            
            {/* Overlay effect for additional visual interest */}
            <div className="absolute inset-0 bg-[#1A2747] opacity-20 mix-blend-overlay rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      
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

     
    </div>
  )
}