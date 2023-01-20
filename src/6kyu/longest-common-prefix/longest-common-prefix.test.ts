import { longestCommonPrefix } from "./longest-common-prefix";

test("Finds the longest common prefix in an array of strings", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  expect(longestCommonPrefix(["power", "plant", "pin"])).toEqual("p");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  expect(longestCommonPrefix(["carwash", "racecar", "car"])).toEqual("");
  expect(longestCommonPrefix([" carwash", " racecar", " car"])).toEqual(" ");
});
