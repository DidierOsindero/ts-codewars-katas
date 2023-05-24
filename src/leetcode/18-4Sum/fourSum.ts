/*
PSEUDOCODE:

set RESULT to empty number [][]
sort NUMS

for L from 0 up to (not including) NUMS.length -3:  
    if NUMS[L] = NUMS[L-1]:
        skip loop
    for LM from L + 1 up to (not including) NUMS.length -2: 
        set RM to LM + 1, set R to NUMS.length -1 
       if NUMS[LM] = NUMS[LM+1]:
            skip loop
        while RM < R:
            if NUMS[L] + NUMS[LM] + NUMS[RM] + NUMS[R] < TARGET:
                while NUMS[RM] = NUMS[RM+1]: 
                    RM++
                RM++
            else if NUMS[L] + NUMS[LM] + NUMS[RM] + NUMS[R] > TARGET:
                while NUMS[RM] = NUMS[R-1]: 
                    R--
                R--
            else:
                push NUMS[L] + NUMS[LM] + NUMS[RM] + NUMS[R] to RESULT
                while NUMS[RM] = NUMS[RM+1]: 
                    RM++
                while NUMS[RM] = NUMS[R-1]: 
                    R--
                RM++
                R--
return RESULT

*/
//      L  LM RM R
//[-2, -1, 0, 0, 1, 2]
// [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]

export function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let l = 0; l < nums.length - 3; l++) {
    if (nums[l] === nums[l - 1]) continue;
    for (let lm = l + 1; lm < nums.length - 2; lm++) {
      if (nums[lm] === nums[lm - 1] && lm !== l + 1) continue;
      let rm = lm + 1;
      let r = nums.length - 1;
      while (rm < r) {
        if (nums[l] + nums[lm] + nums[rm] + nums[r] < target) rm++;
        else if (nums[l] + nums[lm] + nums[rm] + nums[r] > target) r--;
        else {
          result.push([nums[l], nums[lm], nums[rm], nums[r]]);
          while (nums[rm] === nums[rm + 1]) rm++;
          while (nums[r] === nums[r - 1]) r--;
          rm++;
          r--;
        }
      }
    }
  }
  return result;
}

fourSum([1, 0, -1, 0, -2, 2], 0);
