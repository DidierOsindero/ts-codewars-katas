import {
  ICell,
  isValidCell2,
  isValidSudoku2,
} from "../36-valid-sudoku/isValidSudoku2";

export function solveSudoku2(
  board: ICell[][],
  row: number = 0,
  column: number = 0
): boolean {
  // Base case => return if last board[row][column] on board is reached and it is valid
  if (row === 8 && column === 8 && board[row][column].val !== "") {
    return isValidCell2(board, row, column);
  }

  //Find next empty slot
  while (board[row][column].val !== "" && !(row === 8 && column === 8)) {
    const result = nextRowColumn(row, column);
    row = result[0];
    column = result[1];
  }

  //Have to backtrack if path is incorrect
  for (let candidate = 1; candidate < 10; candidate++) {
    board[row][column].val = candidate.toString();
    if (isValidCell2(board, row, column)) {
      //Check if it is a valid last cell
      if (row === 8 && column === 8) return true;

      //if somewhere further along the path does not work (returns false)
      // reset board[row][column].val to ""
      if (
        solveSudoku2(
          board,
          nextRowColumn(row, column)[0],
          nextRowColumn(row, column)[1]
        ) === false
      ) {
        board[row][column].val = "";
      } else return true;
    }
  }

  if (row === 0 && column === 0) return true;
  board[row][column].val = "";
  return false;
}

function nextRowColumn(row: number, column: number): number[] {
  if (column === 8) return [row + 1, 0];
  return [row, column + 1];
}

const board: ICell[][] = [
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "9", status: "pre-defined" },
    { val: "7", status: "pre-defined" },
    { val: "4", status: "pre-defined" },
    { val: "8", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "7", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "2", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "1", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "9", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "7", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "2", status: "pre-defined" },
    { val: "4", status: "pre-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "6", status: "pre-defined" },
    { val: "4", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "1", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "5", status: "pre-defined" },
    { val: "9", status: "pre-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "9", status: "pre-defined" },
    { val: "8", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "3", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "8", status: "pre-defined" },

    { val: "", status: "user-defined" },

    { val: "3", status: "pre-defined" },

    { val: "", status: "user-defined" },

    { val: "2", status: "pre-defined" },

    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "6", status: "pre-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },

    { val: "2", status: "pre-defined" },

    { val: "7", status: "pre-defined" },

    { val: "5", status: "pre-defined" },

    { val: "9", status: "pre-defined" },

    { val: "", status: "user-defined" },

    { val: "", status: "user-defined" },
  ],
];

const board2: ICell[][] = [
  [
    { val: "1", status: "user-defined" },
    { val: "2", status: "user-defined" },
    { val: "3", status: "pre-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "4", status: "pre-defined" },
    { val: "5", status: "user-defined" },
    { val: "6", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "7", status: "user-defined" },
    { val: "8", status: "pre-defined" },
    { val: "9", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "1", status: "pre-defined" },
    { val: "2", status: "pre-defined" },
    { val: "3", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "4", status: "user-defined" },
    { val: "5", status: "user-defined" },
    { val: "6", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "7", status: "pre-defined" },
    { val: "8", status: "user-defined" },
    { val: "9", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "pre-defined" },
    { val: "1", status: "user-defined" },
    { val: "2", status: "user-defined" },
    { val: "3", status: "user-defined" },
  ],
  [
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "4", status: "user-defined" },
    { val: "5", status: "user-defined" },
    { val: "6", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "pre-defined" },
    { val: "7", status: "user-defined" },
    { val: "8", status: "user-defined" },
    { val: "9", status: "user-defined" },
  ],
];

// console.log(solveSudoku2(board2), board2, isValidSudoku2(board2));
