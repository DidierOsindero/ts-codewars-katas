import { threeSumClosest } from "./threeSumClosest";

describe("threeSumClosest", () => {
  it("should return a number", () => {
    expect(typeof threeSumClosest([0, 0, 0], 0)).toBe("number");
  });

  it("should correctly identify closest sum", () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  });

  it("should correctly identify closest sum when duplicates are used", () => {
    expect(
      threeSumClosest(
        [-1, 1, 1, 2, 2, 2, 2, -4, -4, -4, -1, -1, -1, -1, 2, 2, 2, 2, 2, 1, 1],
        7
      )
    ).toBe(6);
  });

  it("should return the target if possible", () => {
    expect(threeSumClosest([-1, 0, 1], 0)).toBe(0);
  });

  it("should return sum of input array if length of array is 3", () => {
    expect(threeSumClosest([10, 20, 30], 1)).toBe(60);
  });
});
