import { threeSum } from "./threeSum";

describe("3Sum", () => {
  it("should return [[0,0,0]] when given [0,0,0]", () => {
    const received = threeSum([0, 0, 0]);
    const expected = [[0, 0, 0]];
    expect(received).toStrictEqual(expected);
  });

  it("should correctly identify all distinct triplets", () => {
    const received = threeSum([0, 0, 0, 0]);
    const expected = [[0, 0, 0]];
    expect(received).toStrictEqual(expected);
  });

  it("should correctly identify all distinct triplets (when two out of three numbers are the same)", () => {
    const received = threeSum([1, 1, -2]);

    //-------------------------------------------------All triplets are ordered in ascending order by the algorithm
    const expected = [[-2, 1, 1]];
    expect(received).toStrictEqual(expected);
  });

  it("should correctly identify all possible distinct triplets (when numbers are not all the same)", () => {
    const received = threeSum([-1, 0, 1, 2, -1, -4]);
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(received).toHaveLength(expected.length);

    for (let item of expected) {
      expect(received).toContainEqual(item);
    }
  });

  it("should work for larger inputs", () => {
    const received = threeSum([
      1, 2, 3, 5, 50, 700, -701, 1000, -1001, 25, -30, 52, 54, -49, -100, 34,
      -353, -7, -4,
    ]);

    const expected = [
      [-1001, 1, 1000],
      [-30, 5, 25],
      [-30, -4, 34],
      [-4, 1, 3],
      [-7, 2, 5],
      [-701, 1, 700],
    ];

    expect(received).toHaveLength(expected.length);

    for (let item of expected) {
      expect(received).toContainEqual(item);
    }
  });

  it("should return an empty array if no triplets are found", () => {
    expect(threeSum([1, 2, 3])).toStrictEqual([]);
  });
});
