export const myEvery = <T, U>(
  inputArr: T[],
  predicateFn: (element: T) => U
): boolean => {
  for (const item of inputArr) {
    if (!predicateFn(item)) {
      return false;
    }
  }
  return true;
};

console.log(myEvery([2, 6, 8, 2, 7], (el) => el % 2 === 0));
console.log(myEvery([2, 6, 8, 2, 2], (el) => el % 2 === 0));
