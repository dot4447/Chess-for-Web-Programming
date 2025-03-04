import React from "react";

export default function ChessBoard()
{
    return (
        <group position={[0, -1, 0]}>
        {/* Chessboard base */}
        <mesh receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[10, 0.2, 10]} />
          <meshStandardMaterial color="#8B4513" transparent opacity={0.9} />
        </mesh>
  
        {/* Chessboard squares */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => {
            const isWhite = (row + col) % 2 === 0
            return (
              <mesh key={`${row}-${col}`} position={[col - 3.5, 0, row - 3.5]} receiveShadow>
                <boxGeometry args={[1, 0.1, 1]} />
                <meshStandardMaterial color={isWhite ? "#F0D9B5" : "#B58863"} transparent={true} opacity={0.8} />
              </mesh>
            )
          }),
        )}
      </group>
    )
}