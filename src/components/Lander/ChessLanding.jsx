"use client"

import { useState, useEffect } from "react"
import ChessBg from "./ChessBg"


function ChessLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-black/60">
        <ChessBg scrollY={scrollY} />
      </div>
      
      
    </div>
  )
}

export default ChessLanding

