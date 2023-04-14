import strStr from "./strStr";

describe("Needle and Haystack (strStr)", () => {
  it("should return 0 if needle is found at start of haystack", () => {
    expect(strStr("abc", "a")).toBe(0);
  });

  it("should return 0 if needle is equal to haystack and is a single character", () => {
    expect(strStr("a", "a")).toBe(0);
  });

  it("should return 0 if needle is equal to haystack and is multiple characters", () => {
    expect(strStr("abc", "abc")).toBe(0);
  });

  it("should return correct index of the start of the needle in the haystack", () => {
    expect(strStr("abdefgbca", "bc")).toBe(6);
  });

  it("should return correct index of start of needle when it contains repeated letters", () => {
    expect(strStr("abzzzc", "zzz")).toBe(2);
  });

  it("should return -1 if needle is an empty string", () => {
    expect(strStr("abc", "")).toBe(-1);
  });

  it("should return -1 if needle is not in haystack", () => {
    expect(strStr("abc", "z")).toBe(-1);
  });
});
