export const myFilter = <T, U>(
  inputArr: T[],
  predicateFn: (element: T) => U
): T[] => {
  const returnArr: T[] = [];

  for (const item of inputArr) {
    if (predicateFn(item)) {
      returnArr.push(item);
    }
  }
  return returnArr;
};

console.log(myFilter([1, 2, 3], (el) => el % 2));
console.log(myFilter(["a", 3, null], (el) => el));
console.log(myFilter([10, 50, -20, -10, 100], (v) => v < 11));
console.log(myFilter("AbcDeFgHI".split(""), (ch) => ch.toUpperCase() === ch));
