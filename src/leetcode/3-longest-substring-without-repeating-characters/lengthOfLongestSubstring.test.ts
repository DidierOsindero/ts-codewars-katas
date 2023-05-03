import { lengthOfLongestSubstring } from "./repeatAttempt";

lengthOfLongestSubstring;
describe("lengthOfLongestSubstring", () => {
  it("should recognise repetition in special characters", () => {
    expect(lengthOfLongestSubstring("ab!!!!c")).toBe(3);
  });
  it("should recognise special characters as unique characters", () => {
    expect(lengthOfLongestSubstring("a!'/\"&^*@")).toBe(9);
  });

  it("should correctly identify longest substring when longest substring comes after a repeated character", () => {
    expect(lengthOfLongestSubstring("apple")).toBe(3);
  });

  it("should correctly identify longest substring with more complex string", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("should return 1 when all characters are the same", () => {
    expect(lengthOfLongestSubstring("aaa")).toBe(1);
  });
  it("should return 0 when given an empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("should correctly identify longest substring when substring begins between repeating characters", () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });
  it("should correctly identify longest substring when longest substring comes before a repeated character", () => {
    expect(lengthOfLongestSubstring("abcc")).toBe(3);
  });
  it("should correctly identify longest substring with a string of length 1", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });
  it("should correctly identify longest substring with a string containing multiple repeating characters", () => {
    expect(lengthOfLongestSubstring("aabbcde")).toBe(4);
  });
});
