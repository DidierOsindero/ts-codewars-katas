import { fourSum } from "./fourSum";

describe("fourSum", () => {
  it("should correctly find quadruplets", () => {
    const received = fourSum([1, 0, -1, 0, -2, 2], 0);
    const expected = [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ];
    expect(received).toHaveLength(expected.length);

    for (let item of expected) {
      expect(received).toContainEqual(item);
    }
  });
});
