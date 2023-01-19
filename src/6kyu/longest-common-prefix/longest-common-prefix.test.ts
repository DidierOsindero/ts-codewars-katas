import { longestCommonPrefix } from "./longest-common-prefix";

test("Collects words by groups of first letter", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  expect(longestCommonPrefix(["power", "plant", "pin"])).toEqual("p");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  expect(longestCommonPrefix(["carwash", "racecar", "car"])).toEqual("");
  expect(longestCommonPrefix([" carwash", " racecar", " car"])).toEqual(" ");
});
