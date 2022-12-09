import fs from "fs/promises";

async function readFileAndSolveProblem() {
  const inputRaw = await fs.readFile(
    "./src/other-katas/advent-of-code/inputs/inputDay1A.txt",
    { encoding: "utf8" }
  );
  const inputLines: string[] = inputRaw.split("\n");
  console.log({ inputLines });

  //TODO: solve the problem here, based on inputLines
}

readFileAndSolveProblem();
