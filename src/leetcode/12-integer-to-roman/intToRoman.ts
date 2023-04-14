export default function intToRoman(num: number): string {
  let returnString = "";
  let pos = 0;
  while (num > 0) {
    const currentDigit = num % 10;
    if (currentDigit !== 0) {
      const poweredDigit = currentDigit * 10 ** pos;
      returnString = convert(poweredDigit.toString()) + returnString;
    }
    num = Math.floor(num / 10);
    pos++;
  }
  return returnString;
}

function convert(numAsString: string): string {
  const baseNumerals: [number, string][] = [
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
  ];
  const numAsInt = parseInt(numAsString);
  const firstDigit = parseInt(numAsString[0]);

  let i = 0;
  while (i < 6 && baseNumerals[i + 1][0] <= numAsInt) i++;

  switch (firstDigit) {
    case 4:
      return baseNumerals[i][1] + baseNumerals[i + 1][1];

    case 9:
      return baseNumerals[i - 1][1] + baseNumerals[i + 1][1];

    default:
      const firstDigitOfReferenceNumeral = parseInt(
        baseNumerals[i][0].toString()[0]
      );
      const repetitions = firstDigit - firstDigitOfReferenceNumeral;

      if (firstDigit < 5) return baseNumerals[i][1].repeat(repetitions + 1);
      return baseNumerals[i][1] + baseNumerals[i - 1][1].repeat(repetitions);
  }
}

/*
OUTLINE:
- Calculate which number numerals it is between
- handle if it starts with a 4 or a 9
- do the necessary additions of 1s and 5s
-return number
*/

// Swapped Numerals --> 9 === IX || 400 === CD --> If the current digit is a 4 or a 9 then it will be a swapped numeral
// Repeated numeral --> 20 === XX || 300 === CCC --> If current digit is below 4 multiply required power of ten by digit
// If above 5 but below nine, place 5 times 10 to necessary power first then repeat necessary power of ten required number of times

// =============You can convert each number in isolation===========

/*
TESTS
console.log(intToRoman(1)) //=> I
console.log(intToRoman(10)) //=> X
console.log(intToRoman(9)) //=> IX
console.log(intToRoman(70)) //=> LXX
console.log(intToRoman(90)) //=> XC
console.log(intToRoman(91)) //=> XCI
console.log(intToRoman(400)) //=> CD
console.log(intToRoman(1994)) //=> MCMXCIV
*/
