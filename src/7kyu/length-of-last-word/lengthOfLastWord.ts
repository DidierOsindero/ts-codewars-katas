//
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal
// substring
// consisting of non-space characters only.
//

/*
OVERVIEW:
-trim ends from INPUT_STRING
-replace all spaces with %
-split INPUT_STRING by %
-return length of last array item in split INPUT_STRING

PSEUDOCODE:
set TRIMMED_INPUT_STRING = INPUT_STRING with empty spaces trimmed from start and end
set STRING_NO_SPACES = TRIMMED_INPUT_STRING with all empty spaces replaced with '%'
set SPLIT_STRING = STRING_NOSPACES split by '%'
set LAST_WORD = SPLIT_STRING[SPLIT_STRING.length-1]
return length of LAST_WORD
*/

export function lengthOfLastWord(inputString: string): number {
  const trimmedInputString = inputString.trim();
  const stringNoSpaces = trimmedInputString.replace(/ /g, "%");
  const splitString = stringNoSpaces.split("%");
  const lastWord = splitString[splitString.length - 1];
  return lastWord.length;
}

/*

*/

//TESTS
console.log(lengthOfLastWord("Hello World"), "=> 5"); // test for normal case
console.log(lengthOfLastWord("fly me   to   the moon  "), "=> 4"); //test for case with empty spaces at end
console.log(lengthOfLastWord("  fly me   to   the moon"), "=> 4"); //test for case with empty spaces at beginning
console.log(lengthOfLastWord("luffy is still joyboy"), "=> 6"); //test for case with more than two words
console.log(lengthOfLastWord("Hello"), "=> 5"); //test for case with one word
