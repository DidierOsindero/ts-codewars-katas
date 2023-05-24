import { isValidCell, isValidSudoku } from "./isValidSudoku";
const validBoard = [
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

const invalidBoard = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const emptyBoard = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
describe("sudoku validator", () => {
  describe("isValidCell", () => {
    it("should return true if cell is valid", () => {
      expect(isValidCell(validBoard, 0, 0)).toBe(true);
    });
    it("should return false if cell is invalid", () => {
      expect(isValidCell(invalidBoard, 0, 0)).toBe(false);
    });

    it("should return true if cell is valid on an invalid board", () => {
      expect(isValidCell(invalidBoard, 2, 7)).toBe(true);
    });

    it("should return true if cell is empty", () => {
      expect(isValidCell(emptyBoard, 8, 7)).toBe(true);
    });
  });

  describe("isValidSudoku", () => {
    it("should return true if board is valid", () => {
      expect(isValidSudoku(validBoard)).toBe(true);
    });
    it("should return false if board is invalid", () => {
      expect(isValidSudoku(invalidBoard)).toBe(false);
    });
  });
});
