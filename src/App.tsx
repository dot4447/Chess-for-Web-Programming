
import { useState, useCallback, useEffect } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import Sidebar from './components/Sidebar'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BotIcon as RobotIcon, Users, RotateCcw, Check } from 'lucide-react'

export default function App() {
  const [game, setGame] = useState(new Chess())
  const [playingAs, setPlayingAs] = useState<'white' | 'black'>('white')
  const [gameStarted, setGameStarted] = useState(false)
  const [opponent, setOpponent] = useState<'human' | 'bot'>('human')
  const [moveSquares, setMoveSquares] = useState({})

  // Function to get all legal moves for a piece
  const getMoveOptions = (square: string) => {
    const moves = game.moves({ square, verbose: true })
    if (moves.length === 0) return

    const newSquares: {[key: string]: {backgroundColor: string}} = {}
    moves.forEach((move) => {
      newSquares[move.to] = {
        backgroundColor: 'rgba(255, 255, 0, 0.4)',
      }
    })
    newSquares[square] = {
      backgroundColor: 'rgba(255, 255, 0, 0.4)',
    }
    setMoveSquares(newSquares)
  }

  const makeAMove = useCallback((move: any) => {
    try {
      const result = game.move(move)
      setGame(new Chess(game.fen()))
      setMoveSquares({}) // Clear highlighted squares after move
      return result
    } catch (error) {
      return null
    }
  }, [game])

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (!gameStarted) return false

    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    })

    if (move === null) return false
    if (opponent === 'bot') setTimeout(makeBotMove, 200)
    return true
  }

  const onSquareClick = (square: string) => {
    if (!gameStarted) return
    
    // Check if it's the player's turn
    const isPlayersTurn = (playingAs === 'white' && game.turn() === 'w') ||
                         (playingAs === 'black' && game.turn() === 'b')
    
    if (!isPlayersTurn) return
    
    getMoveOptions(square)
  }

  const makeBotMove = () => {
    const possibleMoves = game.moves()
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) return

    const randomIndex = Math.floor(Math.random() * possibleMoves.length)
    const move = possibleMoves[randomIndex]
    makeAMove(move)
  }

  const resetGame = () => {
    setGame(new Chess())
    setGameStarted(false)
    setMoveSquares({})
  }

  const startGame = () => {
    resetGame()
    setGameStarted(true)
    if (opponent === 'bot' && playingAs === 'black') {
      setTimeout(makeBotMove, 200)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#312E2B] text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-center gap-16 mb-16">
          <div className="w-[600px]">
            <Chessboard 
              position={game.fen()} 
              onPieceDrop={onDrop}
              onSquareClick={onSquareClick}
              boardOrientation={playingAs}
              customSquareStyles={moveSquares}
            />
            <div className="mt-4 flex justify-between">
              {!gameStarted && (
                <>
                  <Select onValueChange={(value: 'white' | 'black') => setPlayingAs(value)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="white">Play as White</SelectItem>
                      <SelectItem value="black">Play as Black</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={startGame}>
                    <Check className="mr-2 h-4 w-4" />
                    Start Game
                  </Button>
                </>
              )}
              {gameStarted && (
                <Button onClick={resetGame}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Game
                </Button>
              )}
            </div>
          </div>
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-6">
              Play Chess Online
              <br />
              on the #1 Site!
            </h1>
            <div className="flex gap-4 mb-4 text-gray-300">
              <div>
                <span className="text-2xl font-semibold">15,484,335</span>
                <br />
                Games Today
              </div>
              <div>
                <span className="text-2xl font-semibold">207,196</span>
                <br />
                Playing Now
              </div>
            </div>
            <div className="space-y-4">
              <Button 
                className="w-full h-14 text-lg bg-[#82AC4A] hover:bg-[#90BD4B]"
                onClick={() => {
                  setOpponent('human')
                  resetGame()
                }}
              >
                <Users className="mr-2 h-5 w-5" />
                Play Human
                <span className="text-sm ml-2 opacity-80">Play with someone at your level</span>
              </Button>
              <Button 
                variant="secondary" 
                className="w-full h-14 text-lg"
                onClick={() => {
                  setOpponent('bot')
                  resetGame()
                }}
              >
                <RobotIcon className="mr-2 h-5 w-5" />
                Play Bot
                <span className="text-sm ml-2 opacity-80">Play vs AI</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto bg-[#272522] rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Solve Chess Puzzles</h2>
            <Button className="bg-[#82AC4A] hover:bg-[#90BD4B]">Solve Puzzles</Button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-[#4A4847] rounded-lg"></div>
            <blockquote className="flex items-center text-xl">
              "Puzzles are the best way to improve pattern recognition, and no site does it better."
              <footer className="mt-4">- GM Hikaru Nakamura</footer>
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  )
}

// Chessboard.tsx is not needed since we're using react-chessboard library

