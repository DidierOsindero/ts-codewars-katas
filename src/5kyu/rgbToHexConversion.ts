const rgbToHex = (r: number, g: number, b: number): string => {
  let hexReturn: string = "";
  const rgbArray = [r, g, b];

  for (const rgbValue of rgbArray) {
    if (rgbValue > 255) {
      hexReturn += "FF";
    } else if (rgbValue <= 0) {
      hexReturn += "00";
    } else {
      let rgbString = "";
      rgbString += convertToHex(Math.floor(rgbValue / 16));
      rgbString += convertToHex(rgbValue % 16);
      hexReturn += rgbString;
    }
  }

  return hexReturn;
};

const convertToHex = (decValue: number): string => {
  let outputString = "";
  let hexValues = "0123456789ABCDEF".split("");

  if (decValue < 0) {
    outputString += "0";
  } else if (decValue > 15) {
    outputString += "F";
  } else {
    outputString += hexValues[decValue];
  }
  return outputString;
};

console.log(rgbToHex(173, 255, 47));

/*
name: converter
input: 
    DEC_VALUE: number
returns: 
    number
=========================
set OUTPUT_STRING to empty string ""
set HEX_VALUES to an array with all possible one digit hexidecimal values

if DEC_VALUE < 0
    append the string '0' to OUTPUT_STRING
else if DEC_VALUE > 15 
    append the string 'F' to OUTPUT_STRING
else
    push HEX_VALUES [DEC_VALUE] to OUTPUT_STRING

return OUTPUT_STRING
*/

// set OUTPUT_STRING to empty string ""

// push DEC_VALUE divided 16 rounded down to OUTPUT_STRING
// push remainder of DEC_VALUE divided by 16 to OUTPUT_STRING

export default rgbToHex;