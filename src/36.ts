function sumSquareDifference(numbers: number[]): number {
  let sum = numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0);
  let difference = numbers[0] * (numbers[0] - 1) / 2;
  return Math.abs(sum - difference);
}
