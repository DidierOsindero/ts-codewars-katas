import { myFilter } from "./writeFilter";

test("myFilter maps through an array and returns a new array with values transformed by the callback", () => {
  expect(myFilter([1, 2, 3], (el) => el % 2)).toEqual([1, 3]);
  expect(myFilter(["a", 3, null], (el) => el)).toEqual(["a", 3]);
  expect(myFilter([10, 50, -20, -10, 100], (v) => v < 11)).toEqual([
    10, -20, -10,
  ]);
  expect(
    myFilter("AbcDeFgHI".split(""), (ch) => ch.toUpperCase() === ch)
  ).toEqual(["A", "D", "F", "H", "I"]);
});
