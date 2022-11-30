type Status = "not included" | "matched" | "included";

interface IChar {
  value: string;
  status: Status;
}

type MarkedGuess = [IChar, IChar, IChar, IChar, IChar];

export function markWordleGuess(
  guess: string,
  hiddenTaget: string
): MarkedGuess {
  let MarkedGuess: MarkedGuess = [
    { value: guess[0], status: "not included" },
    { value: guess[1], status: "not included" },
    { value: guess[2], status: "not included" },
    { value: guess[3], status: "not included" },
    { value: guess[4], status: "not included" },
  ];

  findMatches(MarkedGuess, hiddenTaget);
  if (guess === hiddenTaget) {
    return MarkedGuess;
  }

  findIncluded(MarkedGuess, hiddenTaget);

  return MarkedGuess;
}

function findMatches(markedGuess: MarkedGuess, hiddenTaget: string): void {
  for (let charIdx in markedGuess) {
    if (markedGuess[charIdx].value === hiddenTaget[charIdx]){
      markedGuess[charIdx].status = "matched";
    }
  }
}

function findIncluded(markedGuess: MarkedGuess, hiddenTarget: string): void {
  const refHiddenTarget: string[] = [...hiddenTarget.split("")];

  for (let charIdx in markedGuess) {
    if (markedGuess[charIdx].status === "matched") {
      refHiddenTarget[charIdx] = "";
    }
  }

  for (let charIdx in markedGuess) {
    if (
      markedGuess[charIdx].status !== "matched" &&
      refHiddenTarget.includes(markedGuess[charIdx].value)
    ) {
      markedGuess[charIdx].status = "included";
      refHiddenTarget[refHiddenTarget.indexOf(markedGuess[charIdx].value)] = "";
    }
  }
}
