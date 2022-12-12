import { myFind } from "./writeFind";

test("myFind maps through an array and returns the first value in the input array that meets the condition tested for in the predicate callback function", () => {
  expect(myFind([1, 2, 3], (el) => el % 2)).toEqual(1);
  expect(myFind(["a", 3, null], (el) => el)).toEqual("a");
  expect(myFind([10, 50, -20, -10, 100], (v) => v < 11)).toEqual(10);
  expect(
    myFind("AbcDeFgHI".split(""), (ch) => ch.toUpperCase() === ch)
  ).toEqual("A");
  expect(myFind([1, 2, 3], (v) => v > 3)).toEqual(undefined);
});
