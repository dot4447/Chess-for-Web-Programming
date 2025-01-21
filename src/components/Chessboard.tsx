export default function Chessboard() {
  const board = Array(8).fill(null).map((_, i) => Array(8).fill(null))
  
  const initialPosition = {
    '0,0': '♜', '0,1': '♞', '0,2': '♝', '0,3': '♛', '0,4': '♚', '0,5': '♝', '0,6': '♞', '0,7': '♜',
    '1,0': '♟', '1,1': '♟', '1,2': '♟', '1,3': '♟', '1,4': '♟', '1,5': '♟', '1,6': '♟', '1,7': '♟',
    '6,0': '♙', '6,1': '♙', '6,2': '♙', '6,3': '♙', '6,4': '♙', '6,5': '♙', '6,6': '♙', '6,7': '♙',
    '7,0': '♖', '7,1': '♘', '7,2': '♗', '7,3': '♕', '7,4': '♔', '7,5': '♗', '7,6': '♘', '7,7': '♖',
  }

  return (
    <div className="w-[600px] h-[600px] bg-[#E8EBD0] rounded-lg p-4">
      <div className="grid grid-cols-8 h-full">
        {board.map((row, i) =>
          row.map((_, j) => {
            const isGreen = (i + j) % 2 === 1
            const piece = initialPosition[`${i},${j}`]
            
            return (
              <div
                key={`${i}-${j}`}
                className={`flex items-center justify-center text-4xl
                  ${isGreen ? 'bg-[#769656]' : 'bg-[#EEEED2]'}
                  ${piece ? 'cursor-pointer hover:opacity-80' : ''}
                `}
              >
                {piece}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

