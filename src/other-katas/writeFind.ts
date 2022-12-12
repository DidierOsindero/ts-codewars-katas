export const myFind = <T, U>(
  inputArr: T[],
  predicateFn: (element: T) => U
): T | undefined => {
  for (const item of inputArr) {
    if (predicateFn(item)) {
      return item;
    }
  }
  return undefined;
};
