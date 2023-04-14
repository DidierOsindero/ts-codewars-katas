/*
OUTLINE:
- Calculate length of NEEDLE and call it NEEDLE_LENGTH
- loop through haystack and return I if the substring from I to I + NEEDLE_LENGTH -1 is equal to the NEEDLE
- return -1

PSEUDOCODE:
set NEEDLE_LENGTH to length of NEEDLE

for I from 0 up to (but not including) length of HAYSTACK - NEEDLE_LENGTH:
    CANDIDATE = substring from HAYSTACK[i] to HAYSTACK[i + NEEDLE_LENGTH -1]
    if (CANDIDATE is equal to NEEDLE):
        return I

return -1
*/

// export default function strStr(haystack: string, needle: string): number {
//   if (needle === "") return -1;
//   const needleLength = needle.length;

//   for (let i = 0; i <= haystack.length - needleLength; i++) {
//     const candidate = haystack.slice(i, i + needleLength);
//     if (candidate === needle) return i;
//   }
//   return -1;
// }

export default function strStr(haystack: string, needle: string): number {
  if (needle === "") return -1;
  return haystack.indexOf(needle);
}
