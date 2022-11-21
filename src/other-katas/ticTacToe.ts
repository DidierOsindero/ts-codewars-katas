type WinState =
  | `X won by row`
  | "X won by column"
  | "X won by diagonal"
  | `O won by row`
  | "O won by column"
  | "O won by diagonal"
  | "There was a draw"
  | "The game has not been finished yet";
type Player = "x" | "o" | "";

const calcWinState = (BoardState: Player[][]): WinState => {
  const xwonByRow = BoardState.some((row) => row.every((el) => el === "x")); //BoardState[0].every(el => el === 'x') || BoardState[1].every(el => el === 'x') || BoardState[2].every(el => el === 'x');

  const xwonByColumn =
    BoardState.every((row) => row[0] === "x") ||
    BoardState.every((row) => row[1] === "x") ||
    BoardState.every((row) => row[2] === "x");

  const xwonByDiagonal =
    (BoardState[0][0] === "x" &&
      BoardState[1][1] === "x" &&
      BoardState[2][2] === "x") ||
    (BoardState[0][2] === "x" &&
      BoardState[1][1] === "x" &&
      BoardState[2][0] === "x");

  const ywonByRow = BoardState.some((row) => row.every((el) => el === "o")); //BoardState[0].every(el => el === 'o') || BoardState[1].every(el => el === 'o') || BoardState[2].every(el => el === 'o');

  const ywonByColumn =
    BoardState.every((row) => row[0] === "o") ||
    BoardState.every((row) => row[1] === "o") ||
    BoardState.every((row) => row[2] === "o");

  const ywonByDiagonal =
    (BoardState[0][0] === "o" &&
      BoardState[1][1] === "o" &&
      BoardState[2][2] === "o") ||
    (BoardState[0][2] === "o" &&
      BoardState[1][1] === "o" &&
      BoardState[2][0] === "o");

  const isDraw = BoardState.every((row) =>
    row.every((position) => position !== "")
  );

  if (xwonByRow) {
    return `X won by row`;
  } else if (xwonByColumn) {
    return "X won by column";
  } else if (xwonByDiagonal) {
    return "X won by diagonal";
  } else if (ywonByRow) {
    return `O won by row`;
  } else if (ywonByColumn) {
    return "O won by column";
  } else if (ywonByDiagonal) {
    return "O won by diagonal";
  } else if (isDraw) {
    return "There was a draw";
  } else {
    return "The game has not been finished yet";
  }
};

console.log(
  calcWinState([
    ["o", "o", "x"],
    ["x", "", "o"],
    ["x", "o", ""],
  ])
);
