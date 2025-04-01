import { useState, useMemo, useCallback, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import CustomDialog from "./components/CustomDialog";
import socket from "./socket";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Game({ players, room, orientation, cleanup }) {
  const chess = useMemo(() => new Chess(), []);
  const [fen, setFen] = useState(chess.fen());
  const [over, setOver] = useState("");
  const [moveHistory, setMoveHistory] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [highlightedSquares, setHighlightedSquares] = useState({});

  const makeAMove = useCallback(
    (move) => {
      try {
        const result = chess.move(move);
        if (!result) return null; // Invalid move

        setFen(chess.fen());
        setSelectedSquare(null);
        setHighlightedSquares({});

        setMoveHistory((prevHistory) => {
          const newHistory = [...prevHistory];
          const moveNumber = Math.ceil((newHistory.length + 1) / 2);

          if (result.color === "w") {
            newHistory.push({ moveNumber, white: result.san, black: "" });
          } else {
            newHistory[newHistory.length - 1].black = result.san;
          }

          return newHistory;
        });

        if (chess.isGameOver()) {
          if (chess.isCheckmate()) {
            setOver(`Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`);
          } else if (chess.isDraw()) {
            setOver("Draw");
          } else {
            setOver("Game over");
          }
        }

        return result;
      } catch (e) {
        return null;
      }
    },
    [chess]
  );

  function getLegalMoves(square) {
    return chess
      .moves({ square, verbose: true })
      .reduce((acc, move) => {
        acc[move.to] = { background: "rgba(255, 255, 0, 0.4)" }; // Yellow highlight
        return acc;
      }, {});
  }

  function onSquareClick(square) {
    if (chess.turn() !== orientation[0] || players.length < 2) return;

    if (selectedSquare) {
      // If same square clicked, deselect
      if (selectedSquare === square) {
        setSelectedSquare(null);
        setHighlightedSquares({});
        return;
      }

      // Attempt move
      const move = makeAMove({ from: selectedSquare, to: square, promotion: "q" });
      if (move) {
        socket.emit("move", { move, room });
      }
      return;
    }

    // Select new piece if it's a valid selection
    if (chess.get(square)?.color === chess.turn()) {
      setSelectedSquare(square);
      setHighlightedSquares(getLegalMoves(square));
    }
  }

  function onDrop(sourceSquare, targetSquare) {
    if (chess.turn() !== orientation[0] || players.length < 2) return false;

    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move) {
      socket.emit("move", { move, room });
      setSelectedSquare(null);
      setHighlightedSquares({});
      return true;
    }

    return false;
  }

  useEffect(() => {
    socket.on("move", (move) => {
      makeAMove(move);
    });
  }, [makeAMove]);

  useEffect(() => {
    socket.on("playerDisconnected", (player) => {
      setOver(`${player.username} has disconnected`);
    });
  }, []);

  useEffect(() => {
    socket.on("closeRoom", ({ roomId }) => {
      if (roomId === room) {
        cleanup();
      }
    });
  }, [room, cleanup]);

  return (
    <div>
    <Stack>
      <Card>
        <CardContent>
          <Typography variant="h5">Room ID: {room}</Typography>
        </CardContent>
      </Card>
      <Stack flexDirection="row" sx={{ pt: 2 }}>
        <div
          className="board"
          style={{
            maxWidth: 600,
            maxHeight: 600,
            flexGrow: 5,
          }}
        >
          <Chessboard
            position={fen}
            onPieceDrop={onDrop}
            onSquareClick={onSquareClick}
            boardOrientation={orientation}
            customSquareStyles={highlightedSquares}
          />
        </div>
        <Stack
          sx={{
            flexGrow: 1,
            ml: 2,
            maxHeight: 600,
            overflow: "auto",
          }}
        >
          {players.length > 0 && (
            <Box>
              <List>
                <ListSubheader>Players</ListSubheader>
                {players.map((p) => (
                  <ListItem key={p.id}>
                    <ListItemText primary={p.username} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Move History Section */}
          <Paper
            elevation={3}
            sx={{
              mt: 2,
              p: 2,
              maxHeight: 400,
              overflow: "auto",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Move History
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Move #</strong>
                    </TableCell>
                    <TableCell>
                      <strong>White</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Black</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {moveHistory.map(({ moveNumber, white, black }) => (
                    <TableRow key={moveNumber}>
                      <TableCell>{moveNumber}</TableCell>
                      <TableCell>{white || "-"}</TableCell>
                      <TableCell>{black || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Stack>
      </Stack>
      <CustomDialog
        open={Boolean(over)}
        title={over}
        contentText={over}
        handleContinue={() => {
          socket.emit("closeRoom", { roomId: room });
          cleanup();
        }}
      />
    </Stack>
    </div>
  );
}

export default Game;
