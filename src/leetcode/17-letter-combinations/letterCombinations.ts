/*
- ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
set SLOTS to DIGITS.length
create a dictionary for digits
set RESULT to an empty array

create a two dimensional array representing slots

call combine with SLOT as 0 and COMBINED_STR as ""



=======================
function name - combine
input 
- COMBINED_STR: string
- SLOT: number
return - undefined

if SLOT === SLOTS - 1:
    for each LETTER in SLOT push COMBINED_STR + LETTER to RESULT
    return

for each LETTER in SLOT call COMBINE with SLOT + 1 and COMBINED_STR + LETTER
*/
export function letterCombinations(digits: string): string[] {
  if (digits === "") return [];
  const result: string[] = [];
  const letterMatrix = matrix(digits);
  combine(0, "");
  return result;

  function combine(slot: number, combinedStr: string) {
    if (slot === digits.length - 1) {
      letterMatrix[slot].forEach((letter) => result.push(combinedStr + letter));
      return;
    }

    letterMatrix[slot].forEach((letter) =>
      combine(slot + 1, combinedStr + letter)
    );
  }
}

function matrix(digits: string): string[][] {
  type digitType = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  const dict = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const returnArr: string[][] = [];

  digits.split("").forEach((digit) => returnArr.push(dict[digit as digitType]));
  return returnArr;
}
