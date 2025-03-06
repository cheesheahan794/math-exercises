function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Example usage
const randomNumber = getRandomArbitrary(1, 10);
console.log(randomNumber);
