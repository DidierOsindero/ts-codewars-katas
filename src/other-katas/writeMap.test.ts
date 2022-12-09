import { myMap } from "./writeMap";

test("myMap maps through an array and returns a new array with values transformed by the callback", () => {
  expect(myMap(["H"], (el) => el + "i")).toEqual(["Hi"]);
  expect(myMap(["Jim", "Tom"], (el) => el + " Jameson")).toEqual([
    "Jim Jameson",
    "Tom Jameson",
  ]);
  expect(myMap([1, 2, 3], (el) => el * 2)).toEqual([2, 4, 6]);
  expect(myMap([], (el) => el + "i")).toEqual([]);
});
