/*
OVERVIEW:
-set COMMON_PREFIX to the first word
-compare each letter of each word in the array to COMMON_PREFIX
-return "" if the start of a word does not MATCH COMMON_PREFIX
-shorten COMMON_PREFIX according to the amount of letters that match with the current word

-return COMMON_PREFIX

PSEUDOCODE:
set COMMON_PREFIX to INPUT_ARRAY[0]

for each WORD in INPUT_ARRAY
    if (WORD[0] does not equal COMMON_PREFIX[0])
        return ""

    for each INDEX in COMMON_PREFIX
        set LETTER to WORD[INDEX]
        set MATCHING_COMMON_PREFIX_VALUE = COMMON_PREFIX[INDEX]
            if (LETTER is not equal to MATCHING_COMMON_PREFIX_VALUE)
                set COMMON_PREFIX to COMMON_PREFIX sliced at INDEX (not including value at index INDEX)
                break out of for loop


return COMMON_PREFIX
*/

export function longestCommonPrefix(inputArray: string[]): string {
  let commonPrefix = inputArray[0];

  //iterate through each word in input array, checking against commonPrefix
  for (const word of inputArray) {
    //check if word matched commonPrefix at all
    if (word[0] !== commonPrefix[0]) {
      return "";
    }

    //iterate through each letter of current word
    for (let i = 0; i < commonPrefix.length; i++) {
      const letter = word[i];
      const matchingCommonPrefixValue = commonPrefix[i];

      if (letter !== matchingCommonPrefixValue) {
        commonPrefix = commonPrefix.slice(0, i);
        break;
      }
    }
  }

  return commonPrefix;
}

//TESTS
//--------------------------Check for short prefix
console.log(longestCommonPrefix(["flower", "flow", "flight"]), "=> fl");
//--------------------------Check for single letter prefix
console.log(longestCommonPrefix(["power", "plant", "pin"]), "=> p");
//--------------------------Check for no common prefix
console.log(longestCommonPrefix(["dog", "racecar", "car"]), '=> ""');
//--------------------------Check for no common prefix but common patterns
console.log(longestCommonPrefix(["carwash", "racecar", "car"]), '=> ""');
