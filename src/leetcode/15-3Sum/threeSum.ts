/*
OUTLINE:
- Create RETURN_ARR
- Sort NUMS in ascending order
- [-4,-1,-1,0,1,2,5]
- Create a pointer at each end of array called START and END
- Loop through from 0 to NUMS.length -3 START
- While START + 1 < END:
- Find CANDIDATE from START and END (NUMS[START] + NUMS[END] = -CANDIDATE)
- If CANDIDATE is in array (not at START or END) push [NUMS[START], NUMS[END], CANDIDATE] to RETURN_ARR
- Else END -= 1




- Count all occurences of each number and store frequency in an object {-4: 1, -1: 2, 0: 1...}
- Create a deep copy of that object

//We can only determine a CANDIDATE once we have chosen two other numbers 
// Need to find a way of ruling out certain pairs before searching for their triplet

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/

// export function threeSum(nums: number[]): number[][] {
//   const returnArr = [];
//   nums.sort();
//   for (let start = 0; start < nums.length - 2; start++) {
//     let end = nums.length - 1;
//     let mid = start + 1;
//     while (start + 1 < end) {
//       const candidate =
//         (nums[start] + nums[end]) * -1 === -0
//           ? 0
//           : (nums[start] + nums[end]) * -1;
//       const candidateIdx = nums.findIndex((val, idx) => {
//         return val === candidate && idx >= mid && idx < end;
//       });
//       if (nums[candidateIdx] !== undefined) {
//         returnArr.push([nums[start], nums[end], candidate]);
//         mid = candidateIdx + 1;
//       } else {
//         mid = start + 1;
//         end--;
//       }
//     }
//   }
//   console.log(returnArr);
//   return returnArr;
// }

/*
PSEUDOCODE:
set RETURN_ARRAY to an empty number[][]
set START to 0 and END to NUMS.length -1
set CHECKED to an empty set

loop from START up to less than NUMS.length -2:
  if CHECKED does not have NUMS[START]:
    set CURRENT_TRIPLETS to empty number[][]
    while START + 1 < END:
      CANDIDATE = (NUMS[START] + NUMS[END]) * -1
      set IDX to first index of CANDIDATE between START and END

      if (IDX) and [NUMS[START], NUMS[END], CANDIDATE] is not in CURRENT_TRIPLETS:
        push [NUMS[START], NUMS[END], CANDIDATE] to RETURN_ARR

      end--
  
    add NUMS[START] to CHECKED

return RETURN_ARRAY
- read through array
- identify two numbers and calculate candidate
- find candidate 
- ensure triplet is not already in RETURN_ARRAY - Make sure that every possible combination for current START has been explored and then remove all instances from input array
*/
// export function threeSum(nums: number[]): number[][] {
//   const returnArr: number[][] = [];
//   let start = 0;

//   while (start < nums.length - 2) {
//     let end = nums.length - 1;
//     const currentTriplets: number[][] = [];
//     while (start + 1 < end) {
//       const candidate =
//         (nums[start] + nums[end]) * -1 === -0
//           ? 0
//           : (nums[start] + nums[end]) * -1;
//       const candidateIdx = nums.findIndex((val, idx) => {
//         return val === candidate && idx > start && idx < end;
//       });

//       if (
//         candidateIdx > -1 &&
//         !currentTriplets.find((arr) =>
//           arr.every(
//             (el, idx) => el === [nums[start], nums[end], candidate].sort()[idx]
//           )
//         )
//       ) {
//         currentTriplets.push([nums[start], nums[end], candidate].sort());
//       }

//       end--;
//     }
//     returnArr.push(...currentTriplets);
//     nums = nums.filter((el) => el !== nums[start]);
//   }
//   console.log(returnArr);
//   return returnArr;
// }

//PSEUDOCODE:
/*

sort INPUT
set RETURN_ARRAY to empty number[][]

for each IDX in INPUT up to but not including last two items:
  if (IDX + 1 === IDX):
    continue

  set L to IDX + 1
  set R to INPUT.length -1
  set CANDIDATE to -INPUT[IDX]

  while L < R:

    while L < R and L + 1 === L:
      L++
    while L < R and R - 1 === R:
      R--

    if CANDIDATE is greater than INPUT[R] + INPUT[L]:
      L++
    else if CANDIDATE is less than INPUT[R] + INPUT[L]:
      R++
    else
      push triplet to RETURN_ARRAY

return RETURN_ARRAY

                   I  L     R
              [-4,-1,-1,0,1,2]
Output: [[-1,-1,2],[-1,0,1]]
*/

export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const returnArr: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] === nums[i]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    let candidate = nums[i] * -1 === -0 ? 0 : nums[i] * -1;

    while (l < r) {
      if (candidate > nums[l] + nums[r]) l++;
      else if (candidate < nums[l] + nums[r]) r--;
      else {
        returnArr.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] + 1 === l) l++;
        while (l < r && nums[r] - 1 === r) r--;
        l++;
        r--;
      }
    }
  }
  return returnArr;
}

threeSum([0, 0, 0, 0]);
threeSum([-1, 0, 1, 2, -1, -4]);
