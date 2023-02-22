/*
OVERVIEW:
1. set LONGEST_SO_FAR to 0
2. for each character, check all possible substrings starting from that character, if a repeated character is found, start checking from that character instead
3. if LENGTH is greater than LONGEST_SO_FAR THEN LONGEST_SO_FAR = LENGTH
4. return LONGEST_SO_FAR

PSEUDOCODE:
set LONGEST_SO_FAR to 1
set START to 0
set MAP to empty object

for END from 0 to length of S:
    set CURRENT_CHAR to S[END]

    if (MAP[CURRENT_CHAR] is not undefined):
      set START = MAP[CURRENT_CHAR] + 1
      MAP = an empty object
      set END to START - 1

    else:
      MAP[CURRENT_CHAR] = END
      set SUBSTRING_LENGTH = END - START + 1

      if (LONGEST_SO_FAR < SUBSTRING_LENGTH):
          set LONGEST_SO_FAR to SUBSTRING_LENGTH


return LONGEST_SO_FAR

*/

export function lengthOfLongestSubstring(s: string): number {
  let longestSoFar = 0;
  let start = 0;
  let map: { [key: string]: number } = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    if (map[currentChar] !== undefined) {
      start = map[currentChar] + 1;
      map = {};
      end = start - 1;
    } else {
      map[currentChar] = end;
      const substringLength = end - start + 1;

      if (longestSoFar < substringLength) {
        longestSoFar = substringLength;
      }
    }
  }
  return longestSoFar;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

// /*
// OVERVIEW:
// 1. set SEEN to a new set, set LONGEST_SO_FAR to 0, set START to 0
// 2. for END from 0 to length of S (not including)
// 3. while SEEN has s[END], delete s[START] and START += 1
// 4. Add s[END] to SEEN and check if length is greater than LONGEST_SO_FAR (if so LONGEST_SO_FAR THEN LONGEST_SO_FAR = LENGTH)
// 5. return LONGEST_SO_FAR
// */
// export function lengthOfLongestSubstring(s: string): number {
//   let longestSoFar = 0;
//   const seen = new Set();
//   let start = 0;

//   for (let end = 0; end < s.length; end++) {
//     while (seen.has(s[end])) {
//       seen.delete(s[start]);
//       start += 1;
//     }

//     seen.add(s[end]);
//     longestSoFar = Math.max(seen.size, longestSoFar);
//   }

//   return longestSoFar;
// }
