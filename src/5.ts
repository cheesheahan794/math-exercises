 
// Get a random number between 1 and 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Create an array of numbers from 1 to 50
const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

// Shuffle the array
numbers.sort(() => Math.random() - 0.5);

// Return a random number from the shuffled array
export const getRandomExercise = () => numbers[getRandomNumber()];