import React from "react";
import { Link } from "react-router-dom";
import ChessLanding from "../Lander/ChessLanding";
   
export default function Home() {
    return (
        
      <main>
        {/* <ChessLanding/> */}
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center px-4 bg-[url(<ChessLanding]">
          <div className="max-w-4xl mx-auto ">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Master the Game of Kings
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
              Play, learn, and connect with chess enthusiasts from around the world
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="#"
                className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Play Now
              </Link>
              <Link
                to="#"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Play Online",
                  description: "Challenge players from around the world in real-time matches",
                },
                {
                  title: "Learn Strategies",
                  description: "Access tutorials and lessons from chess masters",
                },
                {
                  title: "Join Tournaments",
                  description: "Compete in regular tournaments with prizes",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-black/50">
          <div className="container mx-auto bg-black/50 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-16">About MyChess</h2>
            <div className="max-w-3xl mx-auto grid-cols-1">
              <p className="text-lg mb-6">
                MyChess is a premier online platform dedicated to the royal game of chess. We provide a space for players
                of all skill levels to enjoy the game, improve their abilities, and connect with a global community of
                chess enthusiasts.
              </p>
              <p className="text-lg">
                Founded by a team of chess masters and technology experts, MyChess combines cutting-edge features with
                deep chess knowledge to create the ultimate online chess experience.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        {/* <section className="py-20 px-4">
          <div className="container mx-auto text-center bg-black/50 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Move?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of players already enjoying MyChess and start your journey today.
            </p>
            <Link
              to="#"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Sign Up Now
            </Link>
          </div>
        </section> */}
      </main>
    )
  }

    