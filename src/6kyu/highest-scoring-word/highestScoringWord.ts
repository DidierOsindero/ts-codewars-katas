//Link to Kata "Highest Scoring Word"
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript

/**
 * Given a string of words, find the highest scoring word.
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 * @param {string} str - input string containing words with spaces separating them.
 * @returns {string} the highest scoring word
 */

export const high = (str: string): string => {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const wordArr: string[] = str.split(" ");
  let maxSoFar: string = "";
  let maxCount: number = 0;

  for (const word of wordArr) {
    let wordCount: number = 0;
    for (const letter of word) {
      wordCount += alphabet.indexOf(letter) + 1;
    }
    if (wordCount > maxCount) {
      maxCount = wordCount;
      maxSoFar = word;
    }
  }
  return maxSoFar;
};
