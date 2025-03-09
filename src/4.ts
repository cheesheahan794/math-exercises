import * as math from "mathjs";

export const randomTsCode = () => {
  // Use math.random to generate a random number between 0 and 10
  const randomNumber = math.randomInt(10);
  console.log(`Random number: ${randomNumber}`);
};
