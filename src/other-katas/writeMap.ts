export const myMap = <I, O>(
  inputArr: I[],
  callback: (element: I) => O
): O[] => {
  let resultArr: O[] = [];
  for (const el of inputArr) {
    resultArr.push(callback(el));
  }
  return resultArr;
};

const arr1 = ["Jim", "Tom"];
console.log(myMap(arr1, (el) => el + " Jameson"));
