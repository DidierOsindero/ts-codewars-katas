import { ICell } from "../leetcode/36-valid-sudoku/isValidSudoku2";

export function checkGrid(grid: ICell[][]): string[] {
  const clashArr: string[] = [];
  //Create a copy of grid that can be mutated
  grid = [...grid];
  grid.forEach((row) => (row = [...row]));
  //Iterate through each item
  grid.forEach((row, rowIdx) => {
    row.forEach((cell, columnIdx) => {
      //Check if cell has a value in it
      if (/[1-9]/.test(cell.val)) {
        const cellToValidate = grid[rowIdx][columnIdx];
        let squareCurrentRow = Math.floor(rowIdx / 3) * 3;
        let squareCurrentColumn = Math.floor(columnIdx / 3) * 3;

        for (let i = 0; i < 9; i++) {
          //Going down a column
          if (i !== rowIdx) {
            const currentCell = grid[i][columnIdx];

            //If found a match, push to clash arr
            if (currentCell.val === cellToValidate.val) {
              clashArr.push(`${rowIdx}${columnIdx}`, `${i}${columnIdx}`);
              currentCell.val = "";
              cellToValidate.val = "";
            }
          }

          //Going along a row
          if (i !== columnIdx) {
            const currentCell = grid[rowIdx][i];
            if (currentCell.val === cellToValidate.val) {
              clashArr.push(`${rowIdx}${columnIdx}`, `${rowIdx}${i}`);
              currentCell.val = "";
              cellToValidate.val = "";
            }
          }

          //Skip cell to validate and check if there number is duplicated in square
          const currentCellInSquare =
            grid[squareCurrentRow][squareCurrentColumn];
          const isSamePosition =
            squareCurrentColumn === columnIdx && squareCurrentRow === rowIdx;
          if (
            currentCellInSquare.val === cellToValidate.val &&
            !isSamePosition
          ) {
            clashArr.push(
              `${rowIdx}${columnIdx}`,
              `${squareCurrentRow}${squareCurrentColumn}`
            );
            currentCellInSquare.val = "";
            cellToValidate.val = "";
          }

          //If the next column is outside the square, skip to next row and first column in this square
          if (!((squareCurrentColumn + 1) % 3)) {
            squareCurrentRow++;
            squareCurrentColumn = Math.floor(columnIdx / 3) * 3;
          } else {
            squareCurrentColumn++;
          }
        }
      }
    });
  });
  // console.log(grid);

  return clashArr;
}

const board: ICell[][] = [
  [
    { val: "9", status: "user-defined" },
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

// console.log(checkGrid(board));
