import { myEvery } from "./writeEvery";

test("myEvery maps through an array and returns true if every value in the input array meets the condition tested for in the predicate callback function", () => {
  expect(myEvery([1, 2, 3], (el) => el % 2)).toBe(false);
  expect(myEvery([2, 6, 8, 2, 7], (el) => el % 2 === 0)).toBe(false);
  expect(myEvery([2, 6, 8, 2, 2], (el) => el % 2 === 0)).toBe(true);
  expect(myEvery([2, 6, 8, 2, 7], (v) => v < 10)).toBe(true);
  expect(myEvery(["hi", "hi"], (v) => v === "hi")).toBe(true);
});
