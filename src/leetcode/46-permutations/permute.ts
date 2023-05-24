// function permute(nums: number[]): number[][] {
//   const result: number[][] = [];
//   if (nums.length === 1) return [nums];
//   iterate(nums, 0);
//   return result;

//   function iterate(arr: number[], startIdx: number): void {
//     if (startIdx === arr.length - 2) {
//       result.push([...arr]);
//       const alternativeArr = swap(arr, arr.length - 1, arr.length - 2);
//       result.push(alternativeArr);
//       return;
//     }
//     for (let i = startIdx; i < arr.length; i++) {
//       swap(arr, startIdx, i, "yes");
//       iterate([...arr], startIdx + 1);
//     }
//   }
// }

// function swap(
//   arr: number[],
//   idx1: number,
//   idx2: number,
//   inPlace?: "yes"
// ): number[] {
//   if (inPlace) {
//     const temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
//     return arr;
//   }
//   const newArr = [...arr];
//   const temp = newArr[idx1];
//   newArr[idx1] = newArr[idx2];
//   newArr[idx2] = temp;
//   return newArr;
// }
function permute(
  nums: number[],
  path: number[] = [],
  answer: number[][] = []
): number[][] {
  if (nums.length === 0) {
    answer.push([...path]);
    return answer;
  }
  for (let i = 0; i < nums.length; i++) {
    path.push(nums[i]);
    const choices = nums.filter((el, idx) => idx !== i);
    permute(choices, path, answer);
    path.pop();
  }
  return answer;
}

console.log(permute([1, 2, 3, 4, 5, 6, 7, 8, 10]));
