/*
OVERVIEW:
- create a variable called MAX_SO_FAR
- create a set called SEEN
- iterate through INPUT and check if SEEN has CURRENT_CHAR
- if it does, LOOP through SEEN and DELETE first item of SEEN until you delete the value that equals CURRENT_CHAR then stop
- add CURRENT_CHAR to SEEN
- if MAX_SO_FAR is less than SEEN.SIZE, then MAX_SO_FAR is equal to SEEN.SIZE
- return MAX_SO_FAR

PSEUDOCODE:
set MAX_SO_FAR to 0

set SEEN to a new set

for each CURRENT_CHAR of INPUT:
    if SEEN has CURRENT_CHAR:
        WHILE true:
            remove first item from INPUT and delete this item from SEEN also
            if INPUT[0] = CURRENT_CHAR:
                break
    else:
        add CURRENT_CHAR to SEEN
    
    if MAX_SO_FAR is less than SEEN.size:
        MAX_SO_FAR is equal to SEEN.size

return MAX_SO_FAR
*/

export const lengthOfLongestSubstring = (input: string): number => {
  let maxSoFar = 0;
  let ref = input;
  const seen = new Set();

  for (let currentChar of input) {
    if (seen.has(currentChar)) {
      while (seen.has(currentChar)) {
        seen.delete(ref[0]);
        ref = ref.slice(1);
      }
    }
    seen.add(currentChar);

    maxSoFar = Math.max(seen.size, maxSoFar);
  }
  return maxSoFar;
};

// export const lengthOfLongestSubstring = (input: string): number => {
//   let max = 0;
//   let start = 0;
//   let seen = new Set();

//   for (let end = 0; end < input.length; end++) {
//     const current = input[end];
//     if (seen.has(current)) {
//       while (seen.has(current)) {
//         seen.delete(input[start]);
//         start++;
//       }
//     }

//     seen.add(current);
//     max = Math.max(max, seen.size);
//   }
//   return max;
// };
