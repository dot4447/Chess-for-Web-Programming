import React from "react"

export default function ChessBg({ scrollY }) {
    const rotateStyle = {
      transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg) rotateY(${scrollY * 0.02}deg)`,
      transition: "transform 0.1s ease-out",
    }
  
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-[600px] h-[600px] opacity-50" style={rotateStyle}>
          <ChessBoard />
          <ChessPieces />
        </div>
      </div>
    )
  }
  
  function ChessBoard() {
    return (
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 border border-amber-700/50">
        {Array.from({ length: 64 }).map((_, index) => {
          const row = Math.floor(index / 8)
          const col = index % 8
          const isWhite = (row + col) % 2 === 0
          return (
            <div
              key={index}
              className={`${isWhite ? "bg-[#F0D9B5]" : "bg-[#B58863]"} border-[0.5px] border-amber-700/20`}
            />
          )
        })}
      </div>
    )
  }
  
  function ChessPieces() {
    // Chess piece symbols
    const pieces = {
      black: {
        king: "♔",
        queen: "♕",
        rook: "♖",
        bishop: "♗",
        knight: "♘",
        pawn: "♙",
      },
      white: {
        king: "♚",
        queen: "♛",
        rook: "♜",
        bishop: "♝",
        knight: "♞",
        pawn: "♟",
      },
    }
  
    // Initial board setup
    const initialSetup = [
      // Black pieces
      { piece: pieces.black.rook, position: "a8" },
      { piece: pieces.black.knight, position: "b8" },
      { piece: pieces.black.bishop, position: "c8" },
      { piece: pieces.black.queen, position: "d8" },
      { piece: pieces.black.king, position: "e8" },
      { piece: pieces.black.bishop, position: "f8" },
      { piece: pieces.black.knight, position: "g8" },
      { piece: pieces.black.rook, position: "h8" },
      // Black pawns
      ...Array.from({ length: 8 }).map((_, i) => ({
        piece: pieces.black.pawn,
        position: `${String.fromCharCode(97 + i)}7`,
      })),
      // White pawns
      ...Array.from({ length: 8 }).map((_, i) => ({
        piece: pieces.white.pawn,
        position: `${String.fromCharCode(97 + i)}2`,
      })),
      // White pieces
      { piece: pieces.white.rook, position: "a1" },
      { piece: pieces.white.knight, position: "b1" },
      { piece: pieces.white.bishop, position: "c1" },
      { piece: pieces.white.queen, position: "d1" },
      { piece: pieces.white.king, position: "e1" },
      { piece: pieces.white.bishop, position: "f1" },
      { piece: pieces.white.knight, position: "g1" },
      { piece: pieces.white.rook, position: "h1" },
    ]
  
    const getPosition = (position) => {
      const file = position.charCodeAt(0) - 97 // 'a' = 0, 'b' = 1, etc.
      const rank = 8 - Number.parseInt(position[1]) // '8' = 0, '7' = 1, etc.
      return { row: rank, col: file }
    }
  
    return (
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {initialSetup.map((piece, index) => {
          const { row, col } = getPosition(piece.position)
          return (
            <div
              key={index}
              className="flex items-center justify-center text-4xl"
              style={{
                gridRow: row + 1,
                gridColumn: col + 1,
                color: piece.piece.charCodeAt(0) >= 9818 ? "#222" : "#fff",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              {piece.piece}
            </div>
          )
        })}
      </div>
    )
  }
  
  