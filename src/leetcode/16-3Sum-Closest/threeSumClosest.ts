/*
PSEUDOCODE:
sort NUMS
set CLOSEST to first triplet
for I from 0 up to (but not including) NUMS.length - 2:
    if (NUMS[I-1] === NUMS[I]) continue
    set L to I + 1
    set R to NUMS.length -1

    while L < R:
        set SUM to NUMS[I] + NUMS[L] + NUMS[R]
        check against CLOSEST

        if L < R and SUM < TARGET: 
            while NUMS[L] === NUMS[L + 1]:
                L++
            L++
        else if L < R and SUM > TARGET: 
            while NUMS[R] === NUMS[R + 1]:
                R--
            R--
        else:
            return SUM

return CLOSEST


*/
//   I  L     R
// [-4,-1, 1, 2], 1 => 2
// SUM = -3
// CLOSEST = -3

export function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] === nums[i]) continue;
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      closest =
        Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest;
      if (sum < target) {
        while (nums[l] === nums[l + 1]) l++;
        l++;
      } else if (sum > target) {
        while (nums[r] === nums[r - 1]) r--;
        r--;
      } else return sum;
    }
  }

  return closest;
}
