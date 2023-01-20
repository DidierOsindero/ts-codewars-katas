import { lengthOfLastWord } from "./lengthOfLastWord";

test("Finds the length of the last word in a string", () => {
  expect(lengthOfLastWord("Hello World")).toEqual(5);
  expect(lengthOfLastWord("fly me   to   the moon  ")).toEqual(4);
  expect(lengthOfLastWord("  fly me   to   the moon")).toEqual(4);
  expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
  expect(lengthOfLastWord("Hello")).toEqual(5);
});
