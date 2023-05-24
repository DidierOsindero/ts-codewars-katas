import { letterCombinations } from "./letterCombinations";

describe("letterCombinations", () => {
  it("should return all possible combinations", () => {
    const received = letterCombinations("23");
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    for (let item of received) {
      expect(expected).toContainEqual(item);
    }
    expect(received).toHaveLength(expected.length);
  });

  it("should return empty array when given emtpy string", () => {
    expect(letterCombinations("")).toStrictEqual([]);
  });
});
