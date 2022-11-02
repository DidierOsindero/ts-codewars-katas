/**
 * Given a string array containing strings with one of four simple assembler commands, create a function which interprets the commands.
 * @param {string[]} instructionsArray - array of strings containing assembler commands
 * @returns {object} an object containing the keys that have been created by the assembler commands and their values
 */

// function simpleInterpreter(instructionsArray) {
//   const dictionary = {};
//   for (i = 0; i < instructionsArray.length; i++) {
//     const splitInstruction = instructionsArray[i].split(" ");

//     const command = splitInstruction[0];
//     const x = splitInstruction[1];
//     const y = splitInstruction[2] || null;

//     if (command === "mov") {
//       if (isRegister(y)) {
//         dictionary[x] = Number(dictionary[y]);
//       }
//       if (isConstant(y)) {
//         dictionary[x] = Number(y);
//       }
//     } else if (command === "inc") {
//       dictionary[x] += 1;
//     } else if (command === "dec") {
//       dictionary[x] -= 1;
//     } else if (command === "jnz") {
//       if (
//         (isRegister(x) && dictionary[x] !== 0) ||
//         (isConstant(x) && x !== 0)
//       ) {
//         if (isRegister(y)) {
//           i += dictionary(y) - 1;
//         } else if (isConstant(y)) {
//           i += y - 1;
//         }
//       }
//     }
//   }
//   return dictionary;
// }

// function isRegister(char) {
//   return /[a-z]/i.test(char);
// }
// function isConstant(char) {
//   return /[0-9]/.test(char);
// }

//REFACTORED
function simpleInterpreter(instructionsArray) {
  const dictionary = {};
  for (i = 0; i < instructionsArray.length; i++) {
    const splitInstruction = instructionsArray[i].split(" ");
    const command = splitInstruction[0];
    const x = splitInstruction[1];
    const y = splitInstruction[2] || null;

    switch (command) {
      case "mov":
        isRegister(y)
          ? (dictionary[x] = Number(dictionary[y]))
          : (dictionary[x] = Number(y));
        break;

      case "inc":
        dictionary[x] += 1;
        break;

      case "dec":
        dictionary[x] -= 1;
        break;

      case "jnz":
        if (
          (isRegister(x) && dictionary[x] !== 0) ||
          (isConstant(x) && x !== 0)
        ) {
          isRegister(y) ? (i += dictionary(y) - 1) : (i += y - 1);
        }
        break;
    }
  }
  return dictionary;
}

function isRegister(char) {
  return /[a-z]/i.test(char);
}
function isConstant(char) {
  return /[0-9]/.test(char);
}

module.exports = simpleInterpreter;

/*
name: simpleAssembler
params:
  -instructionsArray: string []
returns: object
================================
set DICTIONARY to an empty object {}
foreach index I in INSTRUCTIONARRAY(use trad for loop):

  set SPLITINSTRUCTION to INSTRUCTIONARRAY[I] split by an empty space
  
  set COMMAND to SPLITINSTRUCTION [0]
  set X to SPLITINSTRUCTION [1]
  set Y to SPLITINSTRUCTION [2] or null (if this index doesn't exist)
  
  if COMMAND is equal to "mov":
    if Y is a letter (i.e register):
      set DICTIONARY [X] to DICTIONARY [Y] converted to an integer
    elseif Y is a number (i.e a value):
      set DICTIONARY [x] to Y converted to an integer
      
  if COMMAND is equal to "inc":
    set DICTIONARY[X] to X + 1
  
  if COMMAND is equal to "dec":
    set DICTIONARY[X] to X - 1
    
  if COMMAND is equal to "jnz": 
    if X is a letter and DICTIONARY[X] is not equal to 0:
      if Y is a letter (i.e register):
        set I to I + DICTIONARY[Y] - 1
    
      if Y is a number (i.e value):
        set I to I + Y -1
        
    elseif X is a number and X is not equal to 0:
      if Y is a letter (i.e register):
        set I to I + DICTIONARY[Y] - 1
    
      if Y is a number (i.e value):
        set I to I + Y - 1
*/
