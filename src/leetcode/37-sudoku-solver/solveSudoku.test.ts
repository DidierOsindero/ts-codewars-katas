import { isValidSudoku } from "../36-valid-sudoku/isValidSudoku";
import { solveSudoku } from "./solveSudoku";

describe("solveSudoku", () => {
  it("should correctly solve sudoku boards", () => {
    const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    solveSudoku(board);
    expect(isValidSudoku(board)).toBe(true);
  });
});
