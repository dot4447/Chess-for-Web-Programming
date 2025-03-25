import React from "react";

export default function ChessBoard()
{
        const pieces = [
            // White pieces (back row)
            { type: "rook", color: "white", position: [-3.5, 0, 3.5] },
            { type: "knight", color: "white", position: [-2.5, 0, 3.5] },
            { type: "bishop", color: "white", position: [-1.5, 0, 3.5] },
            { type: "queen", color: "white", position: [-0.5, 0, 3.5] },
            { type: "king", color: "white", position: [0.5, 0, 3.5] },
            { type: "bishop", color: "white", position: [1.5, 0, 3.5] },
            { type: "knight", color: "white", position: [2.5, 0, 3.5] },
            { type: "rook", color: "white", position: [3.5, 0, 3.5] },
        
            // White pawns
            ...Array.from({ length: 8 }).map((_, i) => ({
              type: "pawn",
              color: "white",
              position: [i - 3.5, 0, 2.5],
            })),
        
            // Black pieces (back row)
            { type: "rook", color: "black", position: [-3.5, 0, -3.5] },
            { type: "knight", color: "black", position: [-2.5, 0, -3.5] },
            { type: "bishop", color: "black", position: [-1.5, 0, -3.5] },
            { type: "queen", color: "black", position: [-0.5, 0, -3.5] },
            { type: "king", color: "black", position: [0.5, 0, -3.5] },
            { type: "bishop", color: "black", position: [1.5, 0, -3.5] },
            { type: "knight", color: "black", position: [2.5, 0, -3.5] },
            { type: "rook", color: "black", position: [3.5, 0, -3.5] },
        
            // Black pawns
            ...Array.from({ length: 8 }).map((_, i) => ({
              type: "pawn",
              color: "black",
              position: [i - 3.5, 0, -2.5],
            })),
          ]
        
          return (
            <group>
              {pieces.map((piece, index) => (
                <ChessPiece key={index} type={piece.type} color={piece.color} position={piece.position} />
              ))}
            </group>
          )
}