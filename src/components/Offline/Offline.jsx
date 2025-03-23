import { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

export default function OfflinePractice() {
  const [game, setGame] = useState(new Chess());
  const [history, setHistory] = useState([]);
  const [fenHistory, setFenHistory] = useState([game.fen()]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [pendingMove, setPendingMove] = useState(null);
  const [winner, setWinner] = useState(null);

  const handleMove = (move) => {
    const newGame = new Chess(game.fen());
    const result = newGame.move(move);

    if (result) {
      setGame(newGame);
      setHistory([...history, result.san]);
      setFenHistory([...fenHistory, newGame.fen()]);
      setSelectedSquare(null);
      setValidMoves([]);

      if (newGame.isCheckmate()) {
        setWinner(newGame.turn() === 'w' ? 'Black Wins' : 'White Wins');
      }
    }
  };

  const handleSquareClick = (square) => {
    const piece = game.get(square);

    if (selectedSquare && piece && piece.color === game.turn()) {
      if (selectedSquare === square) {
        setSelectedSquare(null);
        setValidMoves([]);
      } else {
        selectPiece(square);
      }
      return;
    }

    if (selectedSquare) {
      const move = { from: selectedSquare, to: square };
      const possibleMoves = game.moves({ verbose: true });

      const promotionNeeded = possibleMoves.some(
        (m) => m.from === move.from && m.to === move.to && m.promotion
      );

      if (promotionNeeded) {
        setPendingMove(move);
      } else {
        handleMove(move);
      }
      return;
    }

    if (piece && piece.color === game.turn()) {
      selectPiece(square);
    }
  };

  const selectPiece = (square) => {
    const moves = game.moves({ square, verbose: true }).map((m) => m.to);
    if (moves.length > 0) {
      setSelectedSquare(square);
      setValidMoves(moves);
    } else {
      setSelectedSquare(null);
      setValidMoves([]);
    }
  };

  const handlePromotion = (piece) => {
    if (pendingMove) {
      handleMove({ ...pendingMove, promotion: piece });
      setPendingMove(null);
    }
  };

  const handleRestart = () => {
    const newGame = new Chess();
    setGame(newGame);
    setHistory([]);
    setFenHistory([newGame.fen()]);
    setWinner(null);
    setSelectedSquare(null);
    setValidMoves([]);
  };

  const handleUndo = () => {
    if (fenHistory.length > 1) {
      const newHistory = [...fenHistory];
      newHistory.pop();
      setGame(new Chess(newHistory[newHistory.length - 1]));
      setFenHistory(newHistory);
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <div className="flex w-full h-screen relative bg-black-200 p-4">
      <div className="flex-[5] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Offline Practice</h1>
        <div className="w-[90%] max-w-[600px] bg-white p-4 rounded-lg shadow-lg">
          <Chessboard
            position={game.fen()}
            onPieceDrop={(sourceSquare, targetSquare) => {
              handleMove({ from: sourceSquare, to: targetSquare, promotion: 'q' });
            }}
            onSquareClick={handleSquareClick}
            customSquareStyles={validMoves.reduce((styles, square) => {
              styles[square] = { background: 'rgba(255, 255, 0, 0.5)' };
              return styles;
            }, selectedSquare ? { [selectedSquare]: { background: 'rgba(0, 255, 0, 0.5)' } } : {})}
            animationDuration={50}
          />
          <div className="flex mt-4 gap-4 justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={handleRestart}> Restart </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={handleUndo}> Undo </button>
          </div>
        </div>
      </div>

      {pendingMove && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg flex gap-2">
          {['q', 'r', 'b', 'n'].map((piece) => (
            <button
              key={piece}
              className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => handlePromotion(piece)}
            >
              {piece.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {winner && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2 text-black">Checkmate!</h2>
          <p className="text-lg">{winner}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={handleRestart}> Restart Game </button>
        </div>
      )}

      <div className="flex-[0.9] bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto text-black">
        <h2 className="text-lg font-semibold text-center mb-2">Move History</h2>
        <div className="border-b-2 border-gray-300 pb-1 flex font-bold text-sm">
          <div className="w-1/4 text-center">#</div>
          <div className="w-1/2 text-center">White</div>
          <div className="w-1/2 text-center">Black</div>
        </div>
        <div className="mt-2 text-sm">
          {history.map((move, index) => index % 2 === 0 && (
            <div key={index} className="flex border-b py-1">
              <div className="w-1/4 text-center">{index / 2 + 1}</div>
              <div className="w-1/2 text-center">{move}</div>
              <div className="w-1/2 text-center">{history[index + 1] || ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
